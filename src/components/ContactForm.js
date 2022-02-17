import React from "react";

export default function ContactForm(props) {
  const gradients = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-green-600 to-green-200",
    "bg-gradient-to-r from-orange-600 to-orange-200",
    "bg-gradient-to-r from-indigo-500 to-orange-600",
  ];
  return (
    <section className="bg-slate-900 text-slate-100 py-24">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <div className={`mx-52 my-12 text-white p-10 bg-slate-800 rounded-xl`}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdb_79mrMZ1gLCfcFcgV0KRZTkaDtaVon_mLF7EZPpWmZ6gSg/viewform?embedded=true"
          width="780"
          height="1100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
