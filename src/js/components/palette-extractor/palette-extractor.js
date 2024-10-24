/**
 * Palette extractor component.
 */

import { ColorPaletteExtractor } from "color-palette-extractor"
import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"
import BaseComponent from "../BaseComponent"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
    </style>

    <html>
        <div id="palette-extractor">
        </div>
    
    </html>
`

customElements.define(COMPONENTS.PALETTE_EXTRACTOR,
    class extends BaseComponent {        
        #paletteExtractorModule 

        #imageElement

        #extractedColors

        #palette

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#paletteExtractorModule = new ColorPaletteExtractor()
        }

        /**
         * Setter for imageElement
         * 
         * @param {HTMLImageElement} imageElement
         */

        set imageElement(imageElement) {
            try {
                this.#checkImageElement(imageElement)
                this.#imageElement = imageElement
                this.#handlePalette() 
            } catch (error) {
                this.dispatchError('Failed to load imageElement in extractor' + error.message)
            }
        } 

        #checkImageElement(imageElement) {
            if (!(imageElement instanceof HTMLImageElement)) {
                throw new TypeError('imageElement must be of type HTMLImageElement.')
            }
        }

        async #handlePalette() {
            try {
                this.#extractedColors = await this.#extractColors()
                this.#sendPaletteEvent()
            } catch (error) {
                this.dispatchError('Failed to extract colors: ' + error.message)
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

        #sendPaletteEvent() {
            const paletteEvent = new window.CustomEvent(EVENTS.CREATED_PALETTE, { detail: this.#extractedColors, bubbles: true })
            this.dispatchEvent(paletteEvent)
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
                this.dispatchError('Failed to extract colors: ' + error.message)
            }
        }
    }
)