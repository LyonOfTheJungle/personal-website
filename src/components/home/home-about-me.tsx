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
import { bandCardSx } from "../card-styles";

export const HomeAboutMe: FC = () => {
  return (
    <Box
    id='about-me'
      sx={{
        py: "60px",
      }}
    >
      <Container maxWidth="lg">
        <Box
        sx={[
            bandCardSx,
            {
                px: { xs: 3, sm: 5, md: 6 },
                py: { xs: 4, sm: 5, md: 6 }
            }
        ]}>
        <Grid alignItems="center" container spacing={3}>
          <Grid xs={12} md={6} item={true}>
            <Box maxWidth="sm">

              <Subtitle
              number='01'
              title='About Me'/>

              <Typography color="neutral.400" variant="subtitle1">
                Hello! My name is Lyon Momple, a Planning Engineer who
                thrives on blending engineering expertise with a love for
                coding. I work at the&nbsp;
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href="https://en.wikipedia.org/wiki/Gwalia_Gold_Mine"
                >
                  Gwalia Deeps
                </Link>
                &nbsp;gold mine in Leonora, where I&apos;ve worked my way
                through the underground planning disciplines &mdash; around two
                years of drill and blast engineering on the long-hole rigs,
                then ventilation and backfill, before stepping into my current
                planning role. During my breaks, I delve into developing Deswik
                Modules, aiming to enhance productivity.
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
                I am also building Sarastar, a CAD-style design tool written in
                C++, focused on heavy multithreading and robust design
                capabilities. It features
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
              <Typography
                color="neutral.400"
                variant="subtitle1"
                sx={{ mt: 2 }}
              >
                Outside of my day-to-day role, I volunteer on site with our
                Emergency Response Team (ERT), training and competing in
                emergency response challenges alongside my colleagues &mdash;
                a hands-on reminder that safety and teamwork underpin
                everything we do on site.
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
                position: 'relative',
                ml: { xs: 0, md: 5 },
                pb: '52%',
                '& img': {
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }
            }}
            >
                <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '80%',
                    transform: 'rotate(-2deg)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 24px 40px -18px rgba(8, 10, 14, 0.6)'
                }}>
                    <Image
                    src='/assets/Longhole.png'
                    alt='Lyon Momple on-site at a drill rig'
                    width={1448}
                    height={1086}/>
                </Box>
                <Box
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '38%',
                    right: 0,
                    width: '58%',
                    transform: 'rotate(2.5deg)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 24px 40px -18px rgba(8, 10, 14, 0.6)'
                }}>
                    <Image
                    src='/assets/ert-action-photo.jpg'
                    alt='Lyon Momple competing in an Emergency Response Team challenge'
                    width={1600}
                    height={1066}/>
                </Box>
                <Box
                sx={{
                    position: 'absolute',
                    zIndex: 3,
                    top: '68%',
                    left: '6%',
                    width: '46%',
                    transform: 'rotate(-1.5deg)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 24px 40px -18px rgba(8, 10, 14, 0.6)'
                }}>
                    <Image
                    src='/assets/ert-team-photo.jpg'
                    alt='Lyon Momple with the Genesis Minerals Emergency Response Team'
                    width={1600}
                    height={1066}/>
                </Box>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};
