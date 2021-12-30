import React from "react";
import ReactDom from "react-dom";

import "./index.css";

// JSX Rules
// return single element
// dev / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// Nested Components, React Tools

// function Greeting(){
//   return <h4>This is Agath and this is my first component</h4>
// }

// function Greeting(){
//   return (
//     <div>
//       <h3> hellloo.. people</h3>
//       <ul><li><a href='#'>Hiiiiii</a></li></ul>
//     </div>
//   );
// }

function Greeting() {
  return (
    <>
      <div>
        <Person />
        <Message />
        <h3> hellloo.. people</h3>
        <p> This is my messageeee</p>
        <ul>
          <li>
            <a href="#">Hiiiiii</a>
          </li>
        </ul>
      </div>
      <div>
        <h2> Testing React Fragment</h2>
      </div>
    </>
  );
}

// const Greeting = (params) => {
//   return (
//     <div>
//       <h1> Hellllooooo... </h1>
//     </div>
//   )
// }

// const Greeting = (params) => {
//   return React.createElement('h2',{},'This is Agath')
// }

// const Greeting = (params) => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'hellooooo... create...')
//   )
// }
const Person = () => {
  return <h2> Macines Only</h2>;
};

const Message = () => {
  return <p>You will love this message</p>;
};

const names = ["ag", "jo", "mn"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);

const ElectronicsList = (params) => {
  return <section className="electronicslist">
    {headsets.map((headset)=>{
      const {title,addsline,wirelength,picture}=headset;
      const clickHandler=()=>{
        alert('helllooo worllldd');
      }
      const complexExample=(author)=>{
        console.log(author);
      }
      return <div className="item" onMouseOver={()=>{
        console.log(addsline);
      }}>
        <h3 onClick={()=>console.log(title)}>{title}</h3>
        <h3>{addsline}</h3>
        <h3>{wirelength}</h3>
        <img
          src={picture}
          alt=""
        />
        <button type='button' onClick={clickHandler}>
        reference example
        </button>
      </div>
    })}
    </section>;
};

const headsets = [
  {
    title: "Headset for lovers",
    addsline: "Very comfy",
    wirelength: "30cm",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw256S4u1V6GQrn49aAC4BD49BZ5PNqpweA_ZZE5w5ct8WeTtZH4-t3lJOpnhEOVTBfRw&usqp=CAU"
  },
  {
    title: "Headset for singers",
    addsline: "Very soft",
    wirelength: "70cm",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw256S4u1V6GQrn49aAC4BD49BZ5PNqpweA_ZZE5w5ct8WeTtZH4-t3lJOpnhEOVTBfRw&usqp=CAU"
  },
  {
    title: "Headset for listeners",
    addsline: "Very stylish",
    wirelength: "10cm",
  },
  {
    title: "Headset for llllisteners",
    addsline: "Very stylish",
    wirelength: "12cm",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw256S4u1V6GQrn49aAC4BD49BZ5PNqpweA_ZZE5w5ct8WeTtZH4-t3lJOpnhEOVTBfRw&usqp=CAU"
  },
];

const volume = "30000Hz";

const Items = (params) => {
  const weight = "20000Kg";
  const { warranty, title, addsline, wirelength, children } = params; // direct destructuring
  return (
    <article className="item">
      <Image />
      <Company />
      <Cost />
      This is an electronics item
      <h3>{weight}</h3>
      {children}
      <h3>{volume.toUpperCase()}</h3>
      <h4>{warranty}</h4>
      <h3>{title ? title : "no title"}</h3>
      <h3>{addsline ? addsline : "no addsline"}</h3>
      <h3>{wirelength ? wirelength : "no wirelength"}</h3>
    </article>
  );
};
const Image = (params) => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/61+WYAjltpL._AC_UL320_.jpg"
      alt=""
    />
  );
};
const Cost = (params) => {
  return <h1>222 eth</h1>;
};

const Company = (params) => {
  return <h3>Headset..</h3>;
};

//ReactDom.render(<Greeting />,document.getElementById('root'))
ReactDom.render(<ElectronicsList />, document.getElementById("root"));
//ReactDom.render(<Items />, document.getElementById("root"));
