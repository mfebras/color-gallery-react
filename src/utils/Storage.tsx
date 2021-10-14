/*
 * Save data to local storage 
 */
export const setData = (key: string, value: any) => {
	if (value) {
		value = JSON.stringify(value);
	}

	localStorage.setItem(key, value);
}

/*
 * Get data from local storage 
 */
export const getData = (key: string) => {
	let value = localStorage.getItem(key);

	if (value) {
		value = JSON.parse(value);
	}

	return value;
}

/*
 * Remove data from local storage 
 */
export const clearData = (key: string) => {
	localStorage.removeItem(key);
}