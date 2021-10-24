import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_URL } from "../App";
// const API_URL="http://swapi.co/api/"

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: center;
border-bottom: 1px solid lightray;
`;

// const CoverImage = styled.img`
// object-fit: cover;
// height: 352px;
// `;

const InfoColumn = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`;

const MovieName = styled.span`
font-size: 22px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
`;

const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
margin: 4px 0;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
    opacity: 0.5;
}
`;

const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;

const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie} = props;

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/?i=${selectedMovie}&apikey=${API_URL}`,)
        .then((response) => setMovieInfo(response.data));
        console.log(setMovieInfo);
    }, [selectedMovie]);
    return (
        <Container>
                {movieInfo? (
                    <>
                    {/* <CoverImage src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/> */}
                    <InfoColumn>
                        <MovieName>Movie: {movieInfo?.title}</MovieName>
                        <MovieInfo>Opening Crawl : <span>{movieInfo?.opening_crawl}</span></MovieInfo>
                        <MovieInfo>Directors : <span>{movieInfo?.director}</span></MovieInfo>
                        <MovieInfo>Producers : <span>{movieInfo?.producer}</span></MovieInfo>
                        <MovieInfo>Release Date : <span>{movieInfo?.release_date}</span></MovieInfo>
                        <MovieInfo>Characters : <span>{movieInfo?.characters}</span></MovieInfo>
                        
                        
                    </InfoColumn> 
                    <Close onClick={() => props.onMovieSelect()}>X</Close>
                    </>
                ) : (
                    "Loading.."
                )}
            </Container>
    );
};
export default MovieInfoComponent