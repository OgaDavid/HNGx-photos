"use client";

import Masonry from "react-masonry-css";
import CloudinaryImage from "./cloudinary-image";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ForceRefresh } from "@/components/force-refresh";

export default function MasnoryGrid({
  imagesResult,
}: {
  imagesResult: ImageResult[];
}) {
  const [images, updateImages] = useState(imagesResult);
  const router = useRouter();

  useEffect(() => {
    // router.refresh();
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
    <>
    <ForceRefresh />
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
                      <CloudinaryImage
                        imageData={image}
                        tags={image.tags}
                        publicId={image.public_id}
                        onUnheart={(unheartedImage) => {
                          updateImages((currentResources) =>
                            currentResources.filter(
                              (resource) =>
                                resource.public_id !== unheartedImage.public_id
                            )
                          );
                        }}
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
    </>
  );
}
