
import React, { useState } from "react";
import RatingCard from "./RatingCard";
import ThankyouCard from "./ThankyouCard";

const ParentComponent = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
  const handleSubmittedChange = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      {!isSubmitted ? (
        <RatingCard
          onValueChange={handleValueChange}
          isSubmitted={handleSubmittedChange}
        ></RatingCard>
      ) : (
        <ThankyouCard value={selectedValue}></ThankyouCard>
      )}
    </div>
  );
};

export default ParentComponent;
