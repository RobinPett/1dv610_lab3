/**
 * Color Companion Main Application
 */
import { COMPONENTS } from '../../constants/components'
import '../image-uploader'
import '../image-presenter'
import '../palette-extractor'
import '../palette-presenter'
import '../user-interface'
import ColorPalette from '../../model/ColorPalette'
import html2canvas from 'html2canvas'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

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
        </div>
    </html>
`

customElements.define(COMPONENTS.COLOR_COMPANION_APPLICATION,
    class extends HTMLElement {
        #colorCompanionApp

        #imageUploader

        #imagePresenter

        #paletteExtractor

        #palettePresenter

        #userInterface

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

            this.#imageUploader.addEventListener('file-uploaded', (event) => this.#handleDroppedFile(event))
            this.#colorCompanionApp.addEventListener('parsed-image', (event) => this.#handleParsedImage(event))
            this.#colorCompanionApp.addEventListener('created-palette', (event) => this.#handleCreatedPalette(event))
            this.#colorCompanionApp.addEventListener('new-palette', (event) => this.#getNewPalette(event))
            this.#colorCompanionApp.addEventListener('save-palette', (event) => this.#savePalette(event))
            this.#colorCompanionApp.addEventListener('hex-copied', () => this.#displayToastMessage('Color copied')) // Flash message
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

        #handleDroppedFile(event) {
            const file = event.detail

            this.#clearPreviousImage()
            this.#createUserInterface()
            this.#createImagePresenter(file)
        }

        /**
         * Clear previous image and palette from application.
         */
        #clearPreviousImage() {
            if (this.#isAlreadyDisplayingComponent(COMPONENTS.IMAGE_PRESENTER)) {
                this.#removeComponent(COMPONENTS.IMAGE_PRESENTER)
            }

            if (this.#isAlreadyDisplayingComponent(COMPONENTS.PALETTE_PRESENTER)) {
                this.#removeComponent(COMPONENTS.PALETTE_PRESENTER)
            }

            if (this.#isAlreadyDisplayingComponent(COMPONENTS.USER_INTERFACE)) {
                this.#removeComponent(COMPONENTS.USER_INTERFACE)
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

        #createImagePresenter(file) {
            this.#imagePresenter = document.createElement(COMPONENTS.IMAGE_PRESENTER)
            this.#imagePresenter.image = file
            this.#colorCompanionApp.appendChild(this.#imagePresenter)
        }

        #createUserInterface() {
            this.#userInterface = document.createElement(COMPONENTS.USER_INTERFACE)
            this.#colorCompanionApp.appendChild(this.#userInterface)
        }

        /**
         * Handle when an image has been parced ---- CHANGE NAME?!?! EXTRACTPALETTE ?!
         * 
         * @param {*} event 
         */
        #handleParsedImage(event) {
            const imageElement = event.detail

            this.#paletteExtractor = document.createElement(COMPONENTS.PALETTE_EXTRACTOR)
            this.#paletteExtractor.imageElement = imageElement


            this.#colorCompanionApp.appendChild(this.#paletteExtractor)
        }

        /**
         * Handles color palette event. ------ CHANGE!!!!
         */
        #handleCreatedPalette(event) {
            const createdPalette = event.detail
            const colorPalette = new ColorPalette(createdPalette)

            this.#createPalettePresenter(colorPalette)
        }

        #createPalettePresenter(palette) {
            this.#palettePresenter = document.createElement(COMPONENTS.PALETTE_PRESENTER)
            this.#palettePresenter.colorPalette = palette

            this.#colorCompanionApp.appendChild(this.#palettePresenter)
        }

        #getNewPalette(event) {
            const newPalette = event.detail
            let newExtractedPalette

            if (this.#paletteExtractor) {
               newExtractedPalette = this.#paletteExtractor.getNewPalette(newPalette)
            }

            const colorPalette = new ColorPalette(newExtractedPalette)

            this.#clearPalette()

            this.#createPalettePresenter(colorPalette)
        }

        #clearPalette() {
            if (this.#isAlreadyDisplayingComponent(COMPONENTS.PALETTE_PRESENTER)) {
                this.#removeComponent(COMPONENTS.PALETTE_PRESENTER)
            }
        }

        async #savePalette(event) {
            const palette = event.detail
            const paletteToCanvas = await html2canvas(palette)

            const image = new Image()
            image.src = paletteToCanvas.toDataURL()

            const link = document.createElement('a')
            link.href = image.src
            link.download = 'palette.png'

            link.click()
        }

        #displayToastMessage(message) {
            Toastify({
                text: message,
                duration: 3000,
                gravity: 'top',
                position: 'right',
                stopOnFocus: true,
                newWindow: true,
            }).showToast()
        }
    }
)