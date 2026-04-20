export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

      <div className="bg-linear-to-r from-green-200 to-green-400 p-4 rounded-xl shadow w-full max-w-xs">

        <p className="text-xs tracking-wide">CARD NUMBER</p>
        <h2 className="text-sm font-semibold tracking-wider mt-1">
          3829 4820 4629 5025
        </h2>

        <div className="mt-4 flex justify-between items-end">

          <div>
            <p className="text-xs">CARD HOLDER NAME</p>
            <h3 className="text-sm font-bold">Anita Rose</h3>
          </div>

          <div className="text-right">
            <p className="text-[10px]">VALID THRU</p>
            <p className="text-xs font-semibold">12/28</p>
          </div>

        </div>
      </div>

      <div className="bg-orange-400 text-white p-4 rounded-xl shadow w-full max-w-xs">
        <p className="text-sm">Your Saving Status</p>
        <h2 className="text-lg font-bold mt-1">4.28%</h2>
      </div>

      <div className="bg-cyan-400 text-black p-4 rounded-xl shadow w-full max-w-xs">
        <p className="text-sm">Your Working Balance</p>
        <h2 className="text-lg font-bold mt-1">PKR 9,250,000</h2>
      </div>

    </div>
  );
}