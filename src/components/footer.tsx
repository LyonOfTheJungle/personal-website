import type { FC } from 'react';
import {
    Box, Button, ButtonBase, Container, Divider, Grid, Stack, SvgIcon, Typography
} from '@mui/material';
import { FaGithub } from 'react-icons/fa6';

export const Footer: FC = (props) => {
    const path: string = 'https://github.com/LyonOfTheJungle/personal-website';
    return (
    <Box
    id='footer'
    sx={{
        py: '30px',
        display: 'flex',
        justifyContent: 'center'
    }}>
        <ButtonBase
        disableRipple
        sx={{
            alignItems: 'center',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'flex-center',
            px: '16px',
            py: '8px',
            color: 'neutral.400',
            '&:hover' : {
                color: 'primary.main'
            }
        }}
        href={path}
        target='_blank'
        /*
        component: 'a',
        href: {path},
        target: '_blank'
         */
        >
            <Stack
            alignItems='center'>
                <Typography
                variant='subtitle1'>
                    Built by Lyon Momple
                </Typography>
                <Stack
                alignItems='center'
                direction='row'
                spacing={1}>
                    <SvgIcon>
                        <FaGithub/>
                    </SvgIcon>
                    <Typography
                    variant='subtitle1'
                    fontSize={12}>
                        Source Code - Github
                    </Typography>
                </Stack>
            </Stack>
        </ButtonBase>
    </Box>)
};