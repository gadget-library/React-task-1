import React from "react";

export default function Landing(props) {
  const gradients = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-green-600 to-green-200",
    "bg-gradient-to-r from-orange-600 to-orange-200",
    "bg-gradient-to-r from-indigo-500 to-orange-600",
  ];
  console.log(gradients[props.number]);
  return (
    <section className={`pb-48 ${gradients[props.number]}`} id="landing">
      <div className="lg:flex justify-around pr-52 py-14 pl-48">
        <div className="pt-24 mr-12">
          <h1 className="text-6xl font-extrabold text-fuchsia-100 pl-2 name">
            Yash Ketan Agnihotri
          </h1>
          {/* <p className="text-xl pt-3 pl-3 text-slate-800">A Web Developer.</p> */}
          <button className="bg-slate-800 shadow-lg shadow-slate-800/30 text-white px-5 py-1 rounded-full mt-10 text-xl animate-bounce hover:bg-slate-900 font-bold">
            {"<A Web Developer />"}
          </button>
        </div>
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_rhnmhzwj.json"
          background="transparent"
          speed="2"
          loop
          autoplay
          style={{ height: 400, width: 400 }}
        ></lottie-player>
      </div>
    </section>
  );
}
