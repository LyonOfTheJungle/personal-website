import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { FC } from "react";

interface ContourBackdropProps {
    sx?: SxProps<Theme>;
}

// A faint topographic contour motif — concentric irregular rings, like a
// geology map. Purely decorative; parents position it absolutely behind
// content at very low opacity.
const ring = 'M 300 80 C 420 70 520 150 530 260 C 540 370 470 470 350 500 C 230 530 110 470 80 360 C 50 250 90 130 190 95 C 225 82 260 83 300 80 Z';

const scales = [1, 0.82, 0.65, 0.48, 0.32, 0.18];

export const ContourBackdrop: FC<ContourBackdropProps> = ({ sx }) => (
    <Box
    component='svg'
    viewBox='0 0 600 600'
    aria-hidden='true'
    sx={[
        {
            position: 'absolute',
            width: 600,
            height: 600,
            color: 'rgba(230, 180, 80, 0.05)',
            pointerEvents: 'none'
        },
        ...(Array.isArray(sx) ? sx : [sx])
    ]}>
        {scales.map((scale) => (
            <path
            key={scale}
            d={ring}
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5 / scale}
            transform={`translate(300 300) scale(${scale}) translate(-300 -300)`}/>
        ))}
    </Box>
);
