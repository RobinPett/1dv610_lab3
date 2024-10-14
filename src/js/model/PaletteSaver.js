
/**
 * Handles saving/deleting color palettes to localStorage in browser.
 */
class PaletteStorer {
    #colorPalette

    constructor(colorPalette) {
        // If colorPalette is not of type ColorPalette - Throw TypeError

        this.#colorPalette = colorPalette
    }

    savePalette() {
        localStorage.setItem('ColorCompanion', JSON.stringify(this.#colorPalette))
    }

    removePalette() {
        localStorage.removeItem()
    }
}