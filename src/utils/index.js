export const createActionTypes = (key, baseAction) => ({
  [`${baseAction}`]: `${key}/${baseAction}`,
  [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
  [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
  [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`,
});

export const DEBOUNCE_DELAY_TIME = 200;

export const debounce = (func, timeout = DEBOUNCE_DELAY_TIME) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export const saveToLocalStorage = (key, values) => {
  try {
    const data = JSON.stringify(values);
    localStorage.setItem(key, data);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    if (data === null) return undefined;
    return data;
  } catch (e) {
    return undefined;
  }
};

export const removeFromLocalStorage = () => {
  localStorage.removeItem('queryData');
};
