/**
 * Palette presenter component.
 */

import { ColorPaletteExtractor } from "color-palette-extractor"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #palette-presenter {
            display: flex;
            flex-direction: column;
        }
    </style>

    <html>
        <div id="palette-presenter">
        </div>
    
    </html>
`

customElements.define('palette-presenter',
    class extends HTMLElement {        
        #palettePresenter

        #paletteExtractor

        #colorPalette

        

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#palettePresenter = this.shadowRoot.querySelector('#palette-presenter')
            this.#paletteExtractor = new ColorPaletteExtractor()
        }

        /**
         * Setter for color palette.
         * 
         * @param {object} palette
         */

        set colorPalette(palette) {
            if (!Array.isArray(palette)) {
                throw new TypeError('Palette must be an array of objects. Inout is currently: ' + palette)
            }

            this.#colorPalette = palette
            this.#handlePalette()
        } 

        #handlePalette() {
            this.#displayPaletteAsDiv()
        }

        #displayPaletteAsDiv() {
            const paletteDiv = this.#paletteExtractor.presentColorPalette(this.#colorPalette)
            paletteDiv.style.margin = 'auto'

            this.#palettePresenter.appendChild(paletteDiv)
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