import { useState } from "react";
import ColorSelector from "../components/colorSelector";
import OptionPackage from "../components/optionPackage";
import ToolCard from "../components/toolCard";
import { basicPackage, luxPackage, sportPackage } from "../data/packeges";
import { colorPrice, optionPrice, powerPrice, warpPrice } from "../data/price";
import "./style.scss";

const colors = {
  white: "#fff",
  orange: "#FF7A00",
  skyeblue: "#6BE4FF",
};

const Home = () => {
  const [state, setState] = useState({
    colorSelected: -1,
    powerSelected: -1,
    warpSelected: -1,
    optionalSelected: -1,
  });

  const [prices, setPrices] = useState({
    basePrice: 1000,
    colorPrice: 0,
    powerPrice: 0,
    warpPrice: 0,
    optionPrice: 0,
  });

  const handleSelect = (type: number, keyName: string) => {
    const newState: any = { ...state };
    newState[keyName] = type;
    setState(newState);
    const newPrices = { ...prices };
    if (keyName === "colorSelected") {
      newPrices.colorPrice = colorPrice[type - 1];
    }
    if (keyName === "powerSelected") {
      newPrices.powerPrice = powerPrice[type - 1];
    }
    if (keyName === "warpSelected") {
      newPrices.warpPrice = warpPrice[type - 1];
    }
    if (keyName === "optionalSelected") {
      newPrices.optionPrice = optionPrice[type - 1];
    }
    setPrices(newPrices);
  };

  return (
    <div className="wrapper">
      <div className="card-wrapper">
        <h4 className="heading">Spaceship configurator</h4>
        <div className="row">
          <div className="w-80">
            <p className="tool-name">Select color:</p>
            <div className="col-80">
              <ColorSelector
                onClick={() => handleSelect(1, "colorSelected")}
                selected={state.colorSelected === 1}
                color={colors.white}
                colorName="White"
                price={0}
              />
              <ColorSelector
                selected={state.colorSelected === 2}
                onClick={() => handleSelect(2, "colorSelected")}
                color={colors.orange}
                colorName="Volcano"
                price={100}
              />
              <ColorSelector
                selected={state.colorSelected === 3}
                onClick={() => handleSelect(3, "colorSelected")}
                color={colors.skyeblue}
                colorName="Sky"
                price={100}
              />
            </div>
            <div className="spacing" />
            <p className="tool-name">Select power:</p>
            <div className="col-80">
              <ToolCard
                title="100 MW"
                price={0}
                selected={state.powerSelected === 1}
                onClick={() => handleSelect(1, "powerSelected")}
              />
              <ToolCard
                title="150 MW"
                price={200}
                selected={state.powerSelected === 2}
                onClick={() => handleSelect(2, "powerSelected")}
              />
              <ToolCard
                title="200 MW"
                price={500}
                selected={state.powerSelected === 3}
                onClick={() => handleSelect(3, "powerSelected")}
              />
            </div>
            <div className="spacing" />
            <p className="tool-name">Warp drive:</p>
            <div className="col-80 justify-start">
              <ToolCard
                title="NO"
                price={0}
                selected={state.warpSelected === 1}
                onClick={() => handleSelect(1, "warpSelected")}
              />
              <ToolCard
                title="YES"
                price={1000}
                selected={state.warpSelected === 2}
                onClick={() => handleSelect(2, "warpSelected")}
              />
              <div className="col-4" style={{ visibility: "hidden" }} />
            </div>
            <div className="spacing" />
            <p className="tool-name">Select option package:</p>
            <div className="col-80 justify-start">
              <OptionPackage
                planName="Basic"
                hidePrice
                data={basicPackage}
                selected={state.optionalSelected === 1}
                onClick={() => handleSelect(1, "optionalSelected")}
                price={0}
              />
              <OptionPackage
                planName="Sport"
                price={100}
                data={sportPackage}
                selected={state.optionalSelected === 2}
                onClick={() => handleSelect(2, "optionalSelected")}
              />
              <OptionPackage
                planName="Lux"
                price={500}
                data={luxPackage}
                selected={state.optionalSelected === 3}
                onClick={() => handleSelect(3, "optionalSelected")}
              />
            </div>
          </div>
          <div className="w-20">
            <div className="info-card">
              <div className="flex">
                <p className="info-title">Base price:</p>
                <p className="title-price">+{prices.basePrice}€</p>
              </div>
              <div className="flex">
                <p className="info-title">Color:</p>
                <p className="title-price">+{prices.colorPrice}€</p>
              </div>
              <div className="flex">
                <p className="info-title">Power:</p>
                <p className="title-price">+{prices.powerPrice}€</p>
              </div>
              <div className="flex">
                <p className="info-title">Warp drive:</p>
                <p className="title-price">+{prices.warpPrice}€</p>
              </div>
              <div className="flex">
                <p className="info-title">Option package:</p>
                <p className="title-price">+{prices.optionPrice}€</p>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <p className="info-total">Total:</p>
                <p className="total-price">
                  {prices.basePrice +
                    prices.colorPrice +
                    prices.optionPrice +
                    prices.powerPrice +
                    prices.warpPrice}
                  €
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
