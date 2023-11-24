import { Box, IconButton, Stack, SvgIcon } from "@mui/material";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


export const SocialsButtons: FC = (props) => {
    return (
        <Stack
        spacing={2}
        sx={{
            bottom: 0,
            position: 'fixed',
            right: 0,
            margin: (theme) =>theme.spacing(4),
            zIndex: (theme) => theme.zIndex.speedDial
        }}>
            <Box
            {...props}
            sx={{
                backgroundColor: 'background.paper',
                borderRadius: '50%',
                boxShadow: 16
            }}>
                <IconButton color='primary' size='large'>
                    <SvgIcon>
                        <FaGithub/>
                    </SvgIcon>
                </IconButton>
            </Box>
            <Box
            {...props}
            sx={{
                backgroundColor: 'background.paper',
                borderRadius: '50%',
                boxShadow: 16
            }}>
                <IconButton
                color='primary'
                size='large' 
                target='_blank'
                href='https://www.linkedin.com/in/lyonmomple'>
                    <SvgIcon>
                        <FaLinkedin/>
                    </SvgIcon>
                </IconButton>
            </Box>
        </Stack>
    );
};