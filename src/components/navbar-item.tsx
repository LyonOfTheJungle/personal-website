import { Box, ButtonBase } from "@mui/material";
import { type FC, type ReactNode } from "react";
import NextLink from 'next/link';
import { Subtitle } from "./home/subtitles";

interface NavbarItemProps {
    active?: boolean;
    children?: ReactNode;
    path?: string;
    title: string;
    number: string;
    onClick?: () => void;
}

export const NavbarItem: FC<NavbarItemProps> = (props) => {
    const { active, path, title, number, onClick } = props;

    let linkProps: any = undefined;

    if (path) {
        const isExternal = path.startsWith('http');

        linkProps = isExternal ? {
            component: 'a',
            href: path,
            target: '_blank',
            scroll: false
        } : {
            component: NextLink,
            href: path
        };
    }


    return (
        <Box
        alignSelf='center'
        component='li'
        sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%'
        }}
        >
            <ButtonBase
            disableRipple
            onClick={onClick}
            sx={{
                alignItems: 'center',
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                px: '16px',
                py: '8px',
                textAlign: 'left',
                '&:hover' : {
                    backgroundColor: 'action.hover'
                },
                ...(active && {
                    color: 'primary.main'
                })
            }}
            {...linkProps}>
                <Subtitle
                number={number}
                title={title}
                underline={false}/>
            </ButtonBase>
        </Box>
    );
};
