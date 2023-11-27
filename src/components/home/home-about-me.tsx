import {
  Box,
  Link,
  Container,
  Typography,
  Grid,
  useTheme,
  SvgIcon,
  Stack,
} from "@mui/material";
import { FC } from "react";
import NextLink from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { Subtitle } from "./subtitles";

export const HomeAboutMe: FC = () => {
    const theme = useTheme();

    const image = 'assets/mid-shot.jpg';

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
                Hello! My name is Lyon Momple, a Drill and Blast Engineer who
                thrives on blending engineering expertise with a love for
                coding. By day, I am a Drill and Blast engineer working at
                the&nbsp;
                <Link
                  component={NextLink}
                  underline="hover"
                  variant="subtitle1"
                  href="https://en.wikipedia.org/wiki/Gwalia_Gold_Mine"
                >
                  Gwalia Deeps
                </Link>
                &nbsp;mine site in Leonora. During my breaks, I delve into
                developing Deswik Modules, aiming to enhance productivity.
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
                I am also currently developing an alternative to Deswik. Which
                resembles CAD, but with a focus on high multi-threading and
                robust design capabilities. This tool incorporates a potent
                node-graph based automation system for end-users, drawing
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
            ml={5}
            sx={{
                '& img': {
                    width: '100%'
                },
                borderRadius: 2.5,
                color: 'neutral.400',
                p: 3,
                backgroundColor: 'primary.alpha12',
                boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`
            }}
            >
                <img src={image}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
