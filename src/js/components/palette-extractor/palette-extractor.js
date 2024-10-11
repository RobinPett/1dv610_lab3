/**
 * Palette extractor component.
 */

import { ColorPaletteExtractor } from "color-palette-extractor"

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

customElements.define('palette-extractor',
    class extends HTMLElement {        
        #paletteExtractor

        #imageElement

        #extractedColors

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#paletteExtractor = this.shadowRoot.querySelector('#palette-extractor')
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
            const imageUrl = this.#imageElement.src // As base64 - Test

            const paletteExtractor = new ColorPaletteExtractor()
            const image = paletteExtractor.loadImage(imageUrl)
            const pixels = await image.getPixels()

            const palette = paletteExtractor.startExtraction(pixels, 5)
            const extractedPalette = palette.getColorPalette()

            return extractedPalette
        }

        #sendPaletteEvent() {
            console.log('Send palette event')
            const paletteEvent = new window.CustomEvent('created-palette', { detail: this.#extractedColors, bubbles: true })
            this.dispatchEvent(paletteEvent)
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