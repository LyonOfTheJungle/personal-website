import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Container, Tooltip, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { StBarbaraLogo } from "../st-barbara-logo";
import { GenesisMineralsLogo } from "../genesis-minerals-logo";
import { WestgoldLogo } from "../westgold-logo";
import { UWALogo } from "../uwa-logo";
import { Subtitle } from "./subtitles";

interface Experience {
    startDate: Date;
    endDate: Date;
    description: string;
    icon: string;
}

export const HomeTimeline: FC = () => {

    const theme = useTheme();

    const monthDiff = (d1: Date, d2: Date) => {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    const currentMonths = monthDiff(new Date('06-01-2023'), new Date());
    const currentYears = Math.floor(currentMonths / 12);

    return (
        <Box
        id='timeline'
        sx={{
            py: '80px'
        }}>
            <Container
            maxWidth='lg'>
                <Box
                maxWidth='lg'>
                    <Subtitle
                    number='03'
                    title='Experience'/>
                    <Timeline>

                        <TimelineItem>
                            <TimelineContent
                            sx={{
                                //px: 10
                            }}>
                                <Typography
                                variant='h4'
                                align='center'
                                sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' } }}>
                                    Work Experience
                                </Typography>
                            </TimelineContent>
                            <TimelineOppositeContent
                            sx={{
                                //px: 10
                            }}>
                                <Typography
                                variant='h4'
                                align='center'
                                sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' } }}>
                                    Education
                                </Typography>
                            </TimelineOppositeContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'
                                color='neutral.400'>
                                    2017 - 2019
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <Tooltip title='University of Western Australia' placement='top'>
                                    <TimelineDot
                                    color='primary'
                                    variant='outlined'
                                    sx={{
                                        borderColor: 'primary.main',
                                        backgroundColor: 'background.default',
                                        boxShadow: `0 0 0 4px ${theme.palette.primary.alpha12}`
                                    }}>
                                        <UWALogo color={theme.palette.primary.main}/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector sx={{ backgroundColor: 'primary.alpha30' }}/>
                            </TimelineSeparator>
                            <TimelineContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'>
                                    Bachelors Degree - Engineering Science
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'
                                color='neutral.400'>
                                    2020 - 2021
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <Tooltip title='University of Western Australia' placement='top'>
                                    <TimelineDot
                                    color='primary'
                                    variant='outlined'
                                    sx={{
                                        borderColor: 'primary.main',
                                        backgroundColor: 'background.default',
                                        boxShadow: `0 0 0 4px ${theme.palette.primary.alpha12}`
                                    }}>
                                        <UWALogo color={theme.palette.primary.main}/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector sx={{ backgroundColor: 'primary.alpha30' }}/>
                            </TimelineSeparator>
                            <TimelineContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'>
                                    Masters of Professional Engineering - Mining Engineering
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'>
                                    Graduate Mining Engineer - Fortnum
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <Tooltip title='Westgold Resources' placement='top'>
                                    <TimelineDot
                                    color='primary'
                                    variant='outlined'
                                    sx={{
                                        borderColor: 'primary.main',
                                        backgroundColor: 'background.default',
                                        boxShadow: `0 0 0 4px ${theme.palette.primary.alpha12}`
                                    }}>
                                        <WestgoldLogo color1={theme.palette.primary.main} color2={theme.palette.primary.light}/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector sx={{ backgroundColor: 'primary.alpha30' }}/>
                            </TimelineSeparator>
                            <TimelineContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'
                                color='neutral.400'>
                                    Jan 2022 - Sep 2022 (9 months)
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'>
                                    Graduate Mining Engineer - Gwalia
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <Tooltip title='St Barbara Limited' placement='top'>
                                    <TimelineDot
                                    color='primary'
                                    variant='outlined'
                                    sx={{
                                        borderColor: 'primary.main',
                                        backgroundColor: 'background.default',
                                        boxShadow: `0 0 0 4px ${theme.palette.primary.alpha12}`
                                    }}>
                                        <StBarbaraLogo color={theme.palette.primary.main}/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector sx={{ backgroundColor: 'primary.alpha30' }}/>
                            </TimelineSeparator>
                            <TimelineContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'
                                color='neutral.400'>
                                    Sep 2022 - Jun 2023 (10 months)
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'>
                                    Planning Engineer - Gwalia
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <Tooltip title='Genesis Minerals' placement='top'>
                                    <TimelineDot
                                    color='primary'
                                    variant='outlined'
                                    sx={{
                                        borderColor: 'primary.main',
                                        backgroundColor: 'background.default',
                                        boxShadow: `0 0 0 4px ${theme.palette.primary.alpha12}`
                                    }}>
                                        <GenesisMineralsLogo color1={theme.palette.primary.main} color2={theme.palette.primary.light}/>
                                    </TimelineDot>
                                </Tooltip>
                            </TimelineSeparator>
                            <TimelineContent
                            sx={{
                                py: '16px',
                                px: 2
                            }}>
                                <Typography
                                variant='subtitle1'
                                color='neutral.400'>
                                    July 2023 - Current ({currentYears}+ years)
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
};