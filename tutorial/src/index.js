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

const ElectronicsList = (params) => {
  return (
    <section className="electronicslist">
      Your Favourite Electronicssss....
      <Items warranty="2yrs" />
      <Items warranty="8yrs" />
      <Items warranty="9yrs" />
      <Items warranty="1yrs" />
      <Items warranty="3yrs" />
      <Items warranty="9yrs" />
      <Items
        title={headset1.title}
        addsline={headset1.addsline}
        wirelength={headset1.wirelength}
      />
      <Items
        title={headset2.title}
        addsline={headset2.addsline}
        wirelength={headset2.wirelength}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque
          sit. Reprehenderit magnam nisi sed! Nihil sunt aperiam et illum.
        </p>
      </Items>
      <Items
        title={headset3.title}
        addsline={headset3.addsline}
        wirelength={headset3.wirelength}
      />
    </section>
  );
};

const headset1 = {
  title: "Headset for lovers",
  addsline: "Very comfy",
  wirelength: "30cm",
};

const headset2 = {
  title: "Headset for singers",
  addsline: "Very soft",
  wirelength: "70cm",
};

const headset3 = {
  title: "Headset for listeners",
  addsline: "Very stylish",
  wirelength: "10cm",
};

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

// ReactDom.render(<Greeting />,document.getElementById('root'))
ReactDom.render(<ElectronicsList />, document.getElementById("root"));
