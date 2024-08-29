function setToStorage(key, data) {
    localStorage.setItem(key, data)
}

function getFromStorage(key) {
    return localStorage.getItem(key)
}

function removeFromStorage(key) {
    localStorage.removeItem(key)
}

export { setToStorage, getFromStorage, removeFromStorage }