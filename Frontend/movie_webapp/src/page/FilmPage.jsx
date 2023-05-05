import React, { useEffect, useState,  } from "react";
import { useParams, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import RCM_FilmList from "../components/RCM_FilmList/RCM_FilmList";
import FilmItem from "../components/FilmItem/FilmItem";
const access_token = localStorage.getItem("access");
const user_id = localStorage.getItem("user_id");

const FilmPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); 
  const [film, setFilm] = useState(null);
  const [rate, setRate] = useState(0);
  const [ratePermit, setRatePermit] = useState(false);
  const [rcmFilm, setRcmFilm] = useState([])
  let url = `http://localhost:8000/movie/retrieve/${id}`;

  useEffect(() => {
    // console.log(location.pathname)
    const lote = location.pathname.split("/")[2]
    console.log(lote)
    // const real_id = 
    const getData = async () => {
      try {
        const film_res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        console.log(film_res.data);
        setFilm(film_res.data);
      } catch (error) {
        console.log("error to get film.......");
        console.log(error.message);
      }

      try {
        const res = await axios.get(
          `http://localhost:8000/movie/rating/retrieve/${user_id}/${lote}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        console.log(res.data);
        if (res.data != null && res.data != {} && res.data.rating > 0) {
          setRate(res.data.rating);
          setRatePermit(false);
        } else {
          setRate(0);
          setRatePermit(true);
        }
      } catch (error) {
        console.log("error to get rate:....");
        console.log(error.message);
        setRate(0);
        setRatePermit(true);
      }

      try {
        const rcm_res = await axios.get(
        `http://localhost:8000/movie/recommender/content/${lote}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        console.log(rcm_res.data);
        setRcmFilm(rcm_res.data);
      } catch (error) {
        console.log("error to get RCM film.......");
        console.log(error.message);
      }

    };
    getData();
  }, []);

  const handlePermitChange = () => {
    if (ratePermit && rate > 0) {
      ConFirmRate(rate);
    }
    setRatePermit(!ratePermit);
  };

  const onChangeRate = (score) => {
    if (ratePermit) {
      setRate(score);
      console.log(score);
    }
  };
  const ConFirmRate = async (score) => {
    const user_id = localStorage.getItem("user_id");
    setRate(score);
    // setNumRate(numRate + 1);
    // console.log(film.id);
    // console.log(user_id);

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
  };

  const handleFilmClick  = (id) => {

    navigate(`/home/${id}`)
    window.location.reload()
  }

  const rating_stars = [];
  for (let i = 1; i <= 10; i++) {
    rating_stars.push(
      <button key={i}>
        <svg
          aria-hidden="true"
          className={
            i <= rate ? "w-12 h-12 text-yellow-400" : "w-10 h-10 text-gray-400"
          }
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onMouseOver={() => onChangeRate(i)}
          // onClick={() => ConFirmRate(i)}
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
        <div>
          <div className=" flex my-4 w-5/6 md:w-full font-sans font-bold text-left mx-4 text-5xl">
            {film.title}
          </div>
          <div className="w-4/5 mx-auto md:h-4/6">
            <iframe
              width='100%'
              height='920'
              src={film.trailer}
              frameBorder="0"
              allowFullScreen
              className="w-1080 h-920"
            />
          </div>
          <div className="flex my-4 mx-4">
            {rating_stars}
            {rate > 0 ? (
              <p className="mx-4 my-1 text-4xl font-semibold">{rate}/10</p>
            ) : (
              <p />
            )}
          </div>
          <button
            onClick={handlePermitChange}
            className="btn mt-1 mb-4 mx-4 text-xl font-semibold justify-center text-center"
          >
            {ratePermit === true ? "Submit" : "Re-rate"}
          </button>
          {/* <div>
            {rate != 0 ? (
              <p>You rated this film {rate} out of 10 stars!</p>
            ) : (
              <div />
            )}
          </div> */}
           <p className="mx-4 my-1 text-4xl font-semibold">The films that you may like</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 mx-16">

          {rcmFilm.map((film) => (
            <div key={film.id}>
              
                <div onClick={() => handleFilmClick(film.id)}>
                  <FilmItem filmProps={film} key={film.id} />
                </div>
                
              {/* </Link> */}
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default FilmPage;
