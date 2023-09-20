"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { imageData, tags } from "@/data/data";
import Image from "next/image";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { GripVertical } from "lucide-react";

export default function Gallery() {
  const [tagName, setTagName] = useState("");
  const router = useRouter();

  const [images, setImages] = useState(imageData);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const draggableImages = [...images];

    const [reorderedImages] = draggableImages.splice(result.source.index, 1);

    draggableImages.splice(result.destination!!.index, 0, reorderedImages);

    setImages(draggableImages);
  };

  const handleSearch = (tag: string) => {
    if (tag === "") {
      setImages(imageData);
      return;
    }
    const filteredImages = imageData.filter((image) =>
      image.tags.includes(tag)
    );

    setImages(filteredImages);
  };

  return (
    <>
      {/* SEARCH BAR */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(tagName.toLowerCase());
          router.refresh();
        }}
      >
        <Label htmlFor="tag-name" className="text-right pb-1">
          Search By Tag
        </Label>
        <div className="flex gap-2">
          <Input
            className="md:max-w-[300px]"
            onChange={(e) => setTagName(e.currentTarget.value)}
            id="tag-name"
            placeholder="Search image by tag..."
            value={tagName}
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <p className="text-base mt-2 font-medium">Tags:</p>
      <div className="flex items-center gap-2 flex-wrap my-1">
        {tags.map((tag) => (
          <span
            onClick={() => {
              setTagName(tag.tagName);
              handleSearch(tag.tagName);
            }}
            className="px-2 cursor-pointer py-[6px] rounded-md bg-gray-100 text-black"
            key={tag.id}
          >
            {tag.tagName}
          </span>
        ))}
      </div>

      {/* IMAGES SECTION */}
      <section className="pt-10">
        {images.length === 0 ? (
          <div className="flex py-20 items-center justify-center">
            <h2 className="text-xl font-medium">👀 No images found.</h2>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="grid">
              {(provided) => (
                <section
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {images.map((image, idx) => (
                    <Draggable
                      key={image.id}
                      draggableId={idx.toString()}
                      index={idx}
                    >
                      {(provided) => (
                        <article
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="flex relative group pb-[15px] transition duration-300 flex-col items-center"
                        >
                          <GripVertical className="absolute text-gray-100 top-2 right-2 w-5 h-5 md:hidden md:group-hover:flex" />
                          <Image
                            className="w-[200px] h-[200px] object-cover rounded-md"
                            alt="image"
                            src={image.url}
                            width={300}
                            height={300}
                          />
                        </article>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </section>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </section>
    </>
  );
}
