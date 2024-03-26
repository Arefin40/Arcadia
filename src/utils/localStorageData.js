export const getLocalStorageData = (key) => {
   const data = localStorage.getItem(key);
   return data ? JSON.parse(data) : [];
};

export const setLocalStorageData = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
};
