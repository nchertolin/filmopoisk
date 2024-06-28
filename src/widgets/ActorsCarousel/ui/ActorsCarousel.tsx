import { IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Actor, IActor } from '@/entities/Actor';
import styles from './ActorsSwiper.module.css';
import { calculateTranslate } from '@/widgets/ActorsCarousel/lib/helpers/calculateTranslate.ts';
import { PrevIcon } from '@/shared/ui/Icons/PrevIcon.tsx';
import { NextIcon } from '@/shared/ui/Icons/NextIcon.tsx';

interface CarouselProps {
    readonly items: IActor[];
}

const CARD_WIDTH = 160;
const CARD_GAP = 24;

export const ActorsCarousel = (props: CarouselProps) => {
    const { items } = props;
    const containerRef = useRef<HTMLDivElement>(null as never);
    const [itemsPerSlide, setItemsPerSlide] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = itemsPerSlide + currentIndex > items.length - 1;

    const handlePrev = () => {
        if (!isPrevDisabled) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (!isNextDisabled) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const updateItemsPerSlide = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const newItemsPerSlide = Math.floor(containerWidth / (CARD_WIDTH + CARD_GAP));
            setItemsPerSlide(newItemsPerSlide);
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        const observer = new ResizeObserver(updateItemsPerSlide);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        updateItemsPerSlide();
    }, [containerRef]);

    const translate = useMemo(
        () =>
            calculateTranslate(
                { currentIndex, itemsPerSlide, length: items.length },
                { cardWidth: CARD_WIDTH, gap: CARD_GAP },
                containerRef.current?.offsetWidth ?? 0,
            ),
        [currentIndex, items.length, itemsPerSlide],
    );

    return (
        <Stack spacing={3}>
            <Typography variant="h3">Актеры</Typography>
            <Box className={styles.swiper}>
                {!isPrevDisabled && (
                    <IconButton className={styles.prev} onClick={handlePrev}>
                        <PrevIcon />
                    </IconButton>
                )}
                {!isNextDisabled && (
                    <IconButton className={styles.next} onClick={handleNext}>
                        <NextIcon />
                    </IconButton>
                )}
                <Stack
                    ref={containerRef}
                    direction="row"
                    spacing={3}
                    className={styles.swiperContent}
                    sx={{ transform: `translateX(-${translate}px)` }}
                >
                    {items.map((item) => (
                        <Actor key={item.id} actor={item} />
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};
