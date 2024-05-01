export const SESSION_KEY = "preKem-session"

export const setAuth = (authValue) => {
    localStorage.setItem(SESSION_KEY, authValue)
}

export const getAuth = () => {
    return localStorage.getItem(SESSION_KEY) || null
}

export const removeAuth = () => {
    localStorage.removeItem(SESSION_KEY)
}

export const StorageService = {
    setAuth,
    getAuth,
    removeAuth,
}