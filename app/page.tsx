import Image from "next/image";
import Sidebar from "./components/Sidebar/page";
import Dashboard from "./components/Dashboard/page";

export default function Home() {
  return (
    <div className='flex bg-slate-100'>
      <Sidebar />
      <Dashboard/>
    </div>

  );
}
