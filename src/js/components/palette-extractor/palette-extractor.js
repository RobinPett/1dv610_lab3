/**
 * Palette extractor component.
 */

import { ColorPaletteExtractor } from "color-palette-extractor"
import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"

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
    class extends HTMLElement {        
        #paletteExtractor

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
            this.#paletteExtractor = this.shadowRoot.querySelector('#palette-extractor')
            this.#paletteExtractorModule = new ColorPaletteExtractor()
        }

        /**
         * Setter for imageElement
         * 
         * @param {HTMLImageElement} imageElement
         */

        set imageElement(imageElement) {
            if ((!imageElement instanceof HTMLImageElement)) {
                throw new TypeError('imageElement must be of type HTMLImageElement.')
            }

            this.#imageElement = imageElement

            this.#handlePalette()
        } 

        async #handlePalette() {
            this.#extractedColors = await this.#extractColors()
            this.#sendPaletteEvent()
        }

        async #extractColors() {
            const imageUrl = this.#imageElement.src // As base64 - Test!!!!!

            const image = this.#paletteExtractorModule.loadImage(imageUrl)
            const pixels = await image.getPixels()

            this.#palette = this.#paletteExtractorModule.startExtraction(pixels, 5)
            const extractedPalette = this.#palette.getColorPalette()

            return extractedPalette
        }

        #sendPaletteEvent() {
            const paletteEvent = new window.CustomEvent(EVENTS.CREATED_PALETTE, { detail: this.#extractedColors, bubbles: true })
            this.dispatchEvent(paletteEvent)
        }

        getNewPalette(palette) {
            if (palette === 'default') {
                return this.#palette.getColorPalette()
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
        }

        




        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {

        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

    }
)