interface Color {
	name: string,
	red: number,
	green: number,
	blue: number,
	removeable: boolean
}

interface rgb {
	red: number,
	green: number,
	blue: number
}

type ContextType = {
	colors: Color[],
	saveColor: (hex: string) => void,
	removeColor: (hex: string) => void
}
