import { CARD_GAP, CARD_WIDTH } from '../../model/const/const';

interface Info {
    readonly currentIndex: number;
    readonly itemsPerSlide: number;
    readonly length: number;
}

export const calculateTranslate = (info: Info, containerWidth: number): number => {
    const { currentIndex, itemsPerSlide, length } = info;

    let translate = currentIndex * (CARD_WIDTH + CARD_GAP);

    if (itemsPerSlide + currentIndex >= length - 1) {
        translate -= containerWidth - itemsPerSlide * (CARD_WIDTH + CARD_GAP) + CARD_GAP;
    }

    return translate;
};
