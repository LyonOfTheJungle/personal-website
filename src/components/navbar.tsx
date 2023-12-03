import { Box, Button, Chip, Container, Stack } from "@mui/material";
import { useState, type FC, ReactNode, useCallback, useRef, useEffect } from "react";
import NextLink from 'next/link';
import { alpha } from "@mui/material";
import { paths } from "@/paths";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./navbar-item";
import { useWindowScroll } from "@/hooks/use-window-scroll";

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
        title: 'Experience',
        path: '/#timeline',
        number: '02',
    },
    {
        title: 'Projects',
        path: '/#projects',
        number: '03',
    }, 
    {
        title: 'Contact',
        path: '/#contact',
        number: '04',
    }
];

const NAVBAR_HEIGHT: number = 64;

interface NavbarProps {
    onMobileNavOpen?: () => void;
};

export const Navbar: FC<NavbarProps> = (props) => {
    const { onMobileNavOpen } = props;

    const pathname = usePathname();
    const [elevate, setElevate] = useState<boolean>(false);
    const offset = 64;
    const delay = 50;
    
    const [width, setWidth] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hideNavbar, setHideNavbar] = useState<boolean>(false);

    useEffect(() => {
        //if (ref === null || ref.current === null) return;
        const navWidth = ref.current!.clientWidth;
        const windowWidth = window.innerWidth;

        console.log(navWidth);

        if (windowWidth < navWidth) {
            console.log('hide');
            //setHideNavbar(true);
        } else {
            //setHideNavbar(false);
        }
    });

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
                {!hideNavbar &&
                <Box
                ref={ref}
                sx={{
                    maxWidth: '750px',
                    flexDirection: 'row',
                    backdropFilter: 'blur(6px)',
                    backgroundColor: 'transparent',
                    borderRadius: 2.5,
                    boxShadow: 'none',
                    transition: (theme) => theme.transitions.create('box-shadow, background-color', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: 200
                    }),
                    ...(elevate && {
                        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
                        boxShadow: 8
                    })
                }}
                >
                    <Container>
                        <Box
                        sx={{
                            height: 4,
                            background: '#04AA6D',
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
                                    {items.map((item) => {
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
                                                >
                                                    {item.children}
                                                </NavbarItem>
                                            );
                                        })}
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
}
            </Box>
    );
};