import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";



export const HomeProjects: FC = () => {

    return (
        <Container
        maxWidth='lg'
        sx={{ mt: 20, mb: 10 }}>
            <Box
            maxWidth='sm'>
                <Typography
                variant="subtitle1"
                color="primary.main"
                sx={{ mb: 2 }}>
                03.&nbsp;
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="span"
                >
                  Projects
                </Typography>
              </Typography>
                
            </Box>

        </Container>
    );
};