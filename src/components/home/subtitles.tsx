import { Stack, SvgIcon, Typography } from "@mui/material";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa6";

interface SubtitleProps {
    number: string;
    title: string;
};

export const Subtitle: FC<SubtitleProps> = (props) => {
    const { number, title } = props;

    return (
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
            sx={{ mb: 2 }}>
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
};