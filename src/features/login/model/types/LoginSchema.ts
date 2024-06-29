import { Status } from '@/shared/api';
import { AppError } from '@/shared/lib/types/appError.ts';
import { LoginRequest } from '@/entities/User';

export interface LoginSchema {
    username: string;
    password: string;
    status: Status;
    error?: AppError<LoginRequest>;
}
