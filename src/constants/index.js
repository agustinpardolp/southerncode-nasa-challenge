

export const REGEX = {
  NUMERIC_PASSWORD: /^[0-9]+$/,
  EMAIL_REGEX_SCHEMA: /^(?=.{1,254}$)((?=.{1,64}@)[ñÑa-zA-Z0-9-`~!@#$%^&*?/()_|+\-=;:'"´¨,.<>\{\}\[\]\\\/]+\.[A-Za-z]{2,4},?)$/,
  NAME_REGEX: /^([a-zA-Z ]){2,30}$/,
  SURNAME_REGEX: /^[a-z ,.'-]+$/,
  DNI_REGEX: /^[0-9]{8}$/
};
export const REQUEST_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED",
};
export const MEDIA_SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const DEVICES_MAX_WIDTH = {
  mobileS: `(max-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(max-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(max-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(max-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(max-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(max-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(max-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(max-width: ${MEDIA_SIZES.desktop})`,
};
