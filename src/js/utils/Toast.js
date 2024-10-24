import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

/**
 * Sets up and displays toast messages.
 */
class Toast {
    showMessage(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            newWindow: true,
        }).showToast()
    }

    showError(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            newWindow: true,
            backgroundColor: '#ed4337'
        }).showToast()
    }
}

export default Toast