export default (storage) => ({
  get(key) {
    try {
      return JSON.parse(storage.getItem(key));
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    storage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    storage.removeItem(key);
  },
  clear() {
    storage.clear();
  },
});
