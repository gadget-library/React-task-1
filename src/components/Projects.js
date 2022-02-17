import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
export default function Projects(props) {
  const gradients = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-green-600 to-green-200",
    "bg-gradient-to-r from-orange-600 to-orange-200",
    "bg-gradient-to-r from-indigo-500 to-orange-600",
  ];
  return (
    <section className={`py-24 text-white ${gradients[props.number]}`}>
      <h1 className="text-center text-4xl font-bold">Some Of My Projects</h1>
      <div className="accordian">
        <Accordion className="px-48 py-24">
          <div className="bg-black">
            <AccordionItem className="my-5">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h1 className="inline-block font-bold">
                    The Classic Snake Game
                  </h1>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-yellow-100 text-slate-900 px-10 py-5">
                <p>
                  This is my take on the classic snake game which was common in
                  the old Nokia phones, It is a GUI based game , which is
                  controlled by the arrow keys. The speed of the snake keeps
                  increasing as the score increases. This was developer using
                  the Python language and also the turtle library.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
          <AccordionItem className="my-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="inline-block font-bold">The Party Poppers</h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-blue-100 text-slate-900 px-10 py-5">
              <p>
                This is a website for a group party organizers (imaginary 😅), I
                made this website using plain HTML,CSS and JavaScript and a
                little bit of Bootstrap. I made this when I was learning about
                web design and basic css, so it may look quite amature, but I am
                still learning.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="inline-block font-bold">Pig Game</h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-red-100 text-slate-900 px-10 py-5">
              <p>
                Players take turns to roll a single dice as many times as they
                wish, adding all roll results to a running total, but losing
                their gained score for the turn if they roll a 1. The player who
                reaches 100 points first wins the game. This was developed using
                vanilla JavaScript and CSS.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="inline-block font-bold">Random Search in C++</h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-green-100 text-slate-900 px-10 py-5">
              <p>
                Searching something that all developers have to do all the time,
                and there are a lot of algorithms to achieve faster results. I
                thought of another algorithm the can potential be significantly
                faster than binary search but may even be slower than linear
                search for it's worst case.
                <br />
                <br />
                We first take an Array of any length, say 'n', then we take the
                data to be searched in the array. Now we generate a random
                number between 0 and 'n-1' and we check if data is there on that
                index or not, if yes we stop otherwise we generate another
                random number and repeat the process again.
                <br />
                <br />
                So even if the number is present at the last index, there is a
                chance that we are able to do it O(1) time complexity. I am not
                sure if it is a good idea, but I still liked the concept of this
                implementation.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="inline-block font-bold">A Dino Game</h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-violet-100 text-slate-900 px-10 py-5">
              <p>
                This is my take on a simple dino game, the one that we get when
                we try access any website without internet. This is set in the
                mario-land and mario is the main character and he can only
                jump(using spacebar) to dodge the boxes.It is under improvement
                and I made this to practice my javascript
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="inline-block font-bold">
                  A Retro Number Guessing Game
                </h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-indigo-100 text-slate-900 px-10 py-5">
              <p>
                This project was a part of a course by Jonas Schmatmann on udemy
                and really learnt a lot about javascript while building this
                game, the UI was not developed by me but the functionality and
                logic of the game was built me.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="inline-block font-bold">Gadget Library</h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-emerald-100 text-slate-900 px-10 py-5">
              <p>
                This was my very first website, it was made for a hackathon.
                Gadget library is portal where people can donate their old
                gadgets and then we refurbish them and make them available for
                rental to the villagers of India so that they are exposed to all
                the latest technology that the world has to offer. I did win the
                third prize in the hackathon 😁.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
