import React from "react";
import type { Photo } from "../page";
import Image from "next/image";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = async ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>
        Photo {photoId} for user {id}
      </div>
    </>
  );
};

export default PhotoPage;
