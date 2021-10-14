import React, { FC } from 'react';

interface ColorItemProps {
    color: string,
    removeable: boolean
}

const ColorItem: FC<ColorItemProps> = ({ color, removeable }) => {
    return (
        <div>
            <div className="color-box" style={{background: color}}></div>
            <div className="color-footer justify-between">
                <span>{color}</span>
                {removeable &&
                    <button>x</button>
                }
            </div>
        </div>
    );
}

export default ColorItem;
