/**
 * Color Companion Main Application
 */

// TODO
// Add checks for already existing component in one single method
// isAlreadyRendering(component)

// Maybe clear palette-presenter and image-presenter at the same time? On drop event? 

import '../image-uploader'
import '../image-presenter'
import '../palette-extractor'
import '../palette-presenter'
import '../user-interface'

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
            <image-uploader id="image-uploader"> </image-uploader>
            <user-interface id="ui" </user-interface>
        </div>
    </html>
`

customElements.define('color-companion-application',
    class extends HTMLElement {
        #colorCompanionApp

        #imageUploader

        #imagePresenter

        #paletteExtractor

        #palettePresenter

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
            this.#colorCompanionApp.addEventListener('new-palette', (event) => this.#getNewPalette(event))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

        #handleDroppedFile(event) {
            console.log('Handle drop event')
            const file = event.detail

            this.#clearImageAndPalette()



            // Create new presenter
            this.#imagePresenter = document.createElement('image-presenter')
            this.#imagePresenter.image = file
            this.#colorCompanionApp.appendChild(this.#imagePresenter)

        }

        /**
         * Clear previous image and palette from application.
         */
        #clearImageAndPalette() {
            const paletteComponent = 'palette-presenter'
            const imageComponent = 'image-presenter'

            if (this.#isAlreadyDisplayingComponent(imageComponent)) {
                this.#removeComponent(imageComponent)
            }

            if (this.#isAlreadyDisplayingComponent(paletteComponent)) {
                this.#removeComponent(paletteComponent)
            }
        }

        #isAlreadyDisplayingComponent(component) {
            if (this.#colorCompanionApp.querySelector(component)) return true
            return false
        }

        #removeComponent(component) {
            const componentElement = this.#colorCompanionApp.querySelector(component)
            if (componentElement) {
                this.#colorCompanionApp.removeChild(componentElement)
            }
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

            this.#palettePresenter = document.createElement('palette-presenter')
            this.#palettePresenter.colorPalette = palette

            this.#colorCompanionApp.appendChild(this.#palettePresenter)
        }

        #getNewPalette(event) {
            const newPalette = event.detail
            console.log(newPalette)
        }
    }
)