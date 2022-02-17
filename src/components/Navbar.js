import React, { useState } from "react";

export default function Navbar(props) {
  let listOfColors = ["slate", "red", "orange", "green", "yellow"];
  const [color, setColor] = useState(2);
  const changeColor = () => {
    setColor(Math.floor(Math.random() * 6));
  };
  let y = 100,
    target;
  const scrollToDiv = (target) => {
    window.scrollTo(0, y);
    y += 30;
    if (y < target)
      setTimeout(() => {
        scrollToDiv(target);
      }, 1);
    else {
      y = 100;
    }
  };
  const gradients = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-green-600 to-green-200",
    "bg-gradient-to-r from-orange-600 to-orange-200",
    "bg-gradient-to-r from-indigo-500 to-orange-600",
  ];
  console.log(listOfColors[0]);
  return (
    <nav className={`${gradients[props.number]}`}>
      <ul className="flex justify-end p-5 text-xl text-slate-900 font-bold">
        <li>
          <a
            onMouseEnter={changeColor}
            href=""
            className={`px-5 mr-5 py-2 hover:bg-slate-800 hover:rounded-full hover:text-white hover:shadow-inner hover:font-bold`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(target = 850)}
            className={`px-5 mr-5 py-2 hover:font-bold hover:bg-slate-800 hover:rounded-full hover:text-white hover:shadow-inner`}
            onClick={() => scrollToDiv(850)}
          >
            About
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(target = 2850)}
            onClick={() => scrollToDiv(2850)}
            className={`px-5 mr-5 py-2 hover:font-bold hover:bg-slate-800 hover:rounded-full hover:text-white hover:shadow-inner`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onMouseEnter={(target = 3880)}
            onClick={() => scrollToDiv(3880)}
            className={`px-5 mr-5 py-2 hover:font-bold hover:bg-slate-800 hover:rounded-full hover:text-white hover:shadow-inner`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
