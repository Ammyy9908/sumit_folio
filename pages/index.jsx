import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useWork from "../hooks/useWork";
import styles from "../styles/Home.module.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import Image from "next/image";
import { clarity } from "react-microsoft-clarity";
import React from "react";

function SkillComponent({ image, heading, subheading }) {
  return (
    <div
      className={`${styles.skill_component} relative w-full flex flex-col items-center py-12 px-6 gap-3`}
    >
      <img src={image} alt="skill_image" />

      <div className="skill_body mt-12 w-full text-center">
        <h3 className="dark:text-white">{heading}</h3>
        <p className="dark:text-white/50 ">{subheading}</p>
      </div>
    </div>
  );
}

function WorkComponent({ image, title, description }) {
  return (
    <div
      className={`${styles.work_component} group overflow-hidden flex flex-col items-center gap-3`}
    >
      <div className="work_thumb w-full h-[300px] md:h-[350px]  overflow-hidden relative cursor-pointer rounded-md">
        <a
          href="#"
          className="w-12 h-12 bg-black absolute  z-50 text-white rounded-full flex items-center justify-center -bottom-12 group-hover:bottom-3 right-3 transition-all "
        >
          <AiFillGithub />
        </a>
        <img
          src={image}
          alt="work_image"
          className="w-full h-full  absolute inset-0 hover:scale-110 rounded-md object-cover"
        />
      </div>
      <div className="work_body w-full text-left py-3">
        <h3 className="dark:text-white text-xl">{title}</h3>
        <p className="dark:text-white/50 text-sm text-black/40">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const works = useWork();
  console.log("Works", works);

  React.useEffect(() => {
    clarity.init("ftyp3rae24");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sumit</title>
        <meta
          name="description"
          content="Sumit Bighaniya Frontend Web Develoepr based in Bangalore,India"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,Sumit Website,Netflix Web Clones,Frontend Web developer Bangalore,Web Clones ReactJS Developer Bangalore,India,Instagram Clone ReactJS,NextJs,Web developer in Bangalore,Sumit Bighaniya,Sumit MVIT Bangalore"
        />
        <meta name="author" content="Sumit Kumar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="hero-section py-16">
        <div
          className={`${styles.hero_section_wrapper} mx-auto flex flex-col md:flex-row  items-center justify-between`}
        >
          <div className="hero-section-text">
            <p
              style={{
                fontFamily: "Eblque-Semi-Bold",
                fontSize: 20,
              }}
              className="dark:text-white"
            >
              Freelancer | Web developer{" "}
            </p>
            <h1
              style={{
                fontFamily: "Eblque-Semi-Bold",
                marginTop: 46,
                fontWeight: 600,
                marginBottom: 50,
              }}
              className="dark:text-white md:w-[453px]"
            >
              Web Developer
            </h1>
            <p
              style={{
                fontFamily: "Eblque-Regular",
              }}
              className="w-full md:w-[453px] dark:text-white/90"
            >
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </p>
            <div className="my-3 flex items-center gap-3  justify-center md:justify-start">
              <a
                href="https://github.com/ammyy9908"
                target={"_blank"}
                rel="noreferrer"
                className="group w-12 h-12 bg-black dark:bg-white dark:text-black  z-50 text-white rounded-full flex items-center justify-center transition-all "
              >
                <span className="group-hover:text-2xl">
                  <AiFillGithub />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/sumitbighaniya/"
                target={"_blank"}
                rel="noreferrer"
                className="group w-12 h-12 bg-blue-700  dark:text-white  z-50 text-white rounded-full flex items-center justify-center transition-all "
              >
                <span className="group-hover:text-2xl">
                  <BsLinkedin />
                </span>
              </a>
              <a
                href="https://linktr.ee/sumitkumarbig"
                target={"_blank"}
                rel="noreferrer"
                className="group w-12 h-12 bg-green-500 dark:bg-white dark:text-black  z-50 text-white rounded-full flex items-center justify-center transition-all "
              >
                <span className="group-hover:text-2xl">
                  <SiLinktree />
                </span>
              </a>
              <a
                href="https://wa.me/917406644532?text=Hi 🥳"
                target={"_blank"}
                rel="noreferrer"
                className="group w-12 h-12 bg-green-600   z-50 text-white rounded-full flex items-center justify-center  transition-all "
              >
                <span className="group-hover:text-2xl">
                  <AiOutlineWhatsApp />
                </span>
              </a>
              <a
                href="https://instagram.com/sumitbighaniya"
                target={"_blank"}
                rel="noreferrer"
                className="group w-12 h-12 bg-red-500   z-50 text-white rounded-full flex items-center justify-center  transition-all "
              >
                <span className="group-hover:text-2xl">
                  <AiFillInstagram />
                </span>
              </a>
            </div>
          </div>
          <div className="relative hero-text-media mt-12 w-64 h-64  md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px]">
            <img
              src="https://avatars.githubusercontent.com/u/30069626?v=4"
              alt="big__image"
              className="shadow-2xl rounded-full h-full w-full border-4 border-green-500"
            />
            {/* <span className="cursor-pointer w-16 h-16  absolute top-2 right-[75px] rounded-full flex items-center justify-center shadow-2xl text-2xl">
              <img src="/smiley.gif" alt="emoji" />
            </span> */}
          </div>
        </div>
      </div>

      {/* <div className={`${styles.brands_section} py-12 mx-auto`}>
        <div className="brand_section_wrapper w-full">
          <ul className="w-full  items-center justify-between flex md:flex-row flex-col gap-12">
            <li>
              <img
                src="/assets/google.png"
                alt="google"
                className="dark:hidden"
              />
              <img
                src="/assets/dark_google.png"
                alt="google"
                className="hidden dark:block"
              />
            </li>
            <li>
              <img src="/assets/nike.png" alt="nike" className="dark:hidden" />
              <img
                src="/assets/dark_nike.png"
                alt="nike"
                className="hidden dark:block"
              />
            </li>
            <li>
              <img
                src="/assets/samsung.png"
                alt="samsung"
                className="dark:hidden"
              />
              <img
                src="/assets/dark_samsung.png"
                alt="samsung"
                className="hidden dark:block"
              />
            </li>
            <li>
              <img
                src="/assets/apple.png"
                alt="apple"
                className="dark:hidden"
              />
              <img
                src="/assets/dark_apple.png"
                alt="apple"
                className="hidden dark:block"
              />
            </li>
            <li>
              <img
                src="/assets/intercom.png"
                alt="intercom"
                className="dark:hidden"
              />
              <img
                src="/assets/dark_intercom.png"
                alt="intercom"
                className="hidden dark:block"
              />
            </li>
            <li>
              <img
                src="/assets/adidas.png"
                alt="adidas"
                className="dark:hidden"
              />
              <img
                src="/assets/dark_adidas.png"
                alt="adidas"
                className="hidden dark:block"
              />
            </li>
          </ul>
        </div>
      </div> */}

      <div className={`${styles.skill_section} py-12 mx-auto`}>
        <div className="dark:hidden skill_section_wrapper w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <SkillComponent
            image="/assets/product_design.png"
            heading="Product design"
            subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillComponent
            image="/assets/art_direction.png"
            heading="Art direction"
            subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillComponent
            image="/assets/visual_design.png"
            heading="Visual design"
            subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
        </div>
        <div className="hidden dark:grid skill_section_wrapper w-full   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <SkillComponent
            image="/assets/dark_product_design.png"
            heading="Product design"
            subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillComponent
            image="/assets/dark_art_direction.png"
            heading="Art direction"
            subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillComponent
            image="/assets/dark_visual_design.png"
            heading="Visual design"
            subheading="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
        </div>
      </div>

      <div className={`${styles.work_section} py-12 mx-auto`}>
        <div className="work_section_wrapper w-full">
          <div className="work_header text-center mb-12">
            <h3 className="text-2xl dark:text-white">Latest work</h3>
          </div>
          <div className="works w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => {
              return (
                <WorkComponent
                  key={index}
                  image={work.thumb}
                  title={work.title}
                  description={work.description}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
