import React from 'react';
import './style.scss';

interface Props {
    price: number;
    title: string;
    selected: boolean;
    onClick: () => void;
}

const ToolCard = ({ price, title, onClick, selected }: Props): JSX.Element => {
    return (
        <div className={`col-4 ${selected ? 'selected' : ''}`} onClick={onClick}>
            <p className="title">{title}</p>
            <p className="titlePrice">+{price}€</p>
        </div>
    );
};

export default ToolCard;
