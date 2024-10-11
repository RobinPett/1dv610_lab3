/**
 * User interface component.
 */

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #user-interface {
        }
    </style>

    <html>
        <div id="user-interface">
            <div id="palette-selector">
                <p>Select palette</p>
                <button id="default">Default</button>
                <button id="bright">Bright</button>
                <button id="dark">Dark</button>
                <button id="muted">Muted</button>
            </div>
        </div>
    
    </html>
`

customElements.define('user-interface',
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

            const newPaletteEvent = new window.CustomEvent('new-palette', { detail: buttonPressed, bubbles: true })
            this.dispatchEvent(newPaletteEvent)
        }

    }
)