import React from 'react'

export default function ProductsTable(tableData) {
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
                    <tr>
                        <td className="px-4 py-2 border border-gray-400">ABC123</td>
                        <td className="px-4 py-2 border border-gray-400">10</td>
                        <td className="px-4 py-2 border border-gray-400">$10.00</td>
                        <td className="px-4 py-2 border border-gray-400">Product ABC</td>
                        <td className="px-4 py-2 border border-gray-400">Detailed description of product ABC</td>
                        <td className="px-4 py-2 border border-gray-400">0°C to 50°C</td>
                        <td className="px-4 py-2 border border-gray-400">10mm x 10mm</td>
                        <td className="px-4 py-2 border border-gray-400">SMD</td>
                        <td className="px-4 py-2 border border-gray-400">5V</td>
                        <td className="px-4 py-2 border border-gray-400">±0.1%</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-400">ABC123</td>
                        <td className="px-4 py-2 border border-gray-400">10</td>
                        <td className="px-4 py-2 border border-gray-400">$10.00</td>
                        <td className="px-4 py-2 border border-gray-400">Product ABC</td>
                        <td className="px-4 py-2 border border-gray-400">Detailed description of product ABC</td>
                        <td className="px-4 py-2 border border-gray-400">0°C to 50°C</td>
                        <td className="px-4 py-2 border border-gray-400">10mm x 10mm</td>
                        <td className="px-4 py-2 border border-gray-400">SMD</td>
                        <td className="px-4 py-2 border border-gray-400">5V</td>
                        <td className="px-4 py-2 border border-gray-400">±0.1%</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-400">ABC123</td>
                        <td className="px-4 py-2 border border-gray-400">10</td>
                        <td className="px-4 py-2 border border-gray-400">$10.00</td>
                        <td className="px-4 py-2 border border-gray-400">Product ABC</td>
                        <td className="px-4 py-2 border border-gray-400">Detailed description of product ABC</td>
                        <td className="px-4 py-2 border border-gray-400">0°C to 50°C</td>
                        <td className="px-4 py-2 border border-gray-400">10mm x 10mm</td>
                        <td className="px-4 py-2 border border-gray-400">SMD</td>
                        <td className="px-4 py-2 border border-gray-400">5V</td>
                        <td className="px-4 py-2 border border-gray-400">±0.1%</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    )
}
