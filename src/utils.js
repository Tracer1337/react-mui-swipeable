// Source: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
function preventDefault(event) {
    event.preventDefault()
}

const options = {
    passive: false
}

// Prevent scrolling of window
export function preventTouchScrolling() {
    window.addEventListener("touchmove", preventDefault, options)
}

// Release scrolling of window
export function releaseTouchScrolling() {
    window.removeEventListener("touchmove", preventDefault, options)
}

// Get the x, y position from event (cursor, touch)
export function getPositionFromEvent(event) {
    return event.touches ? {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    } : {
        x: event.clientX,
        y: event.clientY
    }
}