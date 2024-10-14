/**
 * Palette presenter component.
 * Creates and displays colored divs and hex values for each color in palette.
 */

import ColorPalette from '../../model/ColorPalette'
import '../save-palette'
import '../hexvalue-presenter'

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
        }

        .palette-colors {
            height: 100px;
            width: 100px;
            border-radius: 0.5em;
            margin: 0.2em;
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

        /**
         * ColorPalette type.
         * 
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
            const containerDiv = document.createElement('div')
            containerDiv.style.display = 'flex'
            containerDiv.style.flexDirection = 'row'

            const presentablePalette = this.#createColoredDivs(containerDiv)

            this.#palettePresenter.appendChild(presentablePalette)
        }

        #createColoredDivs(containerDiv) {
            this.#colorPalette.palette.forEach((color, index) => {
                const div = document.createElement('div')
                div.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
                div.className = 'palette-colors'
                
                const hexPresenter = this.#createHexPresenter(index)
                div.appendChild(hexPresenter)
                

                containerDiv.appendChild(div)
            })

            return containerDiv
        }

        #createHexPresenter(index) {
            const hexPresenter = document.createElement('hexvalue-presenter')
            hexPresenter.hexValue = this.#hexValues[index]
            return hexPresenter
        }

        #addSaveButton() {
            const saveButton = document.createElement('save-palette')
            saveButton.style.margin = '1em'
            this.#saveButton = saveButton
            this.#palettePresenter.appendChild(saveButton)
        }

        #sendSavePaletteEvent() {
            const savePaletteEvent = new window.CustomEvent('save-palette', { detail: this.#colorPalette, bubbles: true })
            this.dispatchEvent(savePaletteEvent)
        }



        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#saveButton.addEventListener('click', (event) => { this.#sendSavePaletteEvent() }) 
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

    }
)