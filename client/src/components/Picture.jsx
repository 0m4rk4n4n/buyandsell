import React, { useEffect, useState } from "react";
import "./styles.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from "styled-components";
const Picture = ({ opened, setOpened, picsArr, numSelected, setNumSelected }) => {
  const [filteredArr, setFilteredArr] = useState([]);
  const filteredData = picsArr.filter(item => item !== null);
  const Pic=styled.img
  `
  
  `
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  useEffect(() => {
    if (numSelected >= filteredData.length) setNumSelected(0);
    else if (numSelected < 0) setNumSelected(filteredData.length - 1);
  }, [numSelected]);
  return (
    <div style={{ position: "fixed" }} className="picElement">
      <ArrowBackIosIcon className="arrow" onClick={() => setNumSelected(prev => prev - 1)} style={{ color: "#fff", backgroundColor: "transparent", fontSize: 40, position: "absolute", top: "50%", left: 20, cursor: "pointer" }} />
      <span onClick={() => setOpened(false)} style={{ position: "absolute", top: 10, right: 20, fontSize: 40, color: "white", cursor: "pointer" }}>X</span>
      <ArrowForwardIosIcon className="arrow" onClick={() => setNumSelected(prev => prev + 1)} style={{ color: "#fff", backgroundColor: "transparent", fontSize: 40, position: "absolute", top: "50%", right: 20, cursor: "pointer" }} />
      <div style={{ padding: "20px", backgroundColor: "black", height: "100%", border: "5px solid grey", overflow: "hidden" }}>
        <div className="image-container">
          <img
            className="slide"
            src={filteredData[numSelected] && filteredData[numSelected]}
            alt="Selected"
          />
        </div>
      </div>
    </div>
  );
};

export default Picture;
