import {
 Computer,
 Percent,
    Truck,
} from "lucide-react";



export default function Home() {
  return (
    <div className="min-h-screen bg-[#3d3566] text-white px-10 py-6">

      <div className="flex justify-between items-center mb-20">
        <h1 className="text-xl font-bold">Picksell</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <p>Catalogue</p>
          <p className="text-white border-b-2 ">Business</p>
          <p>Shopping</p>
        </div>

        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded-lg">Sign in</button>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">

        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            The hassle-free platform
            <br />
            to sell globally for less
          </h1>

          <p className="text-gray-300 mb-6">
            Connect your bank account and start selling to the world today!
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Book a demo
            </button>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0">
          <div className="w-48 h-48 bg-red-400 rounded-2xl absolute rotate-12"></div>
          <div className="w-48 h-48 bg-teal-400 rounded-2xl absolute left-10 top-6 rotate-6"></div>
          <div className="w-48 h-48 bg-yellow-400 rounded-2xl relative left-5 top-3 flex items-center justify-center">
            <div className="w-4 h-8 bg-black rounded-full mx-2"></div>
            <div className="w-4 h-8 bg-black rounded-full mx-2"></div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

        <div className="flex gap-4 items-start">
          <div className="bg-gray-200 text-black p-4 rounded-xl"><Computer /></div>
          <div>
            <h3 className="font-semibold">Instant Web & App</h3>
            <p className="text-gray-300 text-sm">Start selling today</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-200 text-black p-4 rounded-xl"><Percent /></div>
          <div>
            <h3 className="font-semibold">Integrated payments</h3>
            <p className="text-gray-300 text-sm">
              &lt;1% transaction fees
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-gray-200 text-black p-4 rounded-xl"><Truck /></div>
          <div>
            <h3 className="font-semibold">
              Integrated global delivery
            </h3>
            <p className="text-gray-300 text-sm">Live tracking</p>
          </div>
        </div>

      </div>

    </div>
  );
}