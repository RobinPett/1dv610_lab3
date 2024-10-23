/**
 * Image presenter component.
 */

import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #image-presenter img{
            width: 20%;
            height: auto;
            margin: 2em;
            border-radius: 1em;
            filter: drop-shadow(0 0 1em rgba(0, 0, 0, 0.1));
        }
    </style>

    <html>
        <div id="image-presenter">
        </div>
    </html>
`

customElements.define(COMPONENTS.IMAGE_PRESENTER,
    class extends HTMLElement {
        #imagePresenter

        #image

        #imageElement

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#imagePresenter = this.shadowRoot.querySelector('#image-presenter')
        }

        /**
         * Setter image and process it.
         * 
         * @param {File} file
         */
        set image(file) {
            if (file instanceof File) {
                this.#image = file
                this.#processImage()
            }
        }

        async #processImage() {
            try {
                await this.#getImageElement()
                this.#presentImage()
                this.#sendImageEvent()
            } catch (error) {
                console.error('Failed to present image: ' + error) // TODO Throw error instead
                throw new Error()
            }
        }

        #getImageElement(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(this.#image)
                reader.onloadend = () => {
                    this.#imageElement = document.createElement('img')
                    this.#imageElement.src = reader.result

                    resolve()
                }

                reader.onerror = () => reject(new Error('Failed to read image file'))
            })

        }

        #presentImage() {            
            this.#imagePresenter.appendChild(this.#imageElement)
        }

        #sendImageEvent () {
            const parsedImageEvent = new window.CustomEvent(EVENTS.PARSED_IMAGE, { detail: this.#imageElement, bubbles: true })
            this.dispatchEvent(parsedImageEvent)
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