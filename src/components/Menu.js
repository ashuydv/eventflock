import React from "react";

function Menu({ menuItem }) {
  const hr = new Date().getHours();
  const min = new Date().getMinutes();

  return (
    <div>
      <div className="container">
        <div className="flex flex-wrap -m-4 mt-6">
          {menuItem.map((item, index) => index<12 && (
              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                <div className='border-2 border-purple-100 p-4 rounded-md shadow-md'>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
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
                      {item.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Heading
                    </h2>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, quisquam.
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
