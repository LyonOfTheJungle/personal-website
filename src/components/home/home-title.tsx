import { Box, Container, Typography, Link, Grid, Stack } from "@mui/material";
import { FC } from "react";
import NextLink from 'next/link';
import { HeroPhoto } from "./hero-photo";
import { bandCardSx } from "../card-styles";
import { ContourBackdrop } from "../contour-backdrop";

interface Stat {
    value: string;
    label: string;
}

const stats: Stat[] = [
    { value: '5+', label: 'Years Underground' },
    { value: '2.0km', label: 'Working Depth' },
    { value: '5+', label: 'Deswik Tools Shipped' }
];

export const HomeTitle: FC = () => {
    return (
        <Box
        sx={{ pt: { xs: 12, md: 16 }, pb: 6 }}>
            <Container
            maxWidth='lg'>
                <Box
                sx={[
                    bandCardSx,
                    {
                        position: 'relative',
                        px: { xs: 3, sm: 5, md: 8 },
                        pt: { xs: 5, md: 8 },
                        pb: { xs: 0, md: 0 }
                    }
                ]}>
                <ContourBackdrop sx={{ top: -160, right: -180 }}/>
                <Grid
                container
                spacing={{ xs: 6, md: 4 }}
                alignItems='flex-end'
                sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid
                    item={true}
                    xs={12}
                    md={5}
                    sx={{ order: { xs: 1, md: 2 } }}>
                        <HeroPhoto
                        src='/assets/full-body-shot-bg-removed.png'
                        alt='Lyon Momple'/>
                    </Grid>
                    <Grid
                    item={true}
                    xs={12}
                    md={7}
                    sx={{ order: { xs: 2, md: 1 }, pb: { xs: 5, md: 8 } }}>
                        <Box maxWidth='sm'>
                            <Typography
                            variant='overline'
                            component='p'
                            color='primary.main'
                            sx={{ mb: 1 }}>
                                Hi, my name is
                            </Typography>
                            <Typography
                            variant='h1'
                            sx={{ mb: 3 }}>
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
                            <Stack
                            direction='row'
                            spacing={{ xs: 4, md: 6 }}
                            sx={{ mt: 5 }}>
                                {stats.map((stat) => (
                                    <Box key={stat.label}>
                                        <Typography variant='h4'>
                                            {stat.value}
                                        </Typography>
                                        <Typography
                                        variant='caption'
                                        color='neutral.500'
                                        sx={{
                                            fontFamily: '\'Cascadia Mono\', monospace',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase'
                                        }}>
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </Box>
    );
};
