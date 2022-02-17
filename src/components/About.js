import React from "react";

export default function About() {
  return (
    <section
      className="py-24 bg-slate-900 text-slate-100 scroll-smooth"
      id="about"
      name="about"
    >
      <h1 class="text-center text-4xl  font-bold">Something About Me</h1>
      <div className="flex justify-around pl-32 mt-16">
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_JhSJFE.json"
          background="transparent"
          speed="2"
          loop
          autoplay
          style={{ height: 300, width: 400 }}
        ></lottie-player>
        <div className="w-1/2 pt-24">
          <h1 className="text-2xl font-bold">Hi I am Yash.</h1>
          <p className="w-3/4">
            I am 19 years old and I was born in Bhopal, Madhya Pradesh, India. I
            am a person who prefers to be alone(not single 😅) and be lost in my
            thoughts. I am a very silent and observant person who may complain
            about simple things. The only thing I desire is to stay happy and
            have a lot of money.
          </p>
        </div>
      </div>
      <div className="flex justify-around pl-32 mt-16">
        <lottie-player
          src="https://assets9.lottiefiles.com/private_files/lf30_gcroxmlt.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ height: 300, width: 400 }}
        ></lottie-player>
        <div className="w-1/2 pt-24">
          <h1 className="text-2xl font-bold">I Love Coding.</h1>
          <p className="w-3/4">
            I have always been a tech-savvy person and I continue to be one. I
            have keen interest in coding and development. Some of the
            technologies I am aware of are HTML, CSS, JavaScript, React.Js,
            Python, C++, C. I have already secured second and third positions in
            two state level hackathons 😁. I also have a lot of interest in
            playing with various hardware as well.
          </p>
        </div>
      </div>
      <div className="flex justify-around pl-32 mt-16">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_01jwptn4.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ height: 300, width: 400 }}
        ></lottie-player>
        <div className="w-1/2 pt-24">
          <h1 className="text-2xl font-bold">I Think I Can Design.</h1>
          <p className="w-3/4">
            Graphic Designing was never one of my interests, but once I joined
            my college I was introduced to ECell-RGPV. They introduced me to the
            world of graphic designing and I fell in love ❤️. Now I can
            confidently say I can design very professional looking posters using
            Adobe Illustrator and Photoshop. Feel free to hire me😁.
          </p>
        </div>
      </div>
      <div className="flex justify-around pl-32 mt-16">
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_jhlaooj5.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ height: 300, width: 400 }}
        ></lottie-player>
        <div className="w-1/2 pt-24">
          <h1 className="text-2xl font-bold">I Click Good Photos</h1>
          <p className="w-3/4">
            I am a natural photographer. I can find really cool and creative
            ways to take pictures of the same subject multiple times. Once I
            learned graphic designing, that made an even better photographer. I
            also have a DSLR and a really good phone(mostly used) for capturing
            photos.
          </p>
        </div>
      </div>
      <div className="flex justify-around pl-32 mt-16">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_wcfkpodg.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ height: 300, width: 400 }}
        ></lottie-player>
        <div className="w-1/2 pt-24">
          <h1 className="text-2xl font-bold">Music Is Life</h1>
          <p className="w-3/4">
            I cannot express in words how much I love music. I listen to the old
            kind of music like John Denver and Elvis Presley. I can play quite a
            few instruments as well like piano, violin, kongo, xylophone, flute
            and more. To give you some perspective, I listen to music at least
            three hours each day.
          </p>
        </div>
      </div>
    </section>
  );
}
