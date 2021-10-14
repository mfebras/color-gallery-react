import React, { useState, createContext, FC } from 'react';
import { hexToRgb, compareColor } from '../utils/Helper';
import { getData, setData } from '../utils/Storage';

const contextDefaultValues: ContextType = {
	colors: [],
	saveColor: () => {},
	removeColor: () => {}
}

export const ColorContext = createContext<ContextType>(contextDefaultValues);

interface Props {
	children: React.ReactNode
}

const ColorProvider: FC<Props> = ({ children }): any => {
	const predefinedData: string[] = [
		'#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E',
		'#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50',
		'#F1C40F', '#E67E22', '#E74C3C', '#ECF0F1', '#95A5A6',
		'#F39C12', '#D35400', '#C0392B', '#BDC3C7', '#7F8C8D'
	];

	let data: (Color[]|any) = getData('data') || [];
	if (data.length < 1) {
		// initialize data
		predefinedData.forEach((hex: string) => {
			let temp: rgb|null = hexToRgb(hex);
			if (temp) {
				data.push({
					name: hex,
					removeable: false,
					...temp
				});
			}
		});

		// sort colors by rgb
		data = data.sort(compareColor);
		setData('data', data);
	}

	const [colors, setColors] = useState<Color[]>(data);

	const saveColor = (hex: string) => {
		let temp: rgb|null = hexToRgb(hex);
		if (temp) {
			const newColor: Color = {
				name: hex,
				removeable: true,
				...temp
			}
			let _colors: Color[] = [...colors, newColor];
			_colors = _colors.sort(compareColor)
			setColors(_colors);
			setData('data', _colors);
		}
	}

	const removeColor = (hex: string) => {
		let data = colors.filter((color: Color) => {
			return color.name !== hex;
		})
		setColors(data);
		setData('data', data);
	}

	return (
		<ColorContext.Provider value={{ colors, saveColor, removeColor }} >
			{children}
	    </ColorContext.Provider>
	);
}

export default ColorProvider;
