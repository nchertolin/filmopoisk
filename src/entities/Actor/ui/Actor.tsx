import { Avatar, Stack, Typography } from '@mui/material';
import { IActor } from '../model/types/IActor';
import styles from './Actor.module.css';

interface ActorProps {
    readonly actor: IActor;
}

export const Actor = (props: ActorProps) => {
    const { actor } = props;
    const { name, photo } = actor;

    return (
        <Stack spacing={2}>
            <Avatar src={photo} alt={name} className={styles.photo} />
            <Typography>{name}</Typography>
        </Stack>
    );
};
