/**
 * Color Companion Main Application
 */

import '../image-uploader'

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #color-companion-app {
            width: 100vw;
            height: 100vh;
        }
    </style>

    <html>
        <div id="color-companion-app">
            <p>Main app</p>
            <image-uploader id="image-uploader" />
        </div>
    </html>
`

customElements.define('color-companion-application',
    class extends HTMLElement {
        #colorCompanionApp

        #imageUploader

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#colorCompanionApp = this.shadowRoot.querySelector('#color-companion-app')
            this.#imageUploader = this.shadowRoot.querySelector('#image-uploader')

        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            console.log('ColorCompanion connected to browser')

            this.#imageUploader.addEventListener('file-dropped', (event) => console.log(event))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

    }
)