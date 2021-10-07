import React from "react";

function Menu({ menuItem }) {
  const hr = new Date().getHours();
  const min = new Date().getMinutes();

  return (
    <div>
      <div className="container">
        <div className="menus">
          <div className="flex flex-wrap mt-6">
            {menuItem.map(
              (item, index) =>
                index < 12 && (
                  <div className="lg:w-1/4 md:w-1/2 sm:w-auto p-2 w-full">
                    <div className="border-2 border-purple-100 p-4 rounded-md shadow-md">
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
                        <span class="inline-block py-1 px-3 rounded-2xl shadow-sm bg-purple-50 text-purple-500 text-xs font-medium tracking-widest mb-2">
                          {item.category}
                        </span>
                        <h2 className="text-gray-900 title-font text-2xl font-medium">
                          Heading
                        </h2>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
