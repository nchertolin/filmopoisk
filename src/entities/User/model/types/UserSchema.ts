import { Status } from '@/shared/api';

export interface UserSchema {
    userStatus: Status;
    userError?: string;
}
