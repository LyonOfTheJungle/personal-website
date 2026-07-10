import { Box, Container } from '@mui/material';
import { FC } from 'react';

interface SectionDividerProps {
    variant?: 'strata' | 'drill';
}

export const SectionDivider: FC<SectionDividerProps> = ({ variant = 'strata' }) => {
    if (variant === 'drill') {
        return (
            <Container maxWidth='lg'>
                <Box
                sx={{
                    height: '6px',
                    backgroundImage: (theme) => `radial-gradient(circle, ${theme.palette.primary.alpha30} 1.5px, transparent 1.6px)`,
                    backgroundSize: '20px 6px',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'center'
                }}/>
            </Container>
        );
    }

    return (
        <Container maxWidth='lg'>
            <Box
            sx={{
                height: '2px',
                width: '100%',
                backgroundColor: 'primary.alpha30'
            }}/>
            <Box
            sx={{
                height: '1.5px',
                width: '70%',
                mt: '6px',
                backgroundColor: 'primary.alpha12'
            }}/>
            <Box
            sx={{
                height: '1px',
                width: '40%',
                mt: '6px',
                backgroundColor: 'primary.alpha8'
            }}/>
        </Container>
    );
};
