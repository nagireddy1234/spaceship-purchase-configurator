import React, { FC } from "react";

interface ColorProps {
  color: String;
  price: number;
  colorName: string;
}

const Color: FC<ColorProps> = ({ color, price, colorName }) => {
  return (
    <>
      <p>Select a color</p>
      <div className="color">{color}</div>
      <p className="price">`${price}&euro;`</p>
      <p className="color-name">{colorName}</p>
    </>
  );
};

export default Color;
