
/**
 * Custom type for a Color Palette
 */
class ColorPalette {
    /**
     * Represent a palette - Array of objects with
     * red, green, blue and alpha values. 
     */
    palette 

    constructor(palette) {
        this.#validatePalette(palette)
        this.palette = palette

        console.log('New palette created: ')
        console.log(this.palette)
    }

    /**
     * Check if palette is an array of rgb values.
     * @param {Array} palette 
     */
    #validatePalette(palette) {
        if (!Array.isArray(palette)) {
            throw new TypeError('Palette must be an array of objects')
        }

        this.#checkColorsInPalette(palette)
    }

    /**
     * Check that every color is objects with rgba data.
     *
     * @param {Array} palette 
     */
    #checkColorsInPalette(palette) {
        palette.forEach(color => {
            const rgbValues = [color.red, color.green, color.blue]

            if (typeof color !== 'object') throw new TypeError("Color must be an object");
            if(!Object.hasOwn(color, 'red') || !Object.hasOwn(color, 'green') || !Object.hasOwn(color, 'blue')) {
                throw new Error('Palette must contain red, green and blue values')
            }
            
            // Make sure rgbValues are numbers between 0 and 255
            const isValidRgbValues = rgbValues.every(value => {
                return (typeof value === 'number') && value >= 0 && value <= 255 
            })

            if(!isValidRgbValues) throw new RangeError('RGB values must be between 0 and 255')

        })
    }

    /**
     * Convert red green and blue to hexadecimal.
     * Example rgb: 255, 0, 0 = hex: #ff0000
     */
    convertRgbToHex() {
        const hexValues = []
        this.palette.forEach(color => {
            console.log(color)
            const { red, green, blue } = color

            const redHex = red.toString(16).padStart(2, '0')
            const greenHex = green.toString(16).padStart(2, '0')
            const blueHex = blue.toString(16).padStart(2, '0')

            hexValues.push('#' + redHex + greenHex + blueHex)
        })

        return hexValues
    }
}

export default ColorPalette