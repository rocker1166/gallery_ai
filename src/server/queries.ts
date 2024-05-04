import "server-only" ;
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getmypost(){
const user = auth();
//if (!user.userId) throw new Error("Unauthorized");



const post = await db.query.posts.findMany({
    where: (model, {eq}) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  }) ;
  return post;
}

export async function getImage(id: number) {
  const user= auth();
  const image = await db.query.posts.findFirst({
    where: (model, {eq}) => eq(model.id,id),

  }) ;
  if (!image) throw new Error("not found");
  if (image.userId !== user.userId) throw new Error("Unauthorized");
  return image;
}