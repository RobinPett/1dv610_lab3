/**
 * Palette presenter component.
 * Creates and displays colored divs and hex values for each color in palette.
 */

import ColorPalette from '../../model/ColorPalette'
import '../save-palette'
import '../hexvalue-presenter'
import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #palette-presenter {
            display: flex;
            flex-direction: row;
            margin: auto;
            justify-content: center;
            align-items: center;
            width: min-content;
        }

        .palette-colors {
            height: 100px;
            width: 100px;
            border-radius: 0.5em;
            margin: 0.2em;
        }

        #color-container {
            display: flex;
            flex-direction: column;
        }

    </style>

    <html>
        <div id="palette-presenter">
        </div>
    
    </html>
`

customElements.define(COMPONENTS.PALETTE_PRESENTER,
    class extends HTMLElement {        
        #palettePresenter

        /**
         * @type {ColorPalette}
         */
        #colorPalette

        #hexValues

        #saveButton

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#palettePresenter = this.shadowRoot.querySelector('#palette-presenter')
        }

        /**
         * Setter for color palette.
         * 
         * @param {ColorPalette} ColorPalette
         */

        set colorPalette(ColorPalette) {
            this.#colorPalette = ColorPalette
            this.#handlePalette()
        } 

        #handlePalette() {
            this.#getHexValues()
            this.#displayPaletteAsDiv()
            this.#addSaveButton()
        }

        #getHexValues() {
            this.#hexValues = this.#colorPalette.convertRgbToHex()
        }

        #displayPaletteAsDiv() {
            const paletteContainer = document.createElement('div')
            paletteContainer.style.display = 'flex'
            paletteContainer.style.flexDirection = 'row'

            const presentablePalette = this.#createColoredDivs(paletteContainer)

            this.#palettePresenter.appendChild(presentablePalette)
        }

        #createColoredDivs(paletteContainer) {
            this.#colorPalette.palette.forEach((color, index) => {
                const colorContainer = document.createElement('div')
                colorContainer.className = 'color-container'

                const paletteColor = this.#createPaletteColor(color)
                colorContainer.appendChild(paletteColor)
                
                const hexPresenter = this.#createHexPresenter(index)
                colorContainer.appendChild(hexPresenter)
                
                paletteContainer.appendChild(colorContainer)
            })

            return paletteContainer
        }

        #createPaletteColor(color) {
            const paletteColor = document.createElement('div')
            paletteColor.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
            paletteColor.className = 'palette-colors'

            return paletteColor
        }

        #createHexPresenter(index) {
            const hexValue = this.#hexValues[index]
            const hexPresenter = document.createElement(COMPONENTS.HEXVALUE_PRESENTER)
            hexPresenter.setAttribute('value', hexValue)
            hexPresenter.hexValue = hexValue
            return hexPresenter
        }

        #addSaveButton() {
            const saveButton = document.createElement(COMPONENTS.SAVE_PALETTE)
            saveButton.style.margin = '1em'
            this.#saveButton = saveButton
            this.#palettePresenter.appendChild(saveButton)
        }

        #sendSavePaletteEvent() {
            const savePaletteEvent = new window.CustomEvent(EVENTS.SAVE_PALETTE, { detail: this.#palettePresenter, bubbles: true })
            this.dispatchEvent(savePaletteEvent)
        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#saveButton.addEventListener('click', (event) => { this.#sendSavePaletteEvent(event)})
            this.#palettePresenter.addEventListener(EVENTS.HEX_COPIED, () => this.dispatchEvent(new window.CustomEvent(EVENTS.HEX_COPIED, { bubbles: true }))) 
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

    }
)