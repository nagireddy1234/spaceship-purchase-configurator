import "./style.scss";

interface Props {
  price: number;
  planName: string;
  data: string[];
  hidePrice?: boolean;
  selected: boolean;
  onClick: () => void;
}

const OptionPackage = ({
  hidePrice = false,
  price,
  planName,
  data,
  selected,
  onClick,
}: Props): JSX.Element => {
  return (
    <div
      className={`col-4 justify-content-start ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <p className="planName">{planName}</p>
      {!hidePrice ? (
        <p className="planPrice">+{price}€</p>
      ) : (
        <div className="align-spacing" />
      )}
      <ul className="unorderlist">
        {data.map((name: string) => (
          <li key={name}>
            <div className={`arrowup ${selected ? "selectedArrow" : ""}`} />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionPackage;
