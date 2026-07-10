import { Box, Container, Typography, Link } from "@mui/material";
import { FC } from "react";
import NextLink from 'next/link';


export const HomeTitle: FC = () => {
    return (
        <Box
        sx={{
            backgroundImage: `linear-gradient(rgba(230, 180, 80, 0.035) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(230, 180, 80, 0.035) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 30% 40%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 30% 40%, black 40%, transparent 100%)'
        }}>
            <Container
            maxWidth='lg'
            sx={{ pt: 20, pb: 10 }}>
                <Box
                maxWidth='sm'>
                    <Typography
                    variant='subtitle1'
                    color='primary.main'
                    sx={{ mb: 2 }}>
                        Hi, my name is
                    </Typography>
                    <Typography
                    variant='h1'
                    sx={{
                        mb: 2,
                        background: 'linear-gradient(120deg, #F3DFA6 0%, #E6B450 45%, #B8862B 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                    }}>
                        Lyon Momple
                    </Typography>
                    <Typography
                    variant='subtitle1'>
                    I am a&nbsp;
                    <Typography
                    component='span'
                    color='primary.main'
                    variant='inherit'>
                        Planning Engineer&nbsp;
                    </Typography>
                     passionate about the mining industry and the technology shaping its future.
                     My current area of focus is developing&nbsp;
                    <Link
                    component={NextLink}
                    underline="hover"
                    color='primary.main'
                    variant="subtitle1"
                    href="https://www.deswik.com/software/">
                      Deswik Modules
                    </Link>
                    &nbsp;tailored to clients&apos; workflows that dramatically increase their productivity.
                    </Typography>

                </Box>

            </Container>
        </Box>
    );
};
