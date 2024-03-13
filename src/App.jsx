import axios from 'axios'
import { useState } from 'react'

function App() {

    const [productData, setProductData] = useState(null)
    const [productNumber, setProductNumber] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProductData({ "submit": "success" })
    }

    return (
        <div className="bg-gray-200 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md w-[50vw]">
                {/* String Input */}
                <form className="mb-4" onSubmit={handleSubmit}>
                    <label htmlFor="inputText" className="block text-md font-medium text-gray-600">Enter Product Number:</label>
                    <input value={productNumber} onChange={(e) => setProductNumber(e.target.value)} type="text" id="inputText" name="inputText" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                    <button type='submit' className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
                </form>

                {/* Display Part */}
                <div className="border-t pt-4">
                    <label htmlFor="displayText" className="block text-md font-medium text-gray-600">Product Details</label>
                    <div id="displayText" className="mt-2 p-4 bg-gray-100 border rounded-md h-96 overflow-auto text-sm">
                        <pre>{JSON.stringify(productData, null, 2)}</pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App