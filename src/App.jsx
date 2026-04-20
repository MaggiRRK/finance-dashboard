import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Stats from "./components/Stats";
import Transactions from "./components/Transactions";



export default function App() {
  return (

    <>
   
    <div className=" flex flex-col lg:flex-row min-h-screen bg-linear-to-r from-purple-500 to-purple-800 ">
      <Sidebar />
      <div className="flex-1 p-6">

        <Header />
        <Cards />
         <Stats />
          <Transactions />
      </div>
    </div>
      </> 
    

  );
}
