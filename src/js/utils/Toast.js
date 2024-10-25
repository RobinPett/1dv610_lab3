import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const toastConfig = {
    duration: 3000,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    newWindow: true,
}

/**
 * Sets up and displays toast messages.
 */
class Toast {
    showMessage(message) {
        Toastify({ text: message, backgroundColor: '#2b9ae2', ...toastConfig }).showToast()
    }

    showError(message) {
        Toastify({ text: message, backgroundColor: '#ed4337', ...toastConfig }).showToast()
    }
}

export default Toast