export interface IFilm {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly genre: string;
    readonly actors: string[];
    readonly rating: number;
    readonly total_rates_count: number;
    readonly release_year: number;
    readonly poster: string;
}
