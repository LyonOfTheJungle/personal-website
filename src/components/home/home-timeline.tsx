import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Container, SvgIcon, Tooltip, Typography } from "@mui/material";
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

    const monthDiff = (d1: Date, d2: Date) => {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    const currentMonths = monthDiff(new Date('06-01-2023'), new Date());

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
                    number='02'
                    title='Experience'/>
                    <Timeline>

                        <TimelineItem>
                            <TimelineContent
                            sx={{
                                //px: 10
                            }}>
                                <Typography
                                variant='h4'
                                align='center'>
                                    Work Experience
                                </Typography>
                            </TimelineContent>
                            <TimelineOppositeContent
                            sx={{
                                //px: 10
                            }}>
                                <Typography
                                variant='h4'
                                align='center'>
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
                                    <TimelineDot color='primary' variant='outlined'>
                                        <UWALogo color='#16B364'/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector/>
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
                                    <TimelineDot color='primary' variant='outlined'>
                                        <UWALogo color='#16B364'/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector/>
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
                                    <TimelineDot color='primary' variant='outlined'>
                                        <WestgoldLogo color1='#16B364' color2='#78e3ae'/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector/>
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
                                    <TimelineDot color='primary' variant='outlined'>
                                        <StBarbaraLogo color='#16B364'/>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector/>
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
                                    Mining Engineer - Gwalia
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <Tooltip title='Genesis Minerals' placement='top'>
                                    <TimelineDot color='primary' variant='outlined'>
                                        <GenesisMineralsLogo color1='#16B364' color2='#78e3ae'/>
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
                                    July 2023 - Current ({currentMonths} months)
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
};