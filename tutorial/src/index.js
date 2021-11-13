import React from 'react'
import ReactDom from 'react-dom'


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

function Greeting(){
  return (
    <>
    <div>
      <Person />
      <Message />
      <h3> hellloo.. people</h3>
      <p> This is my messageeee</p>
      <ul><li><a href='#'>Hiiiiii</a></li></ul>
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
    <section>
      Your Favourite Electronicssss....
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </section>
  )
}

const Items = (params) => {
  return (
  <article> 
    <Image />
    <Company />
    This is an electronics item
  </article>
  );
}
const Image = (params) => {
  return <img src="https://m.media-amazon.com/images/I/61+WYAjltpL._AC_UL320_.jpg" alt=""/>
}
const Company = (params) => {
  return <h3>Headset..</h3>
  
}




// ReactDom.render(<Greeting />,document.getElementById('root'))
ReactDom.render(<ElectronicsList />,document.getElementById('root'))
