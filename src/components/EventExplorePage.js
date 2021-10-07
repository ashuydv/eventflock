import { useState } from "react";
import items from "./allData";
import Button from "./Button";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function EventExplorePage({ menus }) {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);
  const [visible, setVisible] = useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  const hr = new Date().getHours();
  const min = new Date().getMinutes();

  return (
    <div className="Courses">
      <div className="container-course">
        <Button button={buttons} filter={filter} />
        <div className="container">
          <div className="flex flex-wrap -m-4 mt-6">
            {menus.slice(0, visible).map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                <div className="border-2 border-purple-100 p-4 rounded-md shadow-md">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.image}
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
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Heading
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        class="flex mx-auto my-10 bg-cyan border-0 py-2 px-8 focus:outline-none rounded text-lg"
        onClick={showMoreItems}
      >
        Show More
      </button>
    </div>
  );
}

export default EventExplorePage;
