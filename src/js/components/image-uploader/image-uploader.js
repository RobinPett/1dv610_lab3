/**
 * Image uplaoder component.
 */

import uploadIcon from './img/upload_icon.svg'

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

customElements.define('image-uploader',
    class extends HTMLElement {
        #imageUploader

        #imageFileInput
        
        #image

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#imageUploader = this.shadowRoot.querySelector('#image-uploader')
            this.#image = this.shadowRoot.querySelector('#image')
            this.#imageFileInput = this.shadowRoot.querySelector('#image-file-input')
        }

        /**
         * Called when component is connected to the DOM
         */
        connectedCallback() {
            this.#preventDefaultBehaviour()
            this.#imageUploader.addEventListener('dragenter', (event) => this.#handleDragOver(event))
            this.#imageUploader.addEventListener('drop', (event) => this.#handleDrop(event))
            this.#imageUploader.addEventListener('dragleave', (event) => this.#handleDragLeave(event))
            this.#imageUploader.addEventListener('click', (event) => this.#triggerFilePicker())
            this.#imageFileInput.addEventListener('change', (event) => this.#handleChosenFile(event))
        }

        /**
         * Called when component is disconnected from the DOM
         */
        disconnectedCallback() {
        }

        /**
         * Prevent the browser to do anything with items dragged or dropped in this component.
         */
        #preventDefaultBehaviour() {
           const events =  ['dragenter', 'dragover', 'dragleave', 'drop']

           events.forEach(event => {
                this.#imageUploader.addEventListener(event, this.#preventDefaults, false)
           })
        }

        #preventDefaults(event) {
            event.preventDefault()
            event.stopPropagation()
        }

        #handleDragOver() {
            console.log('Set styling')
        }

        #handleDrop(event) {
            console.log('DROP EVENT')
            const filesDropped = event.dataTransfer.items

            if (filesDropped) {
                const rawFile = filesDropped[0] // 1st file
    
                this.#checkFileValidity(rawFile)
                const file = rawFile.getAsFile()
                this.#sendFileUploadedEvent(file)
            }
        }

        #triggerFilePicker() {
            this.#imageFileInput.click()
        }

        #handleChosenFile(event) {
            const file = event.target.files[0] // first file
            this.#sendFileUploadedEvent(file)
        }

        #sendFileUploadedEvent(file) {
            const fileUploaded = new window.CustomEvent('file-uploaded', { detail: file, bubbles: true })
            this.dispatchEvent(fileUploaded)
        }

        /**
         * Check if file is an image.
         * 
         * @param {object} rawFile 
         */
        #checkFileValidity(rawFile) {
            if (!rawFile.type.startsWith('image/')) {
                throw new TypeError('File must be an image')
            }
        }

        #handleDragLeave() {
            console.log('Set styling back to original')
        }


    }
)