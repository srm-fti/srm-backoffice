const ACCESS_TOKEN_KEY = "access_token";
const ID_TOKEN_KEY = "id_token";
const EMAIL_KEY = "email";
const FCM_TOKEN_KEY = "fcm_token";
const IMAGE_URL_KEY = "image_url";
const NAME_KEY = "name";
const NO_INDUK_KEY = "no_induk";
const REFRESH_TOKEN_KEY = "refresh_token";
const ROLE_KEY = "role";
/* eslint-disable no-console */
export const getName = () => {
  return window.localStorage.getItem(NAME_KEY);
};

export const getRole = () => {
  return window.localStorage.getItem(ROLE_KEY);
};

export const getEmail = () => {
  return window.localStorage.getItem(EMAIL_KEY);
};

export const getImgUrl = () => {
  return window.localStorage.getItem(IMAGE_URL_KEY);
};

export const getNoInduk = () => {
  return window.localStorage.getItem(NO_INDUK_KEY);
};

export const getAccessToken = () => {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const getIdToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveAccessToken = token => {
  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const saveIdToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveRefreshToken = token => {
  window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const saveUserSession = (
  access_token,
  id_token,
  email,
  fcm_token,
  image_url,
  name,
  no_induk,
  refresh_token,
  role
) => {
  window.localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
  window.localStorage.setItem(ID_TOKEN_KEY, id_token);
  window.localStorage.setItem(EMAIL_KEY, email);
  window.localStorage.setItem(FCM_TOKEN_KEY, fcm_token);
  window.localStorage.setItem(IMAGE_URL_KEY, image_url);
  window.localStorage.setItem(NAME_KEY, name);
  window.localStorage.setItem(NO_INDUK_KEY, no_induk);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
  window.localStorage.setItem(ROLE_KEY, role);
};

export const destroyUserSession = () => {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(EMAIL_KEY);
  window.localStorage.removeItem(FCM_TOKEN_KEY);
  window.localStorage.removeItem(IMAGE_URL_KEY);
  window.localStorage.removeItem(NAME_KEY);
  window.localStorage.removeItem(NO_INDUK_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.localStorage.removeItem(ROLE_KEY);
};

export default {
  getName,
  getRole,
  getEmail,
  getImgUrl,
  getNoInduk,
  getIdToken,
  saveIdToken,
  getAccessToken,
  saveAccessToken,
  getRefreshToken,
  saveRefreshToken,
  saveUserSession,
  destroyUserSession
};
