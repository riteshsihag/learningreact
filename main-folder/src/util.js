export const getLocalStoreItem= (name) => JSON.parse(localStorage.getItem(name));
export const setLocalStoreItem = (name,list) => localStorage.setItem(name,list)
