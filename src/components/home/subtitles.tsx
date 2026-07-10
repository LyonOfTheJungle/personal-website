import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa6";

interface SubtitleProps {
    number: string;
    title: string;
    underline?: boolean;
};

export const Subtitle: FC<SubtitleProps> = (props) => {
    const { number, title, underline = true } = props;

    const heading = (
        <Stack
        alignItems='center'
        direction='row'
        spacing={0.1}>
            <SvgIcon sx={{ fontSize: 18, color: 'primary.main' }}>
                <FaChevronRight/>
            </SvgIcon>
            <Typography
            variant="subtitle1"
            color="primary.main"
            sx={{ whiteSpace: 'nowrap' }}>
                {number}.&nbsp;
                <Typography
                color="text.primary"
                variant="subtitle1"
                component="span">
                    {title}
                </Typography>
            </Typography>
        </Stack>
    );

    if (!underline) {
        return heading;
    }

    return (
        <Box sx={{ mb: 3 }}>
            {heading}
            <Box
            sx={{
                height: 2,
                width: 48,
                mt: 1,
                ml: '22px',
                backgroundColor: 'primary.main',
                borderRadius: 1
            }}/>
        </Box>
    );
};
