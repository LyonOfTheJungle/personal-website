import { Footer } from "@/components/footer";
import { HomeAboutMe } from "@/components/home/home-about-me";
import { HomeContact } from "@/components/home/home-contact";
import { HomeProjects } from "@/components/home/home-projects";
import { HomeSkills } from "@/components/home/home-skills";
import { HomeTimeline } from "@/components/home/home-timeline";
import { HomeTitle } from "@/components/home/home-title";
import { Navbar } from "@/components/navbar";
import { SectionDivider } from "@/components/section-divider";
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
                <Navbar/>
                <HomeTitle/>
                <HomeAboutMe/>
                <HomeSkills/>
                <SectionDivider variant='strata'/>
                <HomeTimeline/>
                <HomeProjects/>
                <SectionDivider variant='drill'/>
                <HomeContact/>
                <Footer/>
            </main>
        </>
    )
};

export default Page;
