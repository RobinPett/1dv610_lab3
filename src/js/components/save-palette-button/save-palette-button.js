/**
 * Save-palette component.
 */

import { COMPONENTS } from "../../constants/components"
import BaseComponent from "../BaseComponent"

// Define html template
const template = document.createElement('template')

template.innerHTML = `
    <style>
        button {
            border-radius: 1em;
            border: solid 1px rgba(0, 0, 0, 0.1);
            padding: 1em;
            background-color: white;
            filter: drop-shadow(0 0 0.2em rgba(0, 0, 0, 0.1));
            transition: 0.1s;
            margin: 0 0.1em 0 0.1em;
        }

        button:hover {
            background-color: rgba(0, 0, 0, 1);
            color: white;
            cursor: pointer;
        }
            
    </style>

    <html>
        <div id="save-palette">
            <button>Save palette</button>
        </div>
    </html>
`

customElements.define(COMPONENTS.SAVE_PALETTE_BUTTON,
    class extends BaseComponent {

        constructor() {
            super()

            // Attach a shadow DOM tree to element
            // Appens template to shadow Root
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }
    })