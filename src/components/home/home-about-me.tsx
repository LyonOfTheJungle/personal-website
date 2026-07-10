import {
  Box,
  Link,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Subtitle } from "./subtitles";

export const HomeAboutMe: FC = () => {
  return (
    <Box
    id='about-me'
      sx={{
        backgroundColor: "neutral.800",
        py: "120px",
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container spacing={3}>
          <Grid xs={12} md={6} item={true}>
            <Box maxWidth="sm">

              <Subtitle
              number='01'
              title='About Me'/>

              <Typography color="neutral.400" variant="subtitle1">
                Hello! My name is Lyon Momple, a Planning Engineer who
                thrives on blending engineering expertise with a love for
                coding. By day, I am a Planning Engineer working at
                the&nbsp;
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href="https://en.wikipedia.org/wiki/Gwalia_Gold_Mine"
                >
                  Gwalia Deeps
                </Link>
                &nbsp;gold mine in Leonora, with experience across scheduling,
                backfill, ventilation, and drill and blast engineering. During
                my breaks, I delve into developing Deswik Modules, aiming to
                enhance productivity.
              </Typography>
              <Typography
                color="neutral.400"
                variant="subtitle1"
                sx={{ mt: 2 }}
              >
                My colleagues observed my enthusiasm and encouraged me to help
                automate tasks and improve efficiency for others. I&apos;m
                dedicated to making work more intelligent and efficient by
                combining engineering and coding.
              </Typography>
              <Typography
                color="neutral.400"
                variant="subtitle1"
                sx={{ mt: 2 }}
              >
                I am also building Sarastar, a CAD-style design tool focused on
                heavy multithreading and robust design capabilities. It features
                a potent node-graph automation system for end-users, drawing
                inspiration from the likes of&nbsp;
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href="https://www.blender.org/"
                >
                  Blender
                </Link>
                ,&nbsp;
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href="https://godotengine.org/"
                >
                  Godot
                </Link>
                , and&nbsp;
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href="https://www.unrealengine.com/en-US"
                >
                  Unreal Engine
                </Link>
                .
              </Typography>
            </Box>
          </Grid>
          <Grid
          xs={12}
          md={6}
          alignItems='center'
          item={true}>
            <Box
            sx={{
                ml: { xs: 0, md: 5 },
                mr: '12px',
                position: 'relative',
                borderRadius: 2.5,
                p: 3,
                backgroundColor: 'primary.alpha8',
                boxShadow: (theme) => `${theme.palette.primary.alpha50} 0 0 0 1px`,
                '& img': {
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'block'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    width: '100%',
                    height: '100%',
                    borderRadius: 2.5,
                    border: '1px solid',
                    borderColor: 'primary.alpha30',
                    zIndex: -1
                }
            }}
            >
                <Image
                src='/assets/mid-shot.jpg'
                alt='Lyon Momple'
                width={500}
                height={500}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
