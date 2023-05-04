import React from "react";

const FilmItem = (props) => {
  const film = props.filmProps;
  // console.log(film.poster.split("/")[6].split('.'))
  return (
    <div className="transform transition duration-200 hover:scale-125">
      {/* <img src={film.poster.split("/")[-1]} /> */}
      <img
        src={"http://localhost:8000/poster/" + film.id}
        className="flex h-64 w-56 md:w-fit md:h-fit justify-center items-center"
      />
      <div className=" flex my-4 justify-start items-center w-56 md:w-fit">
        {film.title}
      </div>
    </div>
  );
};

export default FilmItem;
