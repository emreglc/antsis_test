import React, { useEffect } from 'react'

export default function ProductsTable(tableData) {

    useEffect(() => {
        console.log(tableData)
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Manufacturer Product Number</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Quantity Available</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Unit Price</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Product Description</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Detailed Description</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Operating Temperature</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Size / Dimension</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Package / Case</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Voltage - Rated</th>
                        <th className="px-4 py-2 bg-gray-200 border border-gray-400">Tolerance</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 && tableData.map((product, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border border-gray-400">{product.manufacturerPN}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.quantityAvailable}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.unitPrice}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.productDescription}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.detailedDescription}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.operatingTemperature}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.sizeDimension}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.packageCase}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.voltageRated}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.tolerance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
