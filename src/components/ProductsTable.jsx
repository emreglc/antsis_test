import React, { useEffect } from 'react'

export default function ProductsTable(props) {

    const { tableData } = props

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
                            <td className="px-4 py-2 border border-gray-400">{product.ManufacturerProductNumber}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.QuantityAvailable}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.UnitPrice}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Description.ProductDescription}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Description.DetailedDescription}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Parameters[4].ValueText}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Parameters[11].ValueText}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Parameters[10].ValueText}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Parameters[2].ValueText}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Parameters[1].ValueText}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
