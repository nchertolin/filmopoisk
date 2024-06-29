import { Box } from '@mui/material';
import { Filter } from '@/features/filter';
import { Films } from '@/widgets/Films';
import styles from './Home.module.css';

export const Home = () => (
        <Box className={styles.container}>
            <Filter />
            <Films />
        </Box>
    );
