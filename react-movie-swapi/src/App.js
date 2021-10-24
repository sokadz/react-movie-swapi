import styled from 'styled-components';
import MovieComponent from './component/MovieComponent';
import MovieInfoComponent from './component/MovieInfoComponent';
import { useState } from 'react';
import Axios from 'axios';

export const API_URL="http://swapi.co/api"

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
color: white;
align-items: center;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

// const MovieImage = styled.div`
// width: 48px;
// height: 48px;
// margin: 15px;
// `;

const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px;
background-color: white;
border-radius: 6px;
margin-left: 20px;
width: 50%;
background-color: white;
align-items: center;
`;

const SearchIcon = styled.img`
width: 32px;
height: 32px;
`;

const SearchInput= styled.input`
color: black;
font-size: 16px;
font-weight: bold;
border: none;
outline: none;
margin-left: 15px;
`;

const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
`

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();


  const fetchData = async (searchString) => {
    const response = await Axios.get(`https://swapi.dev/api/films/?s=${searchString}&apikey=${API_URL}`)  
    updateMovieList(response.data.results);                                                                                                                                                                                                   
  };

  const onTextChange = (event) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value),500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
          {/* <MovieImage src="/movie-icon.svg"/> */}
          React Movie Swapi
        </AppName>
        <SearchBox>
          <SearchIcon src="/search-icon.svg"/>
          <SearchInput 
          placeholder="Search Movie" 
          value={searchQuery}
          onChange={onTextChange}/>
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length
        ? movieList.map((movie, index) => <MovieComponent key={index} movie={movie} selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/> )
        : "Please search the movie"}
        
      </MovieListContainer>
    </Container>
  );
}

export default App;
