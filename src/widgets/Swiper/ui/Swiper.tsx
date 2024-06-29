import { IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Actor, IActor } from '@/entities/Actor';
import styles from './Swiper.module.css';
import { calculateTranslate } from '../lib/helpers/calculateTranslate';
import { PrevIcon } from '@/shared/ui/Icons/PrevIcon.tsx';
import { NextIcon } from '@/shared/ui/Icons/NextIcon.tsx';
import { CARD_GAP, CARD_WIDTH } from '../model/const/const';

interface CarouselProps {
    readonly items: IActor[];
}

export const Swiper = (props: CarouselProps) => {
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
                // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    {items.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Actor key={`${item.name} - ${index}`} actor={item} />
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};
