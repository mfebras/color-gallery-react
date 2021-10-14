/*
 * Covert hex color to rgb
 */
export const hexToRgb = (hex: string) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
        ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        }
        : null;
}

/*
 * Compare color object by rgb
 */
export const compareColor = (a: Color, b: Color) => {
    if ( a.red < b.red ){
        return 1;
    } else if ( a.red > b.red ){
        return -1;
    } else if ( a.green < b.green ){
        return 1;
    } else if ( a.green > b.green ){
        return -1;
    } else if ( a.blue < b.blue ){
        return 1;
    } else if ( a.blue > b.blue ){
        return -1;
    }
    return 0;
}