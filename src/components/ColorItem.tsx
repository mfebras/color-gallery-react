import React, { useContext, FC } from 'react';
import { ColorContext } from '../contexts/ColorContext';

interface ColorItemProps {
    color: string,
    removeable: boolean
}

const ColorItem: FC<ColorItemProps> = ({ color, removeable }) => {
    const { removeColor } = useContext(ColorContext);

    const confirmDelete = () => {
        if (window.confirm("Are you sure want to delete this color?")) {
            removeColor(color);
        }
    }

    return (
        <div>
            <div className="color-box" style={{background: color}}></div>
            <div className="color-footer justify-between">
                <span>{color}</span>
                {removeable &&
                    <button onClick={confirmDelete}>x</button>
                }
            </div>
        </div>
    );
}

export default ColorItem;
