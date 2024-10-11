/**
 * Color Companion Main Application
 */

import '../image-uploader'
import '../image-presenter'
import '../palette-extractor'

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

        #paletteExtractor

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
            this.#colorCompanionApp.addEventListener('parsed-image', (event) => this.#handleParsedImage(event))
            this.#colorCompanionApp.addEventListener('created-palette', (event) => this.#handleCreatedPalette(event))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

        #handleDroppedFile(event) {
            console.log('Handle drop event')
            const file = event.detail

            if (this.#isAlreadyPresentsImage()) {
                this.#removeImage()
            }

            // Create new presenter
            this.#imagePresenter = document.createElement('image-presenter')
            this.#imagePresenter.image = file
            this.#colorCompanionApp.appendChild(this.#imagePresenter)

        }

        /**
         * Check for already existing image-presenter.
         *
         * @returns {boolean}
         */
        #isAlreadyPresentsImage() {
            if (this.#colorCompanionApp.querySelector('image-presenter')) return true
            return false
        }

        #removeImage() {
            const presenter = this.#colorCompanionApp.querySelector('image-presenter')
            this.#colorCompanionApp.removeChild(presenter)

        }

        /**
         * Handle when an image has been parced ---- CHANGE NAME?!?! EXTRACTPALETTE ?!
         * 
         * @param {*} event 
         */
        #handleParsedImage(event) {
            console.log('Handle parsed image event')
            const imageElement = event.detail
            
            this.#paletteExtractor = document.createElement('palette-extractor')
            this.#paletteExtractor.imageElement = imageElement
            

            this.#colorCompanionApp.appendChild(this.#paletteExtractor)
        }

        /**
         * Handles color palette event. ------ CHANGE!!!!
         */
        #handleCreatedPalette(event) {
            console.log('Handle created palette event')
            const palette = event.detail

            console.log(palette)
        }

    }
)