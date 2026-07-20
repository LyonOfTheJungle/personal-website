import { Box, Container, Drawer, IconButton, Stack, SvgIcon, useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";
import { useState, type FC, ReactNode, useCallback } from "react";
import { alpha } from "@mui/material";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./navbar-item";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import { FaBars } from "react-icons/fa6";

interface Item {
    disabled?: boolean;
    children?: ReactNode;
    path?: string;
    title: string;
    number: string;
}

const items: Item[] = [
    {
        title: 'About Me',
        path: '/#about-me',
        number: '01',
    },
    {
        title: 'What I Do',
        path: '/#what-i-do',
        number: '02',
    },
    {
        title: 'Experience',
        path: '/#timeline',
        number: '03',
    },
    {
        title: 'Projects',
        path: '/#projects',
        number: '04',
    },
    {
        title: 'Contact',
        path: '/#contact',
        number: '05',
    }
];

const NAVBAR_HEIGHT: number = 64;

export const Navbar: FC = () => {
    const pathname = usePathname();
    const [elevate, setElevate] = useState<boolean>(false);
    const offset = 64;
    const delay = 50;

    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const [scrolledPercentage, setScrolledPercentage] = useState<number>(0.0);

    const handleWindowScroll = useCallback(
        (): void => {
            var height = document.body.scrollHeight - document.documentElement.clientHeight;
            setScrolledPercentage(window.scrollY / height * 100);

          if (window.scrollY > offset) {
            setElevate(true);
          } else {
            setElevate(false);
          }
        },
        []
      );

    useWindowScroll({
        handler: handleWindowScroll,
        delay
    });

    const renderItems = (onNavigate?: () => void) => items.map((item) => {
        const checkPath = !!(item.path && pathname);
        const partialMatch = checkPath ? pathname.includes(item.path!) : false;
        const exactMatch = checkPath ? pathname === item.path : false;
        const active = item.children ? partialMatch : exactMatch;

        return (
            <NavbarItem
            active={active}
            key={item.title}
            path={item.path}
            title={item.title}
            number={item.number}
            onClick={onNavigate}
            >
                {item.children}
            </NavbarItem>
        );
    });

    if (mdDown) {
        return (
            <Box
            component='header'
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                p: 2,
                zIndex: (theme) => theme.zIndex.appBar
            }}>
                <IconButton
                aria-label='Open navigation menu'
                onClick={() => setDrawerOpen(true)}
                sx={{
                    color: 'primary.main',
                    backdropFilter: 'blur(6px)',
                    backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2.5
                }}>
                    <SvgIcon>
                        <FaBars/>
                    </SvgIcon>
                </IconButton>
                <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: 'background.paper',
                        width: 260
                    }
                }}>
                    <Stack
                    component='ul'
                    spacing={1}
                    sx={{
                        listStyle: 'none',
                        m: 0,
                        p: 2,
                        pt: 4
                    }}>
                        {renderItems(() => setDrawerOpen(false))}
                    </Stack>
                </Drawer>
            </Box>
        );
    }

    return (
        <Box
            component='header'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                left: 0,
                position: 'fixed',
                right: 0,
                top: 0,
                pt: 2,
                zIndex: (theme) => theme.zIndex.appBar
            }}>
                <Box
                sx={{
                    maxWidth: 'fit-content',
                    flexDirection: 'row',
                    backdropFilter: 'blur(6px)',
                    backgroundColor: 'transparent',
                    borderRadius: 2.5,
                    boxShadow: 'none',
                    border: '1px solid transparent',
                    transition: (theme) => theme.transitions.create('box-shadow, background-color, border-color', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: 200
                    }),
                    ...(elevate && {
                        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
                        borderColor: 'divider',
                        boxShadow: 8
                    })
                }}
                >
                    <Container>
                        <Box
                        sx={{
                            height: 4,
                            background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                            width: (scrolledPercentage + '%'),
                            borderRadius: 2.5
                        }}/>
                    </Container>
                    <Stack
                    direction='row'
                    spacing={2}
                    sx={{
                        height: NAVBAR_HEIGHT
                    }}>
                        <Stack
                        direction='row'
                        spacing={2}>
                            <Box
                            component='nav'
                            sx={{ height: '100%', display:'flex' }}>
                                <Stack
                                component='ul'
                                direction='row'
                                spacing={1}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    listStyle: 'none',
                                    m: 0,
                                    p: 0
                                }}>
                                    {renderItems()}
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
    );
};
