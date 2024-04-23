import { db } from "~/server/db";


export default async function Home() {

const post = await db.query.posts.findMany() ;
console.log(post)
  return (
    <main>
      
     <div>
      {post.map((post) => (
        <div key={post.id}>{post.name}</div>
      )) 
        
      }
      <h1 className=" text-[240px] font-extrabold text-red-800 ">grgreg</h1>
     </div>
    </main>
  );
}

