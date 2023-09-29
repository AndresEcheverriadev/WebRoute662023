const getItem = (key) => {
  const data = sessionStorage.getItem(key);
  return JSON.parse(data);
};

const setItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key) => sessionStorage.removeItem(key);

const clearAll = () => sessionStorage.clear();

export const SessionStorageService = { getItem, setItem, removeItem, clearAll };
