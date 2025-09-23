import React from "react";
import ProductImage from "../../assets/2.jpg"; 

function ProductManagement() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Product Management</h2>
      <button className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
        Add New Product
      </button>

      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3 flex items-center">
              <img
                src={ProductImage}
                alt="Tomatoes"
                className="w-8 h-8 rounded-full mr-2"
              />
              Fresh tomatoes
            </td>
            <td className="p-3">$2.50/kg</td>
            <td className="p-3 text-green-600 font-medium">Active</td>
            <td className="p-3 text-blue-600">Edit | Delete</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 flex items-center">
              <img
                src={ProductImage}
                alt="Eggs"
                className="w-8 h-8 rounded-full mr-2"
              />
              Free-range eggs
            </td>
            <td className="p-3">$4.00/dozen</td>
            <td className="p-3 text-green-600 font-medium">Active</td>
            <td className="p-3 text-blue-600">Edit | Delete</td>
          </tr>
          <tr className="border-t">
            <td className="p-3 flex items-center">
              <img
                src={ProductImage}
                alt="Milk"
                className="w-8 h-8 rounded-full mr-2"
              />
              Fresh milk
            </td>
            <td className="p-3">$1.20/liter</td>
            <td className="p-3 text-gray-500 font-medium">Inactive</td>
            <td className="p-3 text-blue-600">Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProductManagement;