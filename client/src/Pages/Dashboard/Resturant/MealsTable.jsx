export default function MealPlanTable() {
  return (
    <>
    <h1 className="text-2xl font-bold tracking-wide pl-1.5 py-4">Weekly Menu</h1>
      <div className="overflow-x-auto card p-0!">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                Meal Type
              </th>
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <th
                  key={day}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-600"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {/* Breakfast */}
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">Breakfast</td>
              <td className="px-4 py-3">
                <p className="font-semibold">Oatmeal & Fruit</p>
                <p className="text-sm text-gray-500">7:00 - 10:00 AM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Pancakes</p>
                <p className="text-sm text-gray-500">7:00 - 10:00 AM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Scrambled Eggs</p>
                <p className="text-sm text-gray-500">7:00 - 10:00 AM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Bagels</p>
                <p className="text-sm text-gray-500">7:00 - 10:00 AM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">French Toast</p>
                <p className="text-sm text-gray-500">7:00 - 10:00 AM</p>
              </td>
            </tr>

            {/* Lunch */}
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">Lunch</td>
              <td className="px-4 py-3">
                <p className="font-semibold">Chicken Salad</p>
                <p className="text-sm text-gray-500">11:30 - 2:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Tacos</p>
                <p className="text-sm text-gray-500">11:30 - 2:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Burgers</p>
                <p className="text-sm text-gray-500">11:30 - 2:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Pasta Primavera</p>
                <p className="text-sm text-gray-500">11:30 - 2:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Pizza</p>
                <p className="text-sm text-gray-500">11:30 - 2:00 PM</p>
              </td>
            </tr>

            {/* Dinner */}
            <tr>
              <td className="px-4 py-3 font-medium text-gray-700">Dinner</td>
              <td className="px-4 py-3">
                <p className="font-semibold">Roast Beef</p>
                <p className="text-sm text-gray-500">5:00 - 8:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Salmon</p>
                <p className="text-sm text-gray-500">5:00 - 8:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Stir Fry</p>
                <p className="text-sm text-gray-500">5:00 - 8:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Lasagna</p>
                <p className="text-sm text-gray-500">5:00 - 8:00 PM</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold">Fish & Chips</p>
                <p className="text-sm text-gray-500">5:00 - 8:00 PM</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
