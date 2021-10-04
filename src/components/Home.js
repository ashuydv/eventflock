import React, { useState } from "react";
import Menu from "./Menu";
import items from "./eventData";
import Courses from "./Courses";
import { Link } from "react-router-dom";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const Home = () => {
  const hr = new Date().getHours();
  const min = new Date().getMinutes();

  const [menuItem, setMenuItem] = useState(items);
  return (
    <div>
      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
                <br className="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="flex align-middle justify-between mt-4">
                  <div>
                    <h6 className="font-bold">EVENT DATE</h6>
                    <p>Sep 30</p>
                  </div>
                  <div className="text-right">
                    <h6 className="font-bold">START TIME</h6>
                    <p>
                      {hr}:{min} IST
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, quisquam.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="flex align-middle justify-between mt-4">
                  <div>
                    <h6 className="font-bold">EVENT DATE</h6>
                    <p>Sep 30</p>
                  </div>
                  <div className="text-right">
                    <h6 className="font-bold">START TIME</h6>
                    <p>
                      {hr}:{min} IST
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, quisquam.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="flex align-middle justify-between mt-4">
                  <div>
                    <h6 className="font-bold">EVENT DATE</h6>
                    <p>Sep 30</p>
                  </div>
                  <div className="text-right">
                    <h6 className="font-bold">START TIME</h6>
                    <p>
                      {hr}:{min} IST
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, quisquam.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="flex align-middle justify-between mt-4">
                  <div>
                    <h6 className="font-bold">EVENT DATE</h6>
                    <p>Sep 30</p>
                  </div>
                  <div className="text-right">
                    <h6 className="font-bold">START TIME</h6>
                    <p>
                      {hr}:{min} IST
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, quisquam.
                  </p>
                </div>
              </div>
              <Link to="/explore" className="flex mx-auto">
                <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Courses />
      </main>
    </div>
  );
};

export default Home;
