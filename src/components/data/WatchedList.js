export const moviesData = [
  {
    id: 1,
    title: "Policejní akademie",
    year: 1984,
    genre: "Comedy",
    rating: 7.2,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651156_2277a3.jpg",
  },
  {
    id: 2,
    title: "Policejní akademie 2: První nasazení",
    year: 1985,
    genre: "Comedy",
    rating: 7.0,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651157_913a78.jpg",
  },
  {
    id: 3,
    title: "Policejní akademie 3: Znovu ve výcviku",
    year: 1986,
    genre: "Comedy",
    rating: 6.9,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651158_8ee031.jpg",
  },
  {
    id: 4,
    title: "Policejní akademie 4: Občanská patrola",
    year: 1987,
    genre: "Comedy",
    rating: 6.7,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651159_69bb17.jpg",
  },
  {
    id: 5,
    title: "Policejní akademie 5: Nasazení v Miami Beach",
    year: 1988,
    genre: "Comedy",
    rating: 6.5,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651160_ceba89.jpg",
  },
  {
    id: 6,
    title: "Policejní akademie 6: Město v obležení",
    year: 1989,
    genre: "Comedy",
    rating: 6.4,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651155_698ca7.jpg",
  },
  {
    id: 7,
    title: "Policejní akademie 7: Moskevská mise",
    year: 1994,
    genre: "Comedy",
    rating: 5.2,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/651/158651161_77c108.jpg",
  },
  {
    id: 8,
    title: "Růžový panter",
    year: 2006,
    genre: "Comedy",
    rating: 7.0,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/000/042/42209_fae7f0.jpg",
  },
  {
    id: 9,
    title: "Růžový panter 2",
    year: 2009,
    genre: "Comedy",
    rating: 6.5,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w140/files/images/film/posters/000/054/54794_424716.jpg",
  },
  {
    id: 10,
    title: "Simpsonovi ve filmu",
    year: 2007,
    genre: "Animated",
    rating: 9.0,
    notes: "",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/000/004/4599_41e971.jpg",
  },
  {
    id: 11,
    title: "Comeback",
    year: 2008,
    genre: "Comedy",
    rating: 9.2,
    notes: "Both series",
    coverUrl:
      "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/170/044/170044994_9nto2l.jpg",
  },
];

export const addMovie = (newMovie) => {
  const nextId = Math.max(...moviesData.map((m) => m.id)) + 1;
  const movieWithId = {
    id: nextId,
    ...newMovie,
    dateAdded: new Date().toISOString(),
  };
  moviesData.push(movieWithId);
  return movieWithId;
};

export const getAllMovies = () => {
  return [...moviesData];
};

export const getMovieById = (id) => {
  return moviesData.find((movie) => movie.id === id);
};

export const deleteMovie = (id) => {
  const index = moviesData.findIndex((movie) => movie.id === id);
  if (index > -1) {
    return moviesData.splice(index, 1)[0];
  }
  return null;
};

export default moviesData;