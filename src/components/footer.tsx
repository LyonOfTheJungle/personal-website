import type { FC } from 'react';
import {
    Box, ButtonBase, Stack, SvgIcon, Typography
} from '@mui/material';
import { FaGithub } from 'react-icons/fa6';
import { SectionDivider } from './section-divider';

export const Footer: FC = () => {
    const path: string = 'https://github.com/LyonOfTheJungle/personal-website';
    return (
    <Box id='footer'>
        <SectionDivider variant='drill'/>
        <Box
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
            target='_blank'>
                <Stack
                alignItems='center'>
                    <Typography
                    variant='subtitle1'>
                        Built by Lyon Momple
                    </Typography>
                    <Typography
                    variant='subtitle1'
                    fontSize={12}
                    sx={{ color: 'neutral.500' }}>
                        Planning Engineer · Leonora, WA
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
        </Box>
    </Box>)
};