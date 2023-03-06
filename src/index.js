//! How ReactDOM.render works as vanillia javascript
//* ReactDOM.render(<h1>Hi</h1>,document.getElementById("root"))
// const para = document.createElement("h1");
// para.className = "header";
// const node = document.createTextNode("This is a new paragraph.");
// para.appendChild(node);

// const root = document.getElementById("root");

// root.appendChild(para);
// console.log(root);

// ! Add a variable as render element
// const page =(
//     <nav>
//         <h1>Website's Name</h1>
//         <ul>

//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(page,document.getElementById("root"))

//! We need to specify this import (React) in order to able to use JSX syntax
// ? From version 17 and above this no longer exists
// import React from "react";

// import ReactDOM from "react-dom"

//* Challenge Thought Experiment
//? When using append method the <nav> renders to page as object we have to use the stringify method to return string
// const page =(
//     <div>
//         <h1>Fun facts about React</h1>
//         <ul>

//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>

//         </ul>
//     </div>
// )
// ReactDOM.render(page,root)
// const root = document.getElementById("root");

// root.append(JSON.stringify(page));

// //* Project 1 Part1 Markup
// const page =(
//     <div>
//         <img src="./react-logo.png" width = "40px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//              <li>Is maintained by Facebook</li>
//              <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// const root = document.getElementById("root");

// ReactDOM.render(page,root)

//* Components
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import Navbar from "./components/Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Page() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
