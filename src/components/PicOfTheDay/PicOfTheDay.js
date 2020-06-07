import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./PicOfTheDay.scss";

const apiKey = process.env.REACT_APP_NASA_KEY;

const PicOfTheDay = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => {
        setTimeout(() => {
          setPhoto(res.data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="picoftheday-container">
      {loading ? (
        <Loader type="Bars" color="#FFFFFF" height={50} width={50} />
      ) : (
        <div className="content-container">
          <div className="image-container">
            {photo.media_type === "image" ? (
              <img className="photo" src={photo.url} alt={photo.title} />
            ) : (
              <iframe
                title="space video"
                src={photo.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="video"
              />
            )}
          </div>
          <div className="description-container">
            <h1>{photo.title}</h1>
            <h2>{photo.date}</h2>
            <p>{photo.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PicOfTheDay;
