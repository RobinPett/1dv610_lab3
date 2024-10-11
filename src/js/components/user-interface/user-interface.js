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
                <button id="default-button">Default</button>
                <button id="bright-button">Bright</button>
                <button id="dark-button">Dark</button>
                <button id="muted-button">Muted</button>
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

            this.#defaultButton = this.shadowRoot.querySelector('#default-button')
            this.#brightButton = this.shadowRoot.querySelector('#bright-button')
            this.#darkButton = this.shadowRoot.querySelector('#dark-button')
            this.#mutedButton = this.shadowRoot.querySelector('#muted-button')
        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#defaultButton.addEventListener('click', (event) => console.log('Defualt palette'))
            this.#brightButton.addEventListener('click', (event) => console.log('Bright palette'))
            this.#darkButton.addEventListener('click', (event) => console.log('Dark palette'))
            this.#mutedButton.addEventListener('click', (event) => console.log('Muted palette'))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

    }
)