

import {
    StyledMovieDetailsTile,
    IconContainer,
    Image,
    Details,
    Header,
    Year,
    DetailContainer,
    DetailInfo,
    Label,
    MovieDescription
} from "./styled";

export const MovieDetails = () => {
    return (
        <StyledMovieDetailsTile>
            <IconContainer>
                <Image src={imageUrl} alt={`${title} poster`} />
            </IconContainer>
            <Details>
                <Header>{title}</Header>
                <Year>{year}</Year>
                <DetailContainer>
                    <DetailInfo>
                        <Label>Production: </Label>{production}
                    </DetailInfo>
                    <DetailInfo>
                        <Label>Release date: </Label>{releaseDate}
                    </DetailInfo>
                    <DetailInfo>
                        <Label>Genres: </Label>
                        {genres?.map((genre, index) => (
                            <span key={index}>{genre}</span>
                        ))}
                    </DetailInfo>
                    <DetailInfo>
                        <Label>Rating: </Label>
                        ⭐ {rating} / 10 ({votes} votes)
                    </DetailInfo>
                </DetailContainer>
            </Details>
            <MovieDescription>{description}</MovieDescription>
        </StyledMovieDetailsTile>
    );
}
