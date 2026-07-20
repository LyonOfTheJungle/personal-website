import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { Subtitle } from "./subtitles";
import { bandCardSx } from "../card-styles";

interface Discipline {
    title: string;
    description: string;
    keywords: string;
}

const disciplines: Discipline[] = [
    {
        title: 'Mine Planning',
        description: "Long- and short-term planning for one of Australia's deepest underground gold mines — scheduling, design, and pulling the engineering disciplines together so the mine plan actually holds.",
        keywords: 'Deswik.CAD · Scheduling · Underground Planning'
    },
    {
        title: 'Drill & Blast',
        description: "Two years of production drill and blast on Gwalia's long-hole rigs — ring design, charge plans, and the daily problem-solving that keeps stoping on plan.",
        keywords: 'Ring Design · Long-Hole Stoping'
    },
    {
        title: 'Ventilation & Backfill',
        description: "A year running two of the mine's most safety-critical systems — modelling airflow and planning fill sequences so both stay ahead of the mining front.",
        keywords: 'Ventilation Modelling · Fill Scheduling'
    },
    {
        title: 'Software Development',
        description: "The other half of my brain: C++ and C# tooling that removes manual work — custom Deswik modules, process maps, and web portals for mining clients, plus Sarastar, a multithreaded CAD package I'm building from scratch.",
        keywords: 'C++ · C# · TypeScript · Deswik API'
    }
];

export const HomeWhatIDo: FC = () => {
    return (
        <Box
        id='what-i-do'
        sx={{ py: '60px' }}>
            <Container maxWidth='lg'>
                <Box
                sx={[
                    bandCardSx,
                    {
                        px: { xs: 3, sm: 5, md: 6 },
                        py: { xs: 4, sm: 5, md: 6 }
                    }
                ]}>
                    <Subtitle
                    number='02'
                    title='What I Do'/>
                    <Box
                    sx={{
                        display: 'grid',
                        columnGap: 6,
                        rowGap: 4,
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }
                    }}>
                        {disciplines.map((discipline, index) => (
                            <Box
                            key={discipline.title}
                            sx={{
                                position: 'relative',
                                borderTop: '1px solid',
                                borderColor: 'divider',
                                pt: 3
                            }}>
                                <Typography
                                aria-hidden='true'
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 0,
                                    fontFamily: '\'Fraunces Variable\', Georgia, serif',
                                    fontSize: '4.5rem',
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    color: 'rgba(230, 180, 80, 0.10)',
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                }}>
                                    {String(index + 1).padStart(2, '0')}
                                </Typography>
                                <Typography
                                variant='h5'
                                sx={{ mb: 1.5 }}>
                                    {discipline.title}
                                </Typography>
                                <Typography
                                variant='body2'
                                color='neutral.400'
                                sx={{ mb: 2 }}>
                                    {discipline.description}
                                </Typography>
                                <Typography
                                variant='caption'
                                color='primary.main'
                                sx={{ fontFamily: '\'Cascadia Mono\', monospace', letterSpacing: '0.05em' }}>
                                    {discipline.keywords}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
