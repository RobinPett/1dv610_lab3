/**
 * Save-palette component.
 */

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
    </style>

    <html>
        <div id="save-palette">
            <button>+</button>
        </div>
    </html>
`

customElements.define('save-palette',
    class extends HTMLElement {
        #savePalette

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#savePalette = this.shadowRoot.querySelector('#save-palette')
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
    })