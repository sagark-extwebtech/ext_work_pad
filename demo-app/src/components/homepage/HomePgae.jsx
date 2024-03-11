import React, { useEffect, useState } from "react";
import "./homePage.css";

const HomePage = () => {
  const [imgData, setImgData] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [countValue, setCountValue] = useState(0);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      const newImgSrc = data.message;

      setImgSrc(newImgSrc);

      // if (!imgData.includes(newImgSrc)) {
        setImgData([...imgData, newImgSrc]);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = async () => {
    if (countValue < imgData.length - 1) {
      setCountValue((p) => p + 1);
      setImgSrc(imgData[countValue + 1]);
    } else {
      fetchData();
      setCountValue((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (countValue > 0) {
      setCountValue((p) => p - 1);
      setImgSrc(imgData[countValue - 1]);
    }
  };


  return (
    <div className="homepageComponent">
      <div className="img_box">
        <img src={imgSrc} alt="Dog Image" />
      </div>
      <div className="btn_box">
        <button disabled={imgData.length <= 1 || countValue <=0 } onClick={handlePrev}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;

