export const setCookie = (name, value, days = 7, path = '/') => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieString = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expirationDate.toUTCString()}; path=${path}`;
    document.cookie = cookieString;
};

export const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null; // Return null if cookie not found
};
export const removeCookie = (name, path = '/') => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
};