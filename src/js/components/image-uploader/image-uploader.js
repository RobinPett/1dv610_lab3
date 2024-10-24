/**
 * Image uploader component.
 * Handles dropped and selected files.
 */

import uploadIcon from './img/upload_icon.svg'
import { COMPONENTS } from "../../constants/components"
import { EVENTS } from "../../constants/events"
import BaseComponent from '../BaseComponent'

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #image-uploader {
            border: solid rgba(0, 0, 0, 0.2);
            width: 25%;
            height: 25%;
            margin: auto;
            border-radius: 1em;
            transition: 0.2s;
            display: flex;
            flex-direction: column;
        }

        #image-uploader:hover {
            border: solid rgba(0, 0, 0, 0.5);
            background-color: rgba(0, 0, 0, 0.02);
            width: 26%;
            height: 26%;
            cursor: pointer;
        }

        #image-uploader:hover #upload-icon {
            width: 25%;
            filter: opacity(100%);
        }

        #upload-icon {
            width: 20%;
            margin: auto;
            filter: opacity(50%);
            transition: 0.2s;
        }

        #image img{
            width: 50%;
            height: auto;
        }

        #image-file-input {
            display: none;
        }

    </style>

    <html>
        <div id="image-uploader">
            <img src="${uploadIcon}" alt="upload icon" id="upload-icon"/>
            <p>Upload image</p>

            <form>
                <input type="file" id="image-file-input" accept="image/*" visibility="hidden">
            </form>
        </div>

        <div id="image"></div>
       
    </html>
`

customElements.define(COMPONENTS.IMAGE_UPLOADER,
    class extends BaseComponent {
        #imageUploader

        #imageFileInput

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#imageUploader = this.shadowRoot.querySelector('#image-uploader')
            this.#imageFileInput = this.shadowRoot.querySelector('#image-file-input')
        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#preventDefaultBehaviour()
            this.#imageUploader.addEventListener('drop', (event) => this.#handleDrop(event))
            this.#imageUploader.addEventListener('click', () => this.#triggerFilePicker())
            this.#imageFileInput.addEventListener('change', (event) => this.#handleChosenFile(event))
        }

        /**
         * Prevent the browser to do anything with items dragged or dropped in this component.
         */
        #preventDefaultBehaviour() {
            const events =  ['dragenter', 'dragover', 'dragleave', 'drop']

            events.forEach(event => {
                this.#imageUploader.addEventListener(event, this.#preventDefaults, false) // TODO - Behövs detta ens?
            })
        }

        #preventDefaults(event) {
            event.preventDefault()
            event.stopPropagation()
        }

        #handleDrop(event) {
            try {
                const filesDropped = event.dataTransfer.items

                if (filesDropped) {
                    const rawFile = filesDropped[0] // 1st file
        
                    this.#checkFileValidity(rawFile)
                    const file = rawFile.getAsFile()
                    this.#sendFileUploadedEvent(file)
                }
            } catch (error) {
                this.dispatchError(error.message)
            }
        }

        #triggerFilePicker() {
            this.#imageFileInput.click()
        }

        #handleChosenFile(event) {
            try {
                const file = event.target.files[0] // 1st file
                this.#checkFileValidity(file)
                this.#sendFileUploadedEvent(file)   
            } catch (error) {
                this.dispatchError(error.message)
            }
        }

        #sendFileUploadedEvent(file) {
            const fileUploaded = new window.CustomEvent(EVENTS.FILE_UPLOADED, { detail: file, bubbles: true })
            this.dispatchEvent(fileUploaded)
        }

        /**
         * Check if file is an image.
         * 
         * @param {object} file 
         */
        #checkFileValidity(file) {
            if (!file.type.startsWith('image/')) {
                throw new TypeError('File must be an image')
            }
        }
    }
)