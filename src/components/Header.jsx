export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
      <input
        className="px-4 py-2 rounded-xl bg-white shadow w-64"
        placeholder="Search..."
      />
      <div className="flex gap-6 items-center text-white">
        <p>Wallet</p>
        <p>Invoices</p>
        <div className="w-10 h-10 rounded-full bg-purple-300" />
      </div>
    </div>
  );
}