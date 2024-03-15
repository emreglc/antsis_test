import axios from 'axios'
import { useEffect, useState } from 'react';
import Papa from 'papaparse'
import ProductsTable from './components/ProductsTable.jsx';

const getToken = async () => {

    const url = 'https://sandbox-api.digikey.com/v1/oauth2/token';

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const data = {
        grant_type: 'client_credentials',
        client_id: 'YeCH2Ze1I0NAK5SEMO6BfimvrJ9CAR0X',
        client_secret: 'jyAXzPGGGpb4HGBM'
    };

    const res = await axios.post(url, new URLSearchParams(data), { headers })
    if (res.status === 200) return res.data.access_token
}

const getProduct = async (productNumber, token) => {

    try {
        console.log(productNumber)
        const response = await axios.get(`https://sandbox-api.digikey.com/products/v4/search/${productNumber}/productdetails`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                "X-DIGIKEY-Client-Id": "YeCH2Ze1I0NAK5SEMO6BfimvrJ9CAR0X",
            }
        })
        return response.data.Product
    } catch (error) {
        console.error('Axios Error:', error);
        return { error: error }; // Mark product with error
    }

}

function App() {

    const [tableData, setTableData] = useState([])
    const [digiKeyPNs, setDigiKeyPNs] = useState([]);

    const fetchProducts = async (token, batch) => {
        console.log('Fetching products for batch:', batch);
        const promises = batch.map(pn => getProduct(pn, token));
        try {
            const products = await Promise.all(promises);
            console.log('Products fetched:', products);
            // Filter out products with errors
            const filteredProducts = products.filter(product => !product.error);
            setTableData(prev => [...prev, ...filteredProducts]);
        } catch (error) {
            console.error('Error fetching products:', error);
            // Retry with exponential backoff if error is 429 (Too Many Requests)
            if (error.response && error.response.status === 429) {
                console.log('Rate limited, retrying with exponential backoff...');
                await retryWithExponentialBackoff(() => fetchProducts(token, batch));
            }
        }
    }

    useEffect(() => {
        console.log('Table data updated:', tableData);
    }, [tableData])

    const retryWithExponentialBackoff = async (func, maxRetries = 5, baseDelay = 1000) => {
        let retries = 0;
        let delay = baseDelay;
        while (retries < maxRetries) {
            try {
                return await func();
            } catch (error) {
                console.error('Error:', error);
                if (error.response && error.response.status === 429) {
                    retries++;
                    console.log(`Retry attempt ${retries} after ${delay}ms delay`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2; // Exponential backoff
                } else {
                    throw error;
                }
            }
        }
        throw new Error('Max retries exceeded');
    };

    const parseFile = async (file) => {
        Papa.parse(file, {
            header: true,
            complete: function (results) {
                console.log('Parsed CSV:', results.data)
                const digiKeyPNs = results.data.map(row => row['DIGIKEY PN']).filter(pn => pn)
                console.log('Digi-Key PNs:', digiKeyPNs)
                setDigiKeyPNs(digiKeyPNs)
            }
        })

    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        parseFile(file)
    };

    useEffect(() => {
        const getTokenAndFetchProducts = async () => {
            const token = await getToken();
            if (token && digiKeyPNs.length > 0) {
                // Define batch size (e.g., 10)
                const batchSize = 10;
                // Split digiKeyPNs into batches
                const batches = [];
                for (let i = 0; i < digiKeyPNs.length; i += batchSize) {
                    batches.push(digiKeyPNs.slice(i, i + batchSize));
                }
                // Fetch products for each batch with rate limiting
                for (const batch of batches) {
                    await fetchProducts(token, batch);
                }
            }
        };

        getTokenAndFetchProducts();
    }, [digiKeyPNs]);

    return (
        <div className="bg-gray-200 h-screen flex items-center justify-center">
            {/* <div className="bg-white p-8 rounded-md shadow-md w-[50vw]">
                
                <form className="mb-4" onSubmit={handleSubmit}>
                    <label htmlFor="inputText" className="block text-md font-medium text-gray-600">Enter Product Number:</label>
                    <input value={productNumber} onChange={(e) => setProductNumber(e.target.value)} type="text" id="inputText" name="inputText" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                    <button type='submit' className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
                </form>

                <div className="border-t pt-4">
                    <label htmlFor="displayText" className="block text-md font-medium text-gray-600">Product Details</label>
                    <div id="displayText" className="mt-2 p-4 bg-gray-100 border rounded-md h-96 overflow-auto text-sm">
                        <pre>{JSON.stringify(productData, null, 2)}</pre>
                    </div>
                </div>
            </div> */}

            <div className="flex items-center justify-center w-full">
                <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                    Upload CSV File
                </label>
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    accept=".csv"
                    onChange={handleFileChange}
                />
            </div>

            <ProductsTable tableData={tableData} />

        </div>
    )
}

export default App