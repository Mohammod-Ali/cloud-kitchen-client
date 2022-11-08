import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="text-center mt-28 mb-10">
        <h2 className="font-bold text-4xl">
          Frequently Asked Question about my kitchen
        </h2>
      </div>
      <div className="grid gap-10">
        <div className="collapse w-1/2 mx-auto">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-secondary peer-checked:bg-secondary peer-checked:text-secondary-content font-bold">
          What qualifications do you need to work at The Kitchen?

          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Some cooking skills like Biryani, Pizza, Burger, Chicken Fry etc.</p>
          </div>
        </div>
        <div className="collapse w-1/2 mx-auto">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-secondary peer-checked:bg-secondary peer-checked:text-secondary-content font-bold">
          What is your favorite dish to make?

          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>I love so much many food like Biryani, Pizza, Burger, Chicken Fry etc.</p>
          </div>
        </div>
        <div className="collapse w-1/2 mx-auto">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-secondary peer-checked:bg-secondary peer-checked:text-secondary-content font-bold">
          Have you tried cooking food from another culture? What did you prepare? How was it?

          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Yes, I love cooking many food. Sometimes we make food for celebration. And it is awesome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
