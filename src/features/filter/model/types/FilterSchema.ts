import { Genre } from './Genre';

export interface FilterSchema {
    genre: Genre | '0';
    year: string;
    readonly genres: Record<Genre | '0', string>;
    readonly years: Record<string, string>;
}
