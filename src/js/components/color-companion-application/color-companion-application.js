/**
 * Color Companion Main Application
 */

import '../image-uploader'
import '../image-presenter'

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

        #imagePresenter

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

            this.#imageUploader.addEventListener('file-dropped', (event) => this.#handleDroppedFile(event))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

        #handleDroppedFile(event) {
            console.log('Handle drop event')
            const file = event.detail

            this.#imagePresenter = document.createElement('image-presenter')
            this.#imagePresenter.image = file

            this.#colorCompanionApp.appendChild(this.#imagePresenter)

        }

    }
)