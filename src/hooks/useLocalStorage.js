const getLocalStorageData = (key) => {
   const data = localStorage.getItem(key);
   return data ? JSON.parse(data) : [];
};

const setLocalStorageData = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
};

export default ({ key }) => {
   const [storedIds, setStoredIds] = useState(getLocalStorageData(key));

   const addItem = (id) => {
      storedIds = [...storedIds, id];
      setLocalStorageData(key);
   };

   const removeItem = (id) => {
      storedIds = storedIds.filter((currentId) => currentId != id);
      setLocalStorageData(key);
   };

   const toggleItem = (id) => {
      storedIds.includes(id) ? removeItem(id) : addItem(id);
   };

   return { addItem, removeItem, toggleItem, storedIds };
};
