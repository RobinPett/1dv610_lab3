/**
 * Palette presenter component.
 * Creates and displays colored divs and hex values for each color in palette.
 */

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #hexvalue-presenter {
        }
    </style>

    <html>
        <div id="hexvalue-presenter">
            <p id="hex-text"></p>
        </div>
    
    </html>
`

customElements.define('hexvalue-presenter',
    class extends HTMLElement {        
        #hexValuePresenter

        #hexText

        /**
         * @type {Array}
         */
        #hexValue

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#hexValuePresenter = this.shadowRoot.querySelector('#hexvalue-presenter')
            this.#hexText = this.shadowRoot.querySelector('#hex-text')

        }

        /**
         * @param {String} value
         */
        set hexValue(value) {
            this.#hexValue = value
            this.#handleHexValues()
        } 

        #handleHexValues() {
            this.#displayHexValues()
        }

        #displayHexValues() {
            this.#hexText.textContent = `#${this.#hexValue}`
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