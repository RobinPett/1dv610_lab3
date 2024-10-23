/**
 * Palette presenter component.
 * Displays hex values and send a custom event when pressed to copy it.
 */

import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #hexvalue-presenter {
            border-radius: 1em;
            background-color: #faf9f6;
            width: min-content;
            margin: auto;
        }

        #hexvalue-presenter:hover {
            cursor: pointer;
        }

        #hex-text {
            border-radius: 0.5em;
            background-color: white;
            border: solid 1px rgba(0, 0, 0, 0.1);
            transition: 0.1s;
            margin: 0 0.1em 0 0.1em;
            user-select: none;
            padding: 0.5em 1em 0.5em 1em;
        }

        #hex-text:hover {
            background-color: black;
            color: white;
            cursor: pointer;
        }

        #hex-text:active {
            background-color: red;
        }
    </style>

    <html>
        <div id="hexvalue-presenter">
            <button id="hex-text" title="Copy"></button>
        </div>
    
    </html>
`

customElements.define(COMPONENTS.HEXVALUE_PRESENTER,
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
            this.#hexText.textContent = this.#hexValue
            this.#hexText.value = this.#hexValue
        }

        #copyHexValue() {
            navigator.clipboard.writeText(this.#hexValue)
            this.#sendHexCopiedEvent()
        }

        #sendHexCopiedEvent() {
            const hexCopiedEvent = new window.CustomEvent(EVENTS.HEX_COPIED, { bubbles: true })
            this.dispatchEvent(hexCopiedEvent)
        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#hexText.addEventListener('click', () => this.#copyHexValue())
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

    }
)