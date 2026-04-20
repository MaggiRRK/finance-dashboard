export default function Transactions() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold mb-4">Latest Transactions</h2>
        <div className="space-y-4">
            <p className="text-xs text-gray-500 align-text-top">Mon, Mar 1</p>
          <div className="flex justify-between">
            <p>Payment Sent to Shakir</p>
            <p className="text-red-500">-$560.00</p>
          </div>
          <div className="flex justify-between">
            <p>Salary from Redwhale</p>
            <p className="text-green-500">+$12,200.00</p>
          </div>
          <div className="flex justify-between">
            <p>Money Sent to Wise.com</p>
            <p className="text-red-500">-$3,000.00</p>
          </div>
          <p className="text-xs text-gray-500 align-text-top">Mon, Mar 1</p>
          <div className="flex justify-between">
            <p>Purchased Macbook Pro</p>
            <p className="text-red-500">$5560.00</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold mb-4">Upcoming Transactions</h2>
        <div className="space-y-4">
            <p className="text-xs text-gray-500 align-text-top">Today</p>
          <div className="flex justify-between">
            <p >Water Bill</p>
            <p className="text-red-500">-$280</p>
          </div>
          <p className="text-xs text-gray-500 align-text-top">Tomorrow</p>
          <div className="flex justify-between">
            <p>Income: Salary Oct</p>
            <p className="text-green-500">+$1200</p>
          </div>
          <div className="flex justify-between">
            <p>Elctric Bill</p>
            <p className="text-red-500">-$480</p>
          </div>
           <div className="flex justify-between">
            <p>Income: Jane transfers</p>
            <p className="text-green-500">+$500</p>
          </div>
          <div className="flex justify-between">
            <p>Income: Jane transfers</p>
            <p className="text-green-500">+$500</p>
          </div>
        </div>
      </div>

    </div>
  );
}
