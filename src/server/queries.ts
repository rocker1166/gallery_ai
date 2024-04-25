import "server-only" ;
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getmypost(){
const user = auth();
//if (!user.userId) throw new Error("User notvjjhvh found");



const post = await db.query.posts.findMany({
    where: (model, {eq}) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  }) ;
  return post;
}