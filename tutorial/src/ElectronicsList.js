import React from "react";
import { headsets } from "./Headsets";

const ElectronicsList = (params) => {
  return (
    <section className="electronicslist">
      {headsets.map((headset) => {
        const { title, addsline, wirelength, picture } = headset;
        const clickHandler = () => {
          alert("helllooo worllldd");
        };
        const complexExample = (author) => {
          console.log(author);
        };
        return (
          <div
            className="item"
            onMouseOver={() => {
              console.log(addsline);
            }}
          >
            <h3 onClick={() => console.log(title)}>{title}</h3>
            <h3>{addsline}</h3>
            <h3>{wirelength}</h3>
            <img src={picture} alt="" />
            <button type="button" onClick={clickHandler}>
              reference example
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ElectronicsList