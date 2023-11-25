import { Box, ButtonBase, Typography } from "@mui/material";
import { useState, type FC, type ReactNode, useCallback } from "react";
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Subtitle } from "./home/subtitles";

interface NavbarItemProps {
    active?: boolean;
    children?: ReactNode;
    path?: string;
    title: string;
    number: string;
}

export const NavbarItem: FC<NavbarItemProps> = (props) => {
    const { active, children, path, title, number } = props;

    const [open, setOpen] = useState<boolean>(false);

    const handleMouseEnter = useCallback(
        () => {
            setOpen(true);
        },
        []
    );

    const handleMouseLeave = useCallback(
        () => {
            setOpen(false);
        },
        []
    );

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
                title={title}/>
            </ButtonBase>
        </Box>
    );
};

NavbarItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string.isRequired
};