export const createActionTypes = (key, baseAction) => ({
  [`${baseAction}`]: `${key}/${baseAction}`,
  [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
  [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
  [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`,
});

export const errorsFormHandler = (errors) => {
  return Object.entries(errors).length > 0;
};
export const DEBOUNCE_DELAY_TIME = 200;

export const debounce = (
  func,
  timeout = DEBOUNCE_DELAY_TIME
) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
