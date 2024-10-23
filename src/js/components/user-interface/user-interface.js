/**
 * User interface component.
 */

import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        button {
            border-radius: 1em;
            border: solid 1px rgba(0, 0, 0, 0.1);
            padding: 1em;
            background-color: white;
            filter: drop-shadow(0 0 0.2em rgba(0, 0, 0, 0.1));
            transition: 0.1s;
            margin: 0 0.1em 0 0.1em;
        }

        button:hover {
            background-color: rgba(0, 0, 0, 1);
            color: white;
            cursor: pointer;
        }

        button:focus {
            background-color: rgba(0, 0, 0, 1);
            color: white;
        }
    </style>

    <html>
        <div id="user-interface">
            <div id="palette-selector">
                <p>Select palette</p>
                <button id="default" class="focus" autofocus>Default</button>
                <button id="bright" class="focus">Bright</button>
                <button id="dark" class="focus">Dark</button>
                <button id="muted" class="focus">Muted</button>
            </div>
        </div>
    
    </html>
`

customElements.define(COMPONENTS.USER_INTERFACE,
    class extends HTMLElement {        
        #userInterface

        #defaultButton
        #brightButton
        #darkButton
        #mutedButton

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#userInterface = this.shadowRoot.querySelector('#user-interface')
            this.#defaultButton = this.shadowRoot.querySelector('#default')
            this.#brightButton = this.shadowRoot.querySelector('#bright')
            this.#darkButton = this.shadowRoot.querySelector('#dark')
            this.#mutedButton = this.shadowRoot.querySelector('#muted')
        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#defaultButton.addEventListener('click', (event) => this.#sendNewPaletteEvent(event))
            this.#brightButton.addEventListener('click', (event) => this.#sendNewPaletteEvent(event))
            this.#darkButton.addEventListener('click', (event) => this.#sendNewPaletteEvent(event))
            this.#mutedButton.addEventListener('click', (event) => this.#sendNewPaletteEvent(event))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

        #sendNewPaletteEvent(event) {
            const buttonPressed = event.target.id

            const newPaletteEvent = new window.CustomEvent(EVENTS.NEW_PALETTE, { detail: buttonPressed, bubbles: true })
            this.dispatchEvent(newPaletteEvent)
        }

    }
)