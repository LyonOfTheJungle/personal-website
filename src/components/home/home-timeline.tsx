import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";



export const HomeTimeline: FC = () => {

    return (
        <Container
        id='timeline'
        maxWidth='lg'
        sx={{ mt: 20, mb: 10 }}>
            <Box
            maxWidth='sm'>
                <Typography
                variant="subtitle1"
                color="primary.main"
                sx={{ mb: 2 }}>
                02.&nbsp;
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="span"
                >
                  Timeline
                </Typography>
              </Typography>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            Test
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            Hello
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
              

            </Box>

        </Container>
    );
};