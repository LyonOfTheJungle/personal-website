import { Box } from "@mui/material";
import { Footer } from "@/components/footer";
import { HomeAboutMe } from "@/components/home/home-about-me";
import { HomeContact } from "@/components/home/home-contact";
import { HomeProjects } from "@/components/home/home-projects";
import { HomeWhatIDo } from "@/components/home/home-what-i-do";
import { HomeTimeline } from "@/components/home/home-timeline";
import { HomeTitle } from "@/components/home/home-title";
import { Navbar } from "@/components/navbar";
import { PatternBackground } from "@/components/pattern-background";
import { Reveal } from "@/components/reveal";
import { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Lyon Momple
                </title>
            </Head>
            <main>
                <PatternBackground/>
                <Navbar/>
                <Box>
                    <HomeTitle/>
                    <Reveal>
                        <HomeAboutMe/>
                    </Reveal>
                    <Reveal>
                        <HomeWhatIDo/>
                    </Reveal>
                    <Reveal>
                        <HomeTimeline/>
                    </Reveal>
                    <Reveal>
                        <HomeProjects/>
                    </Reveal>
                    <Reveal>
                        <HomeContact/>
                    </Reveal>
                    <Footer/>
                </Box>
            </main>
        </>
    )
};

export default Page;
