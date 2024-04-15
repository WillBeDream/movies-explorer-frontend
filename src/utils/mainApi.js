import { makeRequest } from "./utils";

import { MAIN_API_URL } from "./constants";

export function register({ password, email, name }) {
  return makeRequest(MAIN_API_URL, "/signup", "POST", true, {
    password,
    email,
    name,
  });
}

export function authorize({ password, email }) {
  return makeRequest(MAIN_API_URL, "/signin", "POST", true, {
    password,
    email,
  });
}


export function logout() {
  return makeRequest(MAIN_API_URL, "/signout", "POST", true);
}


export function getUserInfo() {
  return makeRequest(MAIN_API_URL, "/users/me", "GET", true);
}


export function updateUserInfo({ email, name }) {
  return makeRequest(MAIN_API_URL, "/users/me", "PATCH", true, {
    email,
    name,
  });
}

export function getCardsByOwner() {
  return makeRequest(MAIN_API_URL, "/movies", "GET", true);
}

export function createMovieCard({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) {
  return makeRequest(MAIN_API_URL, "/movies", "POST", true, {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  });
}

// DELETE A MOVIE FROM SAVED MOVIES
export function deleteCard(id) {
  return makeRequest(MAIN_API_URL, `/movies/${id}`, "DELETE", true);
}
