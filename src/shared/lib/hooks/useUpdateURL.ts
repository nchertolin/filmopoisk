import { useLocation, useNavigate } from 'react-router-dom';

interface SearchParams {
    [key: string]: string | string[];
}

export const useUpdateURL = (shouldExclude: (value: unknown) => boolean) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (newFilter: SearchParams) => {
        const params = new URLSearchParams(location.search);

        Object.keys(newFilter).forEach((key) => {
            const value = newFilter[key];

            if (shouldExclude(value)) {
                params.delete(key);
            } else if (Array.isArray(value)) {
                    params.set(key, value.join(','));
                } else {
                    params.set(key, value);
                }
        });

        navigate({ search: params.toString() });
    };
};
