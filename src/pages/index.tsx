import { Footer } from "@/components/footer";
import { HomeAboutMe } from "@/components/home/home-about-me";
import { HomeContact } from "@/components/home/home-contact";
import { HomeFaqs } from "@/components/home/home-faqs";
import { HomeProjects } from "@/components/home/home-projects";
import { HomeTimeline } from "@/components/home/home-timeline";
import { HomeTitle } from "@/components/home/home-title";
import { Navbar } from "@/components/navbar";
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
                <HomeTimeline/>
                <HomeProjects/>
                <HomeFaqs/>
                <HomeContact/>
                <Footer/>
            </main>
        </>
    )
};

export default Page;