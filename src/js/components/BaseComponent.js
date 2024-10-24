/**
 * Base component component.
 */

import { EVENTS } from "../constants/events"


class BaseComponent extends HTMLElement {
    dispatchError(message) {
        const errorEvent = new window.CustomEvent(EVENTS.ERROR, { detail: message, bubbles: true })
        this.dispatchEvent(errorEvent)
    }
}

export default BaseComponent