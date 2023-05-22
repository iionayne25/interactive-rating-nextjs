import React from "react";
import Image from "next/image";
const ThankyouCard = ({ value }) => {
  return (
    <div>
      <div className="thankyouContainer">
        <Image
          src="/illustration-thank-you.svg"
          width={140}
          height={94}
          alt="thank you state image "
        />
        <div className="bg-mediumGrey/20 text-orange w-fit rounded-2xl px-3 py-1 flex items-center">
          <p>You selected {value} out of 5</p>
        </div>
        <div className="thankyouText">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. if you need more
            support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankyouCard;
