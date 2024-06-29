import { BaseButton } from '@/shared/ui';
import { useActions } from '@/app/providers/StoreProvider';

export const LogoutButton = () => {
    const { logout } = useActions();

    const handleClick = () => {
        logout();
    };

    return (
        <BaseButton type="button" variant="outlined" onClick={handleClick}>
            Выйти
        </BaseButton>
    );
};
