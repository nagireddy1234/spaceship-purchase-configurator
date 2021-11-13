import React, { FC } from "react";

interface WarpDriveProps {
  IsWarpdrive: string;
  price: number;
}

const WarpDrive: FC<WarpDriveProps> = ({ IsWarpdrive, price }) => {
  return (
    <>
      <p>Warp Drive:</p>
      <p>{IsWarpdrive}</p>
      <p>{price}</p>
    </>
  );
};

export default WarpDrive;
