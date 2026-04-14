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
    <div className="terminal-panel shine-hover group rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-emerald-50 terminal-glow">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-emerald-200/70">
            {description}
          </p>
        </div>
        <a
          href={repo_uri}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-100 transition hover:bg-emerald-400/15"
          aria-label="View repository"
        >
          <AiFillGithub />
        </a>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-emerald-200/60">
          <span className="h-2 w-2 rounded-full bg-emerald-300/80 shadow-[0_0_14px_rgba(34,197,94,0.35)]" />
          <span className="truncate">{image ? "thumb: set" : "thumb: none"}</span>
        </div>
        <a
          href={repo_uri}
          target="_blank"
          rel="noreferrer"
          className="terminal-link inline-flex items-center gap-2 text-sm font-semibold"
        >
          View repo <BsArrowUpRight />
        </a>
      </div>
    </div>
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
                  Backend Engineer (Go • Kubernetes • Distributed Systems)
                </h1>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-emerald-200/70">
                  3+ years building and operating microservices on Kubernetes—shipping
                  reliable APIs, improving performance, and running production systems
                  with 99.9% uptime.
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
          title="Core skills"
          subtitle="Golang backend engineering, Kubernetes operations, and performance tuning."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              image="/assets/product_design.png"
              heading="Infrastructure & Orchestration"
              subheading="Kubernetes, Docker, AWS (EKS/EC2/SNS/SQS), Helm, Terraform, Ansible."
            />
            <SkillCard
              image="/assets/art_direction.png"
              heading="Distributed systems (Golang)"
              subheading="Microservices, async messaging (SNS/SQS/RabbitMQ), caching (Redis), observability and incident response."
            />
            <SkillCard
              image="/assets/visual_design.png"
              heading="CI/CD & Security"
              subheading="GitOps (ArgoCD), Bitbucket/GitLab CI/Jenkins, dependency scanning (BlackDuck), secrets management."
            />
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="Tech stack"
          title="Tools I ship with"
          subtitle="A quick snapshot of the technologies I use day-to-day."
          className="bg-black/[0.02] dark:bg-white/[0.03]"
        >
          <Card className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {[
                "Golang",
                "Gin",
                "Kubernetes",
                "Docker",
                "AWS (EKS/EC2/S3/IAM)",
                "ArgoCD (GitOps)",
                "Terraform",
                "Helm",
                "Redis",
                "RabbitMQ",
                "Postgres",
                "MongoDB",
                "SNS/SQS",
                "Jenkins / GitLab CI / Bitbucket",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
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

        <Section
          id="freelance"
          eyebrow="Freelancing"
          title="Have an idea? Let’s ship it."
          subtitle="If you’re building a product or need backend help, send a quick request — I’ll reply with a plan and timeline."
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="space-y-3 text-sm text-emerald-200/70">
                <p className="text-emerald-50 terminal-glow">
                  What you can request:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Backend APIs & microservices (Golang)</li>
                  <li>Kubernetes / EKS deployments + GitOps</li>
                  <li>Performance & reliability improvements</li>
                  <li>Async pipelines (SQS/SNS/RabbitMQ) + Redis caching</li>
                </ul>
              </div>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-emerald-50 terminal-glow">
                Quick start
              </p>
              <p className="mt-2 text-sm text-emerald-200/70">
                Share scope + timeline + budget range.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button href="#contact">Request freelance work</Button>
                <Button variant="ghost" href="#work">
                  Review projects
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        <Toaster position="top-center" reverseOrder={false} />
      </main>

      <Footer />
    </div>
  );
}
