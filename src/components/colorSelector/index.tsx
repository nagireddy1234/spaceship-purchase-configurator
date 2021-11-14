import "./style.scss";

interface Props {
  color?: string;
  price: number;
  colorName: string;
  selected: boolean;
  onClick: () => void;
}

const ColorSelector = ({
  color,
  price,
  colorName,
  selected,
  onClick,
}: Props): JSX.Element => {
  return (
    <div className={`col-4 ${selected ? "selected" : ""}`} onClick={onClick}>
      <div style={{ backgroundColor: color }} className="color" />
      <p className="price"> +{price}€</p>
      <p className="colorname">{colorName}</p>
    </div>
  );
};

export default ColorSelector;
