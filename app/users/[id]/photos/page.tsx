import React from "react";

interface Props {
  params: { id: number };
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Photos = async ({ params: { id } }: Props) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/photos`
  );
  const photos: Photo[] = await res.json();

  return (
    <>
      <div>Photo for user {id}</div>
      <table className="table table-zebra-zebra">
        <thead>
          <tr>
            <th>AlbumId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>ThumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td>{photo.albumId}</td>
              <td>{photo.id}</td>
              <td>{photo.title}</td>
              <td>{photo.url}</td>
              <td>{photo.thumbnailUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Photos;
