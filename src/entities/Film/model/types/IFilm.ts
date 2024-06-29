import { IActor } from '@/entities/Actor';

export interface IFilm {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly genre: string;
    readonly rating: string;
    readonly release_year: number;
    readonly poster: string;
    readonly actors: IActor[];
    // readonly total_rates_count: number;
}

export type IFilmShort = Omit<IFilm, 'actors'>;
