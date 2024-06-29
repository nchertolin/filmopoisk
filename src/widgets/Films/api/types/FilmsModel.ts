import { IFilmShort } from '@/entities/Film';

export interface FilmsModel {
    readonly search_result: IFilmShort[];
    readonly total_pages: number;
}
