import { Pagination, PaginationItem, PaginationProps, styled } from '@mui/material';

/* eslint-disable react/jsx-props-no-spreading */

export const BasePagination = styled((props: PaginationProps) => (
    <Pagination shape="circular" renderItem={(item) => <PaginationItem {...item} />} {...props} />
))(({ theme }) => ({
    '& .MuiPaginationItem-page': {
        display: 'none',
        fontWeight: 500,
    },
    '& .MuiPaginationItem-root.Mui-selected': {
        display: 'inline-flex',
        background: theme.palette.background.default,
    },
    '& .MuiPaginationItem-ellipsis': {
        display: 'none',
    },
    '& .MuiPaginationItem-previousNext': {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: theme.palette.background.paper,
        boxShadow: '0px 0px 4px 0px #0000004D',
    },
}));
