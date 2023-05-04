import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";

const access_token = localStorage.getItem("access");
const user_id = localStorage.getItem("user_id");

const FilmPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [rate, setRate] = useState(0);
  const [numRate, setNumRate] = useState(0);
  let url = `http://localhost:8000/movie/retrieve/${id}`;
  useEffect(() => {
    const getFilm = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        // console.log(access_token)
        setFilm(res.data);
        // console.log(totalItems)
      } catch (error) {
        console.log("error error.......");
        console.log(error.message);
      }
    };

    getFilm();
  }, [url]);

  const onChangeRate = (score) => {
    if (numRate === 0) {
      setRate(score);
      console.log(score);
    }
  };
  const ConFirmRate = async (score) => {
    if (numRate === 0) {
      setRate(score);
      setNumRate(numRate + 1);
      console.log(film.id);
      console.log(user_id);
      
      let payload = {
        movie: film.id,
        user: user_id,
        rating: rate,
      };
      try {
        const res = await axios.post(
          "http://localhost:8000/movie/rating/",
          payload,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const rating_stars = [];
  for (let i = 1; i <= 10; i++) {
    rating_stars.push(
      <button key={i}>
        <svg
          aria-hidden="true"
          className={
            i <= rate ? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-400"
          }
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onMouseOver={() => onChangeRate(i)}
          onClick={() => ConFirmRate(i)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </button>
    );
  }

  return (
    <div>
      <NavBar />
      {film === null ? (
        <div>ko co phim</div>
      ) : (
        <div className="my-16 py-16">
          <img
            src={"http://localhost:8000/poster/" + film.id}
            className="flex h-64 w-56 md:w-fit md:h-fit justify-center items-center"
          />
          <div className=" flex my-4 justify-start items-center w-56 md:w-fit">
            {film.title}
          </div>
          <div className="flex items-center">
            {rating_stars}
            <div>
              {numRate != 0 ? (
                <p>You rated this film {rate} out of 10 stars!</p>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmPage;
