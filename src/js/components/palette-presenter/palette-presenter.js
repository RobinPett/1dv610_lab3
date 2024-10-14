/**
 * Palette presenter component.
 */

import '../save-palette'

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
    </style>

    <html>
        <div id="palette-presenter">
        </div>
    
    </html>
`

customElements.define('palette-presenter',
    class extends HTMLElement {        
        #palettePresenter

        #colorPalette

        #paletteSize = 100

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
         * @param {object} palette
         */

        set colorPalette(palette) {
            if (!Array.isArray(palette)) {
                throw new TypeError('Palette must be an array of objects. Input is currently: ' + palette)
            }

            this.#colorPalette = palette
            this.#handlePalette()
        } 

        #handlePalette() {
            this.#displayPaletteAsDiv()
            this.#addSaveButton()
        }

        #displayPaletteAsDiv() {
            const containerDiv = document.createElement('div')
            containerDiv.style.display = 'flex'
            containerDiv.style.flexDirection = 'row'

            const presentablePalette = this.#createColoredDivs(containerDiv)

            this.#palettePresenter.appendChild(presentablePalette)
        }

        #createColoredDivs(containerDiv) {
            this.#colorPalette.forEach((color) => {
                const div = document.createElement('div')
                div.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
                div.style.height = `${this.#paletteSize}px`
                div.style.width = `${this.#paletteSize}px`

                containerDiv.appendChild(div)
            })

            return containerDiv
        }

        #addSaveButton() {
            const saveButton = document.createElement('save-palette')
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