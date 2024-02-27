// import React from "react";
// import "./homePage.css";
// import { useState } from "react";

// const HomePage = () => {
//   const [imgData, setImgData] = useState([]);
//   const [imgSrc, setImgSrc] = useState("");
//   const [countValue, setCountValue] = useState(0);

//   const fetchData = async () => {
//     const res = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await res.json();
//     setImgSrc(data.message);

//     if (!imgData.includes(data.message)) {
//       setImgData([...imgData, data.message]);
//     }
//   };

//   const handleNext = () => {};
//   const handlePrev = () => {
//     console.log({ imgData });
//     setCountValue((p) => p + 1);
//     if (imgData.length > 0) {
//       setImgSrc(imgData[imgData.length - countValue]);
//     }
//   };

//   const imgsrc = "https://images.dog.ceo/breeds/whippet/n02091134_14646.jpg";
//   return (
//     <div className="homepageComponent">
//       <div className="img_box">
//         <img src={imgSrc || imgsrc} alt="Dog Image" />
//       </div>
//       <div className="btn_box">
//         <button disabled={imgData.length === 0 || countValue > imgData.length } onClick={handlePrev}>
//           Prev
//         </button>
//         <button onClick={fetchData}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React, { useEffect, useState } from "react";
import "./homePage.css";

const HomePage = () => {
  const [imgData, setImgData] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [countValue, setCountValue] = useState(0);

  const apiURL = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      const newImgSrc = data.message;

      setImgSrc(newImgSrc);

      if (!imgData.includes(newImgSrc)) {
        setImgData([...imgData, newImgSrc]);
      }
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

