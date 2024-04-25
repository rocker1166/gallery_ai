
import { getmypost } from "~/server/queries";

async function picture() {
  const post = await getmypost();
  return (
    <div>

        <div className=" m-1 flex flex-wrap justify-center gap-2 ">
      {post.map((post) => (
        <>
 
 <div className="relative group w-96 h-96 overflow-hidden border-4 m-3 flex flex-wrap justify-center gap-4 p-2 rounded-lg">
  <img  alt="jkb"  key={post.id} className=" object-fill w-full h-full transform duration-700 backdrop-opacity-100" src={post.url} />
  <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
  <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
    <div className="absolute w-full flex place-content-center">
      <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Team work</p>
    </div>
    <br></br>
    <div className="absolute w-full flex place-content-center mt-20" key={post.id}>
  <p>{post.name}</p>
    </div>
    <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48"><a href={post.url} download >Download</a>
</button>
  </div>
</div>
        </>
      ))}
      
      </div>
     
    </div>
  )
}

export default picture