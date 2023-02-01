import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/Experience";
import Projects from "../components/Projects";
import { GetStaticProps, NextPage } from "next";
import { type } from "os";
import { Experience, PageInfo, Project } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProject } from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo[];
  experience: Experience[];
  projects: Project[];
};

const Home = ({ pageInfo, experience, projects }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{"Grant's Portfolio"}</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  //const experience: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProject();

  return {
    props: {
      pageInfo,
      //experience,
      projects,
    },
    revalidate: 10,
  };
};
