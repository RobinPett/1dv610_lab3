import html2canvas from 'html2canvas'

/**
 * Handles saving palettes as an image.
 */
class PaletteImageSaver {

    /**
     * Save HTML element with palette to an image.
     *
     * @param {String} name 
     * @param {HTMLDivElement} paletteElement 
     */
    async saveImage(name, paletteElement) {
        try {
            const paletteToCanvas = await html2canvas(paletteElement)

            const image = new Image()
            image.src = paletteToCanvas.toDataURL()
    
            const link = document.createElement('a')
            link.href = image.src
            link.download = `${name}.png`
            link.click()
        } catch (error) {
            throw new Error('Failed to save image: ' + error.message)
        }
    }
}

export default PaletteImageSaver