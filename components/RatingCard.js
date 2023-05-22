import React, { useState } from "react";
import Image from "next/image";
const RatingCard = ({ onValueChange, isSubmitted }) => {
  const [isSelect, setIsSelect] = useState(0);

  const handleClick = (value) => {
    setIsSelect(value);
  };

  const handleSubmit = () => {
    onValueChange(isSelect);
    isSubmitted(true);
  };
  return (
    <div>
      <div className="container">
        <div className="bg-mediumGrey/10 rounded-full w-9 h-9 flex justify-center items-center ">
          <Image src="/icon-star.svg" width={16} height={16} alt="star icon" />
        </div>
        <div className="rateTextContainer">
          <h1 className="">How did we do?</h1>
          <p className="">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => handleClick(1)}
            className={`rateButton ${isSelect === 1 ? "selected" : ""}`}
          >
            1
          </div>
          <div
            onClick={() => handleClick(2)}
            className={`rateButton ${isSelect === 2 ? "selected" : ""}`}
          >
            2
          </div>
          <div
            onClick={() => handleClick(3)}
            className={`rateButton ${isSelect === 3 ? "selected" : ""}`}
          >
            3
          </div>
          <div
            onClick={() => handleClick(4)}
            className={`rateButton ${isSelect === 4 ? "selected" : ""}`}
          >
            4
          </div>
          <div
            onClick={() => handleClick(5)}
            className={`rateButton ${isSelect === 5 ? "selected" : ""}`}
          >
            5
          </div>
        </div>
        <div>
          <button onClick={handleSubmit} className="btnSubmit">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
