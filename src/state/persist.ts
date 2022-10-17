export const localStorageEffect =
  //@ts-ignore

    (key) =>
    //@ts-ignore
    ({ setSelf, onSet }) => {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      //@ts-ignore
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    };
