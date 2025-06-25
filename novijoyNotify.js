/**
 * NoviJoyNotify - Simple Visual Notification Utility
 * Author: NoviJoy
 * License: Custom
 */

const NoviJoyNotify = {
    /**
     * Displays a temporary notification on the page.
     * @param {string} message - The message to display.
     * @param {number} [duration=3000] - Duration in milliseconds.
     */
    show(message, duration = 3000) {
        if (typeof message !== 'string' || message.trim() === '') {
            console.error('[NoviJoyNotify] Invalid message.');
            return;
        }

        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#333';
        notification.style.color = '#fff';
        notification.style.padding = '10px 15px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        notification.style.zIndex = '1000';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.fontSize = '14px';
        
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, duration);
    }
};

// Example usage:
// NoviJoyNotify.show('This is a NoviJoy notification!', 4000);

module.exports = NoviJoyNotify;
