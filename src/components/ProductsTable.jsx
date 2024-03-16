import React, { useEffect } from 'react'

export default function ProductsTable(props) {

    const { tableData } = props

    const findValueTextByParameterText = (parameters, parameterText) => {
        const parameter = parameters.find(param => param.ParameterText === parameterText);
        return parameter ? parameter.ValueText : ''; // Return ValueText if parameter is found, otherwise empty string
    };

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
                        <tr key={index} className={product.QuantityAvailable < 100000 ? "text-red-600" : ""}>
                            <td className="px-4 py-2 border border-gray-400">{product.ManufacturerProductNumber}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.QuantityAvailable}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.UnitPrice}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Description.ProductDescription}</td>
                            <td className="px-4 py-2 border border-gray-400">{product.Description.DetailedDescription}</td>
                            <td className="px-4 py-2 border border-gray-400">{findValueTextByParameterText(product.Parameters, "Operating Temperature")}</td>
                            <td className="px-4 py-2 border border-gray-400">{findValueTextByParameterText(product.Parameters, "Size / Dimension")}</td>
                            <td className="px-4 py-2 border border-gray-400">{findValueTextByParameterText(product.Parameters, "Package / Case")}</td>
                            <td className="px-4 py-2 border border-gray-400">{findValueTextByParameterText(product.Parameters, "Voltage - Rated")}</td>
                            <td className="px-4 py-2 border border-gray-400">{findValueTextByParameterText(product.Parameters, "Tolerance")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
