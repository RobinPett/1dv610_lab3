/**
 * Color Companion Main Application
 */
import { COMPONENTS } from '../../constants/components'
import '../image-uploader'
import '../image-presenter'
import '../palette-extractor'
import '../palette-presenter'
import '../palette-picker'
import ColorPalette from '../../model/ColorPalette'
import html2canvas from 'html2canvas'
import Toast from '../utils/Toast'
import "toastify-js/src/toastify.css"
import { EVENTS } from '../../constants/events'

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

        #palettePicker

        #toast

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#colorCompanionApp = this.shadowRoot.querySelector('#color-companion-app')
            this.#imageUploader = this.shadowRoot.querySelector('#image-uploader')

            this.#toast = new Toast()

        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            console.log('ColorCompanion connected to browser')

            this.#imageUploader.addEventListener(EVENTS.FILE_UPLOADED, (event) => this.#handleDroppedFile(event))
            this.#colorCompanionApp.addEventListener(EVENTS.PARSED_IMAGE, (event) => this.#handleParsedImage(event))
            this.#colorCompanionApp.addEventListener(EVENTS.CREATED_PALETTE, (event) => this.#handleCreatedPalette(event))
            this.#colorCompanionApp.addEventListener(EVENTS.NEW_PALETTE, (event) => this.#getNewPalette(event))
            this.#colorCompanionApp.addEventListener(EVENTS.SAVE_PALETTE, (event) => this.#savePalette(event))
            this.#colorCompanionApp.addEventListener(EVENTS.HEX_COPIED, () => this.#displayToastMessage('Color copied')) // Flash message
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

            if (this.#isAlreadyDisplayingComponent(COMPONENTS.PALETTE_PICKER)) {
                this.#removeComponent(COMPONENTS.PALETTE_PICKER)
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
            this.#palettePicker = document.createElement(COMPONENTS.PALETTE_PICKER)
            this.#colorCompanionApp.appendChild(this.#palettePicker)
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

            console.log('New palette: ')
            console.log(newExtractedPalette)

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
            this.#toast.showMessage(message)
        }
    }
)