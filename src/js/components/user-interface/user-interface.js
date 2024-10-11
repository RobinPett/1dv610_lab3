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
                <button id="default-button">Muted</button>
                <button id="bright-button">Muted</button>
                <button id="dark-button">Muted</button>
                <button id="muted-button">Muted</button>
            </div>
        </div>
    
    </html>
`

customElements.define('user-interface',
    class extends HTMLElement {        
        #userInterface

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#userInterface = this.shadowRoot.querySelector('#user-interface')
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