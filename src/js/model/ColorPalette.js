
/**
 * Custom type for a Color Palette
 */
class ColorPalette {
    #palette 
    constructor(palette) {
        console.log('Palette recieved')
        console.log(palette)
        this.#validatePalette(palette)
        this.#palette = palette
        console.log('New palette created ' + this.#palette)
    }

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
            console.log(color)
            const rgbValues = [color.red, color.green, color.blue]

            if (typeof color !== 'object') throw new TypeError("Color must be an object");
            if(!Object.hasOwn(color, 'red') || !Object.hasOwn(color, 'green') || !Object.hasOwn(color, 'blue')) {
                throw new Error('Palette must contain red, green and blue values')
            }
            
            // Make sure rgbValues are numbers between 0 and 255
            const isValidRgbValues = rgbValues.every(value => {
                console.log(value)
                console.log(typeof value)
                return (typeof value === 'number') && value >= 0 && value <= 255 
            })

            console.log(isValidRgbValues)

            if(!isValidRgbValues) throw new RangeError('RGB values must be between 0 and 255')

        })
    }
}

export default ColorPalette