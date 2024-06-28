interface Info {
    readonly currentIndex: number;
    readonly itemsPerSlide: number;
    readonly length: number;
}

interface Sizes {
    readonly cardWidth: number;
    readonly gap: number;
}

export const calculateTranslate = (info: Info, sizes: Sizes, containerWidth: number): number => {
    const { currentIndex, itemsPerSlide, length } = info;
    const { cardWidth, gap } = sizes;

    let translate = currentIndex * (cardWidth + gap);

    if (itemsPerSlide + currentIndex >= length - 1) {
        translate -= containerWidth - itemsPerSlide * (cardWidth + gap) + gap;
    }

    return translate;
};
