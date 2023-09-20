"use client";

import Masonry from "react-masonry-css";
import { GripVertical } from "lucide-react";
import CloudinaryImage from "./cloudinary-image";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export default function MasnoryGrid({
  imagesResult,
}: {
  imagesResult: ImageResult[];
}) {
  const [images, updateImages] = useState(imagesResult);

  useEffect(() => {
    updateImages(images);
  }, [imagesResult]);

  //   reorder images on image drop

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const draggableImages = [...images];

    const [reorderedImages] = draggableImages.splice(result.source.index, 1);

    draggableImages.splice(result.destination!!.index, 0, reorderedImages);

    updateImages(draggableImages);
  };

  //   Masnory grid breakpoints
  const breakpointColumns = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="masnory_grid">
        {(provided) => (
          <section {...provided.droppableProps} ref={provided.innerRef}>
            <Masonry
              breakpointCols={breakpointColumns}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((image, idx) => (
                <Draggable
                  key={image.public_id}
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
                      <span className="">
                        <GripVertical className="absolute md:hidden md:group-hover:flex top-2 right-[6px] text-gray-50 opacity-50 w-6 h-6" />
                      </span>
                      <CloudinaryImage
                        tags={image.tags}
                        publicId={image.public_id}
                      />
                    </article>
                  )}
                </Draggable>
              ))}
            </Masonry>
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}
