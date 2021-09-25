import React from "react";
import eventData from "./eventData";
import { Link } from "react-router-dom";

const Events = () => {
  const events = eventData.map(event => {
    return (
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2" key={event.id}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={event.image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {event.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </h2>
          <p className="mt-1">Price: ${event.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
              {events}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
