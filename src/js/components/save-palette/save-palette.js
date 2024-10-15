/**
 * Save-palette component.
 */

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