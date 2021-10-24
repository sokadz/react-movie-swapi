import styled from "styled-components";

const MovieContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;

// const CoverImage = styled.img`
// object-fit: cover;
// height: 362px;
// `;

const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 16px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

const InfoColumn = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
text-transform: capitalize;
`

const MovieComponent = (props) => {

    const {title, episode_id, director, release_date} = props.movie;
    return (
        <MovieContainer onClick={() => props.onMovieSelect(episode_id)}>
                {/* <CoverImage src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/> */}
                <MovieName>{title}</MovieName>
                <InfoColumn>
                    <MovieInfo>director: {director}</MovieInfo>
                    <MovieInfo>release : {release_date}</MovieInfo>
                </InfoColumn>
            </MovieContainer>
    )
}
export default MovieComponent