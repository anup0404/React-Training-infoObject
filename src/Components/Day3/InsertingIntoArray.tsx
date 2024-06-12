import React, { useState } from "react";

type props = {
  id: number;
  name: string;
};
const INITIAL_ARTIST: props[] = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const InsertingIntoArray = () => {
  const [artists, setArtists] = useState<props[]>(INITIAL_ARTIST);
  const [id, setId] = useState<number>(3);
  const [name, setName] = useState<string>("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setId(id + 1);
          setArtists([
            ...artists.slice(0, 1),
            { id: id, name: name },
            ...artists.slice(1),
          ]);
          setName("");
        }}
      >
        Add
      </button>
      <div>
        <ul>
          {artists.map((artist: props) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InsertingIntoArray;
