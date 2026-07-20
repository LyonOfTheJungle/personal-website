import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Subtitle } from "./subtitles";
import { bandCardSx } from "../card-styles";
import { ContourBackdrop } from "../contour-backdrop";

export const HomeContact: FC = () => {
    return (
        <Box
        id='contact'
        sx={{
            py: '60px'
        }}>
            <Container
            maxWidth='lg'>
                <Box
                sx={[
                    bandCardSx,
                    {
                        position: 'relative',
                        px: { xs: 3, md: 8 },
                        py: { xs: 6, md: 8 }
                    }
                ]}>
                    <ContourBackdrop sx={{ bottom: -200, left: -220 }}/>
                    <Stack
                    spacing={2}
                    alignItems='center'
                    sx={{ position: 'relative', zIndex: 1 }}>

                        <Subtitle
                        number='05'
                        title='Get In Touch'
                        align='center'
                        sx={{ mb: 0 }}/>

                        <Typography
                        align='center'
                        color='neutral.400'
                        variant='subtitle1'>
                            Feel free to reach out anytime for new opportunities or just to say hello.
                            <br/>
                            I&apos;ll do my best to respond to your questions or messages promptly!
                        </Typography>
                    </Stack>
                    <Stack
                    alignItems='center'
                    justifyContent='center'
                    sx={{ mt: 4 }}>
                        <Button
                        component='a'
                        href='mailto:lyon.momple@sarastar.com.au'
                        target='_blank'
                        variant='contained'
                        color='primary'
                        size='large'
                        sx={{ px: 5 }}>
                            Say Hello
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
};
