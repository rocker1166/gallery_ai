import { ThreeDCardDemo } from "./_components/card";
import Image from "next/image";

export default async function Home() {

  return (
    <main>
   
     <ThreeDCardDemo />
    
     <div>
      <h1 className=" text-[24px] font-extrabold text-red-800  relative sm:text-[200px] text-center my-6 font-serif">Suman</h1>
      </div>
    </main>
  );
}

