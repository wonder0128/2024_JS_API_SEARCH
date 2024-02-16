import {Store} from '../core/roze'

const store = new Store({
  searchText: '',
  page: 1,
  moives: []
});

export default store 
export const searchMovies = async page => {
  if(page === 1){
    store.state.page = 1;
    store.state.movies = [];
  }

  const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=159d0449&s=${store.state.searchText}&page=${page}`);
  const {Search} = await res.json();
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ]
}