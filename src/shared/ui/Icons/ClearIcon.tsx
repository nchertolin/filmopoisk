/* eslint-disable max-len */

import { SVGProps } from 'react';

export const ClearIcon = (props: SVGProps<unknown>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="#999FA6"
            fillRule="evenodd"
            d="M8 15.167A7.173 7.173 0 0 1 .833 8 7.173 7.173 0 0 1 8 .833 7.173 7.173 0 0 1 15.167 8 7.173 7.173 0 0 1 8 15.167ZM8 1.833A6.174 6.174 0 0 0 1.833 8c0 3.4 2.767 6.167 6.167 6.167S14.167 11.4 14.167 8 11.4 1.833 8 1.833Zm-1.887 8.554a.495.495 0 0 1-.353-.147.503.503 0 0 1 0-.707L7.293 8 5.76 6.467a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0L8 7.293 9.533 5.76a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707L8.707 8l1.533 1.533a.503.503 0 0 1 0 .707.495.495 0 0 1-.707 0L8 8.707 6.467 10.24a.484.484 0 0 1-.354.147Z"
            clipRule="evenodd"
        />
    </svg>
);
