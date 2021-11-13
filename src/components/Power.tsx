import React, { FC } from "react";

interface PowerProps {
  power: number;
  price: number;
}

const Power: FC<PowerProps> = ({ power, price }) => {
  return (
    <>
      <p>Select Power:</p>
      <p className="power">`${power} MW`</p>
      <p className="price">`${price}&euro;`</p>
    </>
  );
};

export default Power;
