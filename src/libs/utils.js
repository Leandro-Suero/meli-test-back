const axios = require("axios");

export function fetchApiMeli(url) {
  return axios.get(process.env.MELI_API_ENDPOINT + url);
}

export function getAuthor() {
  const author = { name: "Leandro", lastname: "Suero" };
  return author;
}

export function splitNumberWithDecimals(number) {
  const numberAsString = number.toString();
  let pieces = numberAsString.split(".");
  const decimals = pieces[1] ? pieces[1] * 1 : 0;

  return { amount: pieces[0] * 1, decimals };
}
