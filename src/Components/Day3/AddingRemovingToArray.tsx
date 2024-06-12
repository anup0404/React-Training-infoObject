import React, { useState } from "react";

interface artistObj {
  id: number;
  name: string;
}
const AddingToArray = () => {
  const [name, setName] = useState<string>("");
  const [artists, setArtists] = useState<artistObj[]>([]);
  const [id, setId] = useState(0);

  return (
    <div>
      <p>push() will mutate an array, which you don’t want:</p>
      <h2>Inspiring sculptors:</h2>

      <input
        type="text"
        value={name}
        placeholder="write your Name..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setId(id + 1);
          setArtists([...artists, { id: id, name: name }]);
          setName("");
        }}
      >
        Add
      </button>

      <div>
        <ol>
          {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}
              <button
                onClick={() => {
                  setArtists(artists.filter((ele) => ele.id !== artist.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AddingToArray;
