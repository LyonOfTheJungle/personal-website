import { Box } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

interface HeroPhotoProps {
    src: string;
    alt: string;
}

// The cutout has a transparent background, so it's laid over the blob at natural
// aspect ratio with no clip-path — the shoulders and head spill past the blob's
// edges on their own, the way a real "breaks out of frame" portrait should.
export const HeroPhoto: FC<HeroPhotoProps> = ({ src, alt }) => {
    return (
        <Box
        sx={{
            position: 'relative',
            width: { xs: 280, sm: 340, md: 400 },
            height: { xs: 350, sm: 425, md: 500 },
            mx: { xs: 'auto', md: 0 }
        }}>
            <Box
            sx={{
                position: 'absolute',
                bottom: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: 220, sm: 265, md: 310 },
                height: { xs: 220, sm: 265, md: 310 },
                background: 'linear-gradient(135deg, #F3DFA6 0%, #E6B450 50%, #B8862B 100%)',
                borderRadius: '58% 42% 38% 62% / 55% 35% 65% 45%',
                boxShadow: '0 24px 48px -16px rgba(0, 0, 0, 0.55)',
                animation: 'blobDrift 9s ease-in-out infinite',
                '@keyframes blobDrift': {
                    '0%, 100%': {
                        transform: 'translateX(-50%) translateY(0)',
                        borderRadius: '58% 42% 38% 62% / 55% 35% 65% 45%'
                    },
                    '50%': {
                        transform: 'translateX(-50%) translateY(-10px)',
                        borderRadius: '46% 54% 52% 48% / 48% 44% 56% 52%'
                    }
                },
                '@media (prefers-reduced-motion: reduce)': {
                    animation: 'none'
                }
            }}/>

            <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                height: '100%'
            }}>
                <Image
                src={src}
                alt={alt}
                fill
                priority
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}/>
            </Box>
        </Box>
    );
};
