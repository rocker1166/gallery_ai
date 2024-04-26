
import { getmypost } from "~/server/queries";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem} from "./ui/3d-card" ;
import Link from "next/link";

 export async function ThreeDCardDemo() {
    const post = await getmypost();
  return (
    <div className=" sm:flex sm:flex-wrap  justify-center gap-4  mx-3">
    {post.map((post) => (
        <div key={post.id} className="">
    <CardContainer className="inter-var">
      <CardBody className=" bg-cover bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20230910/pngtree-colorful-light-burst-on-a-black-background-image_13153738.png')] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
       
        <CardItem
          as="p"
          translateZ="60"
          className="text-white-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {post.name}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={post.url}
            height="1700"
            width="1200"
            className="h-60 w-full  place-content-center rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Edit ⚙️→
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-50 dark:bg-white dark:text-black text-black text-xs font-bold "
          >
           <a href={post.url}> Download </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
    ))}
    </div>
  );
}
