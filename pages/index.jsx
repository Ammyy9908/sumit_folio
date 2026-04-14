import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useWork from "../hooks/useWork";

import { AiFillGithub } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { clarity } from "react-microsoft-clarity";
import React from "react";
import { Toaster } from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Image from "next/image";

function SkillCard({ image, heading, subheading }) {
  return (
    <Card className="h-full p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10">
          <Image src={image} alt="" width={32} height={32} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-black dark:text-white">
            {heading}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">
            {subheading}
          </p>
        </div>
      </div>
    </Card>
  );
}

function WorkCard({ image, title, description, repo_uri }) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative h-52 w-full overflow-hidden sm:h-60">
        {image ? (
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10" />
        )}
        <a
          href={repo_uri}
          target="_blank"
          rel="noreferrer"
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white backdrop-blur transition hover:bg-black"
          aria-label="View repository"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">
          {description}
        </p>
        <div className="mt-4">
          <a
            href={repo_uri}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
          >
            View repo <BsArrowUpRight />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  const works = useWork();

  React.useEffect(() => {
    clarity.init("ftyp3rae24");
  }, []);
  return (
    <div id="top" className="relative min-h-screen">
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

      <main>
        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-emerald-200/70 terminal-glow">
                  whoami
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-50 terminal-glow sm:text-5xl">
                  Backend Engineer. Linux enjoyer. Builder.
                </h1>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-emerald-200/70">
                  I design pragmatic backend systems, ship clean APIs, and keep things
                  maintainable. Think: reliability first, noise last.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="#work">See work</Button>
                  <Button variant="ghost" href="#contact">
                    Contact
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/ammyy9908"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/15"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linktr.ee/sumitkumarbig"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/15"
                    aria-label="Linktree"
                  >
                    <SiLinktree />
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-6 rounded-full bg-emerald-400/10 blur-2xl" />
                  <Image
                    src="https://avatars.githubusercontent.com/u/30069626?v=4"
                    alt="Sumit Kumar"
                    width={288}
                    height={288}
                    className="relative h-56 w-56 rounded-full border border-emerald-300/20 object-cover shadow-[0_0_0_1px_rgba(34,197,94,0.10)_inset,0_40px_80px_rgba(0,0,0,0.45)] sm:h-72 sm:w-72"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title="A modular, maintainable approach"
          subtitle="I like building systems that are easy to evolve: reusable components, consistent layout primitives, and clear information architecture."
          className="bg-black/[0.02] dark:bg-white/[0.03]"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <p className="text-sm font-semibold text-black dark:text-white">
                Principles
              </p>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                Reusable blocks, predictable spacing, and clear hierarchy.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-black dark:text-white">
                Focus
              </p>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                Backend APIs, performance, and developer experience.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-black dark:text-white">
                Collaboration
              </p>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                Shipping with speed while staying readable and testable.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="What I do"
          subtitle="A compact set of capabilities, presented as modular cards."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              image="/assets/product_design.png"
              heading="Product thinking"
              subheading="Pragmatic trade-offs, clear requirements, and an eye for usability."
            />
            <SkillCard
              image="/assets/art_direction.png"
              heading="System design"
              subheading="APIs, data modeling, and maintainable service boundaries."
            />
            <SkillCard
              image="/assets/visual_design.png"
              heading="Engineering craft"
              subheading="Readable code, performance-minded choices, and good tooling."
            />
          </div>
        </Section>

        <Section
          id="work"
          eyebrow="Work"
          title="Latest work"
          subtitle="Projects pulled from your Firestore `works` collection."
          className="bg-black/[0.02] dark:bg-white/[0.03]"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.length === 0 ? (
              <Card className="md:col-span-2 lg:col-span-3">
                <p className="text-sm font-semibold text-black dark:text-white">
                  No projects found yet
                </p>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                  Add documents to the Firestore collection <code>works</code> with{" "}
                  <code>title</code>, <code>description</code>, <code>thumb</code>,
                  and <code>repo_uri</code>.
                </p>
              </Card>
            ) : (
              works.map((work, index) => (
                <WorkCard
                  key={work.repo_uri ?? index}
                  image={work.thumb}
                  title={work.title}
                  description={work.description}
                  repo_uri={work.repo_uri}
                />
              ))
            )}
          </div>
        </Section>

        <Toaster position="top-center" reverseOrder={false} />
      </main>

      <Footer />
    </div>
  );
}
