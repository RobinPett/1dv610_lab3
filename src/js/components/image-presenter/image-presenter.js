/**
 * Image uplaoder component.
 */

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        #image-presenter img{
            width: 50%;
            height: auto;
            margin: 2em;
        }
    </style>

    <html>
        <div id="image-presenter">
        </div>
    </html>
`

customElements.define('image-presenter',
    class extends HTMLElement {
        #imagePresenter

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
         * Setter for image file.
         * 
         * @param {File} file
         */
        set image(file) {
            if (file instanceof File) {
                this.#parseImage(file)
            }
        }

        #parseImage(file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                const img = document.createElement('img')
                img.src = reader.result

                this.#imagePresenter.appendChild(img)
            }
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