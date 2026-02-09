function Table() {
  return (
    <section>
      <h1 className="text-2xl font-bold tracking-wide pl-1.5 py-4">
        Recent Inventory Procurment
      </h1>
      <div className="overflow-x-auto card p-0!">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-[13px] [&_th]:font-semibold [&_th]:text-gray-500 [&_th]:uppercase">
            <tr>
              <th className="">Order ID</th>
              <th>Vendor</th>
              <th>category</th>
              <th>date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 card ">
            {/* Breakfast */}
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">Idk-123</td>
              <td className="px-4 py-3">
                <p className="font-semibold">Sohaib Mansouri</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Product</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold text-gray-600">OCT 28 2023</p>
                <p className="text-sm text-gray-500">7:00 - 10:00 AM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">16000DZD</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Delivered</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
