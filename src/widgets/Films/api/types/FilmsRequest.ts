import { Genre } from '@/features/filter';

type TSort = 'release_year' | 'title' | 'rating';
type TOrder = 'asc' | 'desc';

export type FilmsParams = Partial<{
    readonly title: string;
    readonly page: number;
    readonly genre: Genre;
    readonly sort_by: TSort;
    readonly order: TOrder;
    readonly limit: number;
    readonly release_year: number;
}>;
