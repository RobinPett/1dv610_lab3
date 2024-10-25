/**
 * Palette extractor component.
 */

import { ColorPaletteExtractor } from "color-palette-extractor"

class PaletteExtractor {        
    #paletteExtractorModule 

    #imageElement

    #extractedColors

    #palette

    #palettePromise

    constructor() {
        this.#paletteExtractorModule = new ColorPaletteExtractor()
    }

    /**
     * Setter for imageElement
     * 
     * @param {HTMLImageElement} imageElement
     */

    setImageElement(imageElement) {
        try {
            this.#checkImageElement(imageElement)
            this.#imageElement = imageElement
            this.#palettePromise = this.#startExtraction() 
        } catch (error) {
            throw new Error('Failed to load imageElement in extractor' + error.message)
        }
    } 

    #checkImageElement(imageElement) {
        if (!(imageElement instanceof HTMLImageElement)) {
            throw new TypeError('imageElement must be of type HTMLImageElement.')
        }
    }

    async #startExtraction() {
        try {
            this.#extractedColors = await this.#extractColors()
        } catch (error) {
            throw new Error('Failed to extract colors: ' + error.message)
        }
    }

    async #extractColors() {
        const imageUrl = this.#imageElement.src // base64

        const image = this.#paletteExtractorModule.loadImage(imageUrl)
        const pixels = await image.getPixels()

        this.#palette = this.#paletteExtractorModule.startExtraction(pixels, 5)
        const extractedPalette = this.#palette.getPalette()

        return extractedPalette
    }

    async getPalette() {
        await this.#palettePromise
        return await this.#extractedColors
    }

    getNewPalette(palette) {
        try {
            if (palette === 'default') {
                return this.#palette.getPalette()
            }

            if (palette === 'bright') {
                return this.#palette.getBrightPalette()
            }

            if (palette === 'dark') {
                return this.#palette.getDarkPalette()
            }
    
            if (palette === 'muted') {
                return this.#palette.getMutedPalette()
            }   
        } catch (error) {
            throw new Error('Failed to extract colors: ' + error.message)
        }
    }
}

export default PaletteExtractor