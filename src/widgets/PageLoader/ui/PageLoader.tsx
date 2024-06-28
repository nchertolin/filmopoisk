import { Box } from '@mui/system';
import styles from './PageLoader.module.css';

export const PageLoader = () => (
    <Box className={styles.loaderContainer}>
        <Box className={styles.loader} />
    </Box>
);
