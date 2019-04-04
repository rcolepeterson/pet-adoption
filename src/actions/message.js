import types from "./types";
export function message(msg) {
  return {
    type: types.DISPLAY_SITE_MESSAGE,
    msg: msg
  };
}
