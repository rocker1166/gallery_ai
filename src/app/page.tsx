import { db } from "~/server/db";


export default async function Home() {

const post = await db.query.posts.findMany() ;
console.log(post)
  return (
    <main>
      
     <div className=" m-7 flex flex-wrap justify-center gap-4 p-4">
      {post.map((post) => (
        <div className=" bg-slate-500 flex h-48 w-48 flex-col" key={post.id}>{post.name}</div>
      )) 
        
      }
      
     </div>
     <div>
      <h1 className=" text-[24px] font-extrabold text-red-800  relative sm:text-[200px] text-center my-6 font-serif">Suman</h1>
      </div>
    </main>
  );
}

