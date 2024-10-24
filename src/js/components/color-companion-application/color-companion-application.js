/**
 * Color Companion Main Application
 */

import { COMPONENTS } from '../../constants/components'
import { EVENTS } from '../../constants/events'
import BaseComponent from '../BaseComponent'
import '../image-uploader'
import '../image-presenter'
import '../palette-extractor'
import '../palette-presenter'
import '../palette-picker'
import ColorPalette from '../../model/ColorPalette'
import PaletteExtractor from '../../utils/PaletteExtractor'
import PaletteImageSaver from '../../utils/PaletteImageSaver'
import Toast from '../../utils/Toast'

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
    class extends BaseComponent {
        #colorCompanionApp

        #imageUploader

        #imagePresenter

        #paletteExtractor

        #palettePresenter

        #palettePicker

        #paletteSaver

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

            this.#paletteExtractor = new PaletteExtractor()
            this.#paletteSaver = new PaletteImageSaver()
            this.#toast = new Toast()

        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            console.log('ColorCompanion connected to browser')

            this.#imageUploader.addEventListener(EVENTS.FILE_UPLOADED, (event) => this.#handleDroppedFile(event))
            this.#colorCompanionApp.addEventListener(EVENTS.PARSED_IMAGE, (event) => this.#handleParsedImage(event))
            this.#colorCompanionApp.addEventListener(EVENTS.NEW_PALETTE, (event) => this.#getNewPalette(event))
            this.#colorCompanionApp.addEventListener(EVENTS.SAVE_PALETTE, (event) => this.#savePalette(event))
            this.#colorCompanionApp.addEventListener(EVENTS.HEX_COPIED, () => this.#displayToastMessage('Color copied'))
            this.#colorCompanionApp.addEventListener(EVENTS.ERROR, (event) => this.#displayToastError(event.detail))
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

        async #handleParsedImage(event) {
            try {
                const imageElement = event.detail
                this.#paletteExtractor.setImageElement(imageElement)
                const palette = await this.#paletteExtractor.getPalette()
                this.#handlePaletteCreation(palette)
            } catch (error) {
                this.#displayToastError(error.message)
            }
        }

        #handlePaletteCreation(createdPalette) {
            try {
                const colorPalette = new ColorPalette(createdPalette)
                this.#createPalettePresenter(colorPalette)   
            } catch (error) {
                this.#displayToastError(error.message)
            }
        }

        #createPalettePresenter(palette) {
            this.#palettePresenter = document.createElement(COMPONENTS.PALETTE_PRESENTER)
            this.#palettePresenter.colorPalette = palette

            this.#colorCompanionApp.appendChild(this.#palettePresenter)
        }

        #getNewPalette(event) {
            try {
                const newPalette = event.detail
                let newExtractedPalette
    
                this.#clearPalette()
    
                if (this.#paletteExtractor) {
                    newExtractedPalette = this.#paletteExtractor.getNewPalette(newPalette)
                }
    
                this.#handlePaletteCreation(newExtractedPalette)   
            } catch (error) {
                this.#displayToastError(error.message)
            }
        }

        #clearPalette() {
            if (this.#isAlreadyDisplayingComponent(COMPONENTS.PALETTE_PRESENTER)) {
                this.#removeComponent(COMPONENTS.PALETTE_PRESENTER)
            }
        }

        async #savePalette(event) {
            try {
                const palette = event.detail
                this.#paletteSaver.saveImage('palette', palette)   
            } catch (error) {
                this.#displayToastError(error.message)
            }
        }
        
        #displayToastMessage(message) {
            this.#toast.showMessage(message)
        }

        #displayToastError(message) {
            this.#toast.showError(message)
        }
    }
)