"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function MarkAsFavourite(publicId: string) {
  await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  revalidatePath("/gallery")
}
