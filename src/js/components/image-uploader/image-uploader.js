/**
 * Image uplaoder component.
 */

import uploadIcon from '../img/upload_icon.svg'

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #image-uploader {
            border: solid rgba(0, 0, 0, 0.2);
            width: 50%;
            height: 50%;
            margin: auto;
            border-radius: 1em;
            transition: 0.2s;
            display: flex;
            flex-direction: column;
        }

        #image-uploader:hover {
            border: solid rgba(0, 0, 0, 0.5);
            background-color: rgba(0, 0, 0, 0.02);
            width: 51%;
            height: 51%;
            cursor: pointer;
        }

        #image-uploader:hover #upload-icon {
            width: 55%;
        }

        #upload-icon {
            width: 50%;
            margin: auto;
            transition: 0.2s;
        }

    </style>

    <html>
        <div id="image-uploader">
            <img src="${uploadIcon}" alt="upload icon" id="upload-icon"/>
            <p>Upload image</p>
        </div>
       
    </html>
`

customElements.define('image-uploader',
    class extends HTMLElement {
        #imageUploader

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            // Get element in shadow root
            this.#imageUploader = this.shadowRoot.querySelector('#image-uploader')
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


    }
)