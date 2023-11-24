import { Box, Container, Typography, useTheme } from "@mui/material";
import { FC } from "react";


export const HomeTitle: FC = () => {
    const theme = useTheme();

    return (
        <Container
        maxWidth='lg'
        sx={{ mt: 20, mb: 10 }}>
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
                sx={{ mb: 2}}>
                    Lyon Momple
                </Typography>
                <Typography
                variant='subtitle1'>
                I am a&nbsp;
                <Typography
                component='span'
                color='primary.main'
                variant='inherit'>
                    Drill and Blast Engineer&nbsp;
                </Typography>
                 that is pasionate about the mining industry and the future technology plays in it.
                 My current area of focus is developing&nbsp;
                <Typography
                component='span'
                color='primary.main'
                variant='inherit'>
                    Deswik Modules&nbsp;
                </Typography>
                 for clients that are tailored made to their needs and vastly increases their productivity.
                </Typography>

            </Box>

        </Container>
    );
};