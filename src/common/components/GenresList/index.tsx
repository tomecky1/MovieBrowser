import { Genre, TagsList } from "./styled";
import { useGenresList } from "./useGenresList";
import {ReactNode} from "react";
import {errorStatus, loadingStatus} from "../../constants/resqestStatuses";

interface GenresListProps {
    genresIds: number[];
    extra?: ReactNode;
}

interface GenreProps {
    extra?: ReactNode;
    children: ReactNode;
}

interface Genre{
    id: number;
    name: string;
}

export const GenresList = ({ genresIds, extra }: GenresListProps) => {
    const { genres }: { genres: { data: Genre[]; status: string } } = useGenresList();

    if (genres.status === loadingStatus) {
        return <div>Loading genres...</div>;
    }

    if (genres.status === errorStatus) {
        return <div>Failed to load genres.</div>;
    }

    const genresFoundById = (genres.data || []).filter(genre => genresIds.includes(genre.id));

    return (
        <TagsList extra={extra}>
            {genresFoundById.map(({ id, name }) => (
                <Genre extra={extra} key={id}>
                    {name}
                </Genre>
            ))}
        </TagsList>
    );
};
