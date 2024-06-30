import { Rating, RatingProps, Stack, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { memo } from 'react';
import { StarIcon } from '@/shared/ui/Icons/StarIcon.tsx';
import { StarFilledIcon } from '@/shared/ui/Icons/StarFilledIcon.tsx';

interface StarWithLabelProps {
    readonly filled: boolean;
    readonly hovered: boolean;
    readonly label: number;
}

interface IconContainerComponentProps {
    readonly className: string;
    readonly value: number;
}

const StyledRating = styled(Rating)<RatingProps>(({ theme }) => ({
    '&': {
        display: 'flex',
        columnGap: theme.spacing(1),
    },
}));

const StarWithLabel = (props: StarWithLabelProps) => {
    const { filled, hovered, label } = props;
    let starColor;
    let StarIconComponent;

    if (hovered) {
        starColor = 'var(--secondary-color)';
        StarIconComponent = StarFilledIcon;
    } else if (filled) {
        starColor = 'var(--primary-color)';
        StarIconComponent = StarFilledIcon;
    } else {
        starColor = 'var(--secondary-color)';
        StarIconComponent = StarIcon;
    }

    const textColor = hovered || !filled ? 'secondary' : 'var(--font-color)';

    return (
        <Stack spacing={1} alignItems="center">
            <StarIconComponent fill={starColor} />
            <Typography color={textColor}>{label}</Typography>
        </Stack>
    );
};

const IconContainerComponent = (props: IconContainerComponentProps) => {
    const { value, className } = props;

    return (
        <Box component="span">
            <StarWithLabel
                filled={className.includes('MuiRating-iconFilled')}
                hovered={className.includes('MuiRating-iconHover')}
                label={value}
            />
        </Box>
    );
};

export const BaseRating = memo((props: RatingProps) => (
    <StyledRating
        precision={1}
        IconContainerComponent={IconContainerComponent as typeof props.IconContainerComponent}
        {...props}
    />
));
