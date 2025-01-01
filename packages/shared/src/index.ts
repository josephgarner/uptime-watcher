export const API_URL = "http://localhost:4000/api";

export const STATUS = Object.freeze({
  INITAL: Symbol("inital"),
  UP: Symbol("up"),
  SPOOLING: Symbol("spooling"),
  DOWN: Symbol("down"),
});
