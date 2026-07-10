import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Subtitle } from "./subtitles";

export const HomeContact: FC = () => {
    return (
        <Box
        id='contact'
        sx={{
            //backgroundColor: 'neutral.800',
            backgroundRepeat: 'no-repeat',
            color: 'neutral.100',
            py: '60px'
        }}>
            <Container
            maxWidth='lg'>
                <Stack
                spacing={2}
                alignItems='center'>
                    
                    <Subtitle
                    number='05'
                    title="Contact"/>

                    <Typography
                    align='center'
                    color='inherit'
                    variant='h3'>
                        Get In Touch
                    </Typography>
                    <Typography
                    align='center'
                    color='inherit'
                    variant='subtitle1'>
                        Feel free to reach out anytime for new opportunities or just to say hello. 
                        <br/>
                        I&apos;ll do my best to respond to your questions or messages promptly!
                    </Typography>
                </Stack>
                <Stack
                alignItems='center'
                direction='row'
                justifyContent='center'
                spacing={2}
                sx={{ mt: 3 }}>
                    <Button
                    component='a'
                    href='mailto:lyon.momple@sarastar.com.au'
                    target='_blank'
                    variant='outlined'
                    sx={{
                        borderColor: 'primary.main',
                        px: 4,
                        '&:hover': {
                            backgroundColor: 'primary.alpha8',
                            boxShadow: '0 0 20px rgba(230, 180, 80, 0.2)'
                        }
                    }}>
                        Say Hello
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
};