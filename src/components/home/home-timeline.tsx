import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { Subtitle } from "./subtitles";
import { bandCardSx } from "../card-styles";
import { StBarbaraLogo } from "../st-barbara-logo";
import { GenesisMineralsLogo } from "../genesis-minerals-logo";
import { WestgoldLogo } from "../westgold-logo";
import { UWALogo } from "../uwa-logo";

interface ExperienceEntry {
    dates: string;
    role: string;
    organisation: string;
    description?: string;
    logo: ReactNode;
}

interface ExperienceRowProps {
    entry: ExperienceEntry;
    first: boolean;
    last: boolean;
}

// Each row hangs off a vertical "depth rail" — a quiet nod to a shaft
// depth log — with the company logo as the station marker.
const ExperienceRow: FC<ExperienceRowProps> = ({ entry, first, last }) => (
    <Box
    sx={{
        display: 'flex',
        borderRadius: 2,
        transition: 'background-color 200ms ease',
        '&:hover': {
            backgroundColor: 'rgba(230, 180, 80, 0.04)'
        }
    }}>
        <Box
        sx={{
            position: 'relative',
            width: 64,
            flexShrink: 0,
            display: { xs: 'none', sm: 'block' }
        }}>
            <Box
            sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                backgroundColor: 'primary.alpha12',
                top: first ? 46 : 0,
                bottom: last ? 'calc(100% - 46px)' : 0
            }}/>
            <Box
            sx={{
                position: 'relative',
                zIndex: 1,
                width: 44,
                height: 44,
                mt: 3,
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'primary.alpha30',
                boxShadow: '0 0 0 4px rgba(230, 180, 80, 0.08)'
            }}>
                {entry.logo}
            </Box>
        </Box>
        <Grid
        container
        sx={{
            flex: 1,
            py: 3,
            pl: { xs: 0, sm: 2 },
            pr: 2
        }}>
            <Grid
            item={true}
            xs={12}
            md={3}
            sx={{ mb: { xs: 0.5, md: 0 } }}>
                <Typography
                variant='caption'
                color='neutral.500'
                sx={{
                    fontFamily: '\'Cascadia Mono\', monospace',
                    letterSpacing: '0.05em',
                    lineHeight: '28px'
                }}>
                    {entry.dates}
                </Typography>
            </Grid>
            <Grid
            item={true}
            xs={12}
            md={9}>
                <Typography variant='h6'>
                    {entry.role}
                </Typography>
                <Typography
                variant='body2'
                color='primary.main'
                sx={{ mt: 0.25 }}>
                    {entry.organisation}
                </Typography>
                {entry.description && (
                    <Typography
                    variant='body2'
                    color='neutral.400'
                    sx={{ mt: 1, maxWidth: 620 }}>
                        {entry.description}
                    </Typography>
                )}
            </Grid>
        </Grid>
    </Box>
);

export const HomeTimeline: FC = () => {
    const theme = useTheme();

    const work: ExperienceEntry[] = [
        {
            dates: '2025 — Present',
            role: 'Planning Engineer',
            organisation: 'Genesis Minerals · Gwalia',
            description: "Long- and short-term planning for the mine — scheduling, design, and coordinating the engineering disciplines I used to work in day to day.",
            logo: <GenesisMineralsLogo color1={theme.palette.primary.main} color2={theme.palette.primary.light}/>
        },
        {
            dates: '2024 — 2025',
            role: 'Ventilation & Backfill Engineer',
            organisation: 'Genesis Minerals · Gwalia',
            description: "A year running the mine's ventilation and backfill engineering — keeping two safety-critical systems planned ahead of the mining front.",
            logo: <GenesisMineralsLogo color1={theme.palette.primary.main} color2={theme.palette.primary.light}/>
        },
        {
            dates: '2022 — 2024',
            role: 'Drill & Blast Engineer',
            organisation: 'St Barbara / Genesis Minerals · Gwalia',
            description: "Two years of production drill and blast on the long-hole rigs, growing from graduate to engineer through the St Barbara to Genesis transition — ring design, charge plans, and keeping stoping on plan.",
            logo: <StBarbaraLogo color={theme.palette.primary.main}/>
        },
        {
            dates: 'Jan — Sep 2022',
            role: 'Graduate Mining Engineer',
            organisation: 'Westgold Resources · Fortnum',
            description: "First site role — a graduate rotation across the underground engineering disciplines.",
            logo: <WestgoldLogo color1={theme.palette.primary.main} color2={theme.palette.primary.light}/>
        }
    ];

    const education: ExperienceEntry[] = [
        {
            dates: '2020 — 2021',
            role: 'Masters of Professional Engineering',
            organisation: 'Mining Engineering · University of Western Australia',
            logo: <UWALogo color={theme.palette.primary.main}/>
        },
        {
            dates: '2017 — 2019',
            role: 'Bachelors Degree',
            organisation: 'Engineering Science · University of Western Australia',
            logo: <UWALogo color={theme.palette.primary.main}/>
        }
    ];

    return (
        <Box
        id='timeline'
        sx={{
            py: '60px'
        }}>
            <Container
            maxWidth='lg'>
                <Box
                sx={[
                    bandCardSx,
                    {
                        px: { xs: 3, sm: 5, md: 6 },
                        py: { xs: 4, sm: 5, md: 6 }
                    }
                ]}>
                    <Subtitle
                    number='03'
                    title='Experience'/>
                    {work.map((entry, index) => (
                        <ExperienceRow
                        key={entry.role}
                        entry={entry}
                        first={index === 0}
                        last={index === work.length - 1}/>
                    ))}
                    <Typography
                    variant='overline'
                    component='p'
                    color='primary.main'
                    sx={{ mt: 4, mb: 1 }}>
                        Education
                    </Typography>
                    {education.map((entry, index) => (
                        <ExperienceRow
                        key={entry.role}
                        entry={entry}
                        first={index === 0}
                        last={index === education.length - 1}/>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};
