import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { FC } from "react";

interface SubtitleProps {
    number: string;
    title: string;
    align?: 'left' | 'center';
    sx?: SxProps<Theme>;
};

export const Subtitle: FC<SubtitleProps> = (props) => {
    const { number, title, align = 'left', sx } = props;

    return (
        <Box
        sx={[
            {
                mb: 5,
                textAlign: align
            },
            ...(Array.isArray(sx) ? sx : [sx])
        ]}>
            <Typography
            variant='overline'
            component='p'
            color='primary.main'>
                {number}
            </Typography>
            <Typography
            variant='h3'
            sx={{ mt: 0.5 }}>
                {title}
            </Typography>
            <Box
            sx={{
                height: 2,
                width: 48,
                mt: 2,
                mx: align === 'center' ? 'auto' : 0,
                backgroundColor: 'primary.main',
                borderRadius: 1
            }}/>
        </Box>
    );
};
