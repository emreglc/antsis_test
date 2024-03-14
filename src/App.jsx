import axios from 'axios'
import { useEffect, useState } from 'react';
import Papa from 'papaparse'
import ProductsTable from './components/ProductsTable.jsx';

const getToken = async () => {

    const url = 'https://api.digikey.com/v1/oauth2/token';

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const data = {
        grant_type: 'client_credentials',
        client_id: 'UrAYDvwyCyUpEvkBG2FrO1V1lXDAmfIK',
        client_secret: '8yAhIu8V59LLUoSt'
    };

    const res = await axios.post(url, new URLSearchParams(data), { headers })
    if (res.status === 200) return res.data.access_token
}

const getProduct = async (productNumber, token) => {

    try {
        console.log(productNumber)
        const response = await axios.get(`https://api.digikey.com/products/v4/search/${productNumber}/productdetails`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                "X-DIGIKEY-Client-Id": "UrAYDvwyCyUpEvkBG2FrO1V1lXDAmfIK",
            }
        })
        if (response.status !== 200) throw new Error("ERROR")
        else return response
    } catch (error) {
        return error
    }

}

function App() {

    const [productData, setProductData] = useState()
    const [productNumber, setProductNumber] = useState("")
    const [tableData, setTableData] = useState([])
    const [csvData, setCsvData] = useState([])

    useEffect(() => {
        Papa.parse('DSP_2V3_DNP.csv', {
            header: true,
            complete: function (results) {
                console.log('Parsed CSV:', results.data);
                // Extract MANUFACTURER PN column from each line
                const manufacturerPNs = results.data.map(row => row['DIGIKEY PN']);
                console.log('DIGIKEY PNs:', manufacturerPNs);
                setCsvData(manufacturerPNs);
            }
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(productNumber)
        const token = await getToken()
        console.log(token)
        if (token) {
            const response = await getProduct(productNumber, token)
            console.log(response)
            if (response.status === 200) setProductData(response.data.Product)
            else setProductData("ERROR")
        }
    }

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

            <ProductsTable tableData />

        </div>
    )
}

export default App