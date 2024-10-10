
/**
 * Helper methods to handle files uploaded.
 */

export class FileHandler {
    #imageFile

    constructor(image) {
        this.#imageFile = image
    }

    #convertImageToURL() {
        const reader = new FileReader(this.#imageFile)
    }
}