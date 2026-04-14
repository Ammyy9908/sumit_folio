import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function NotFound() {
  return (
    <div id="top" className="relative z-10 min-h-screen">
      <Head>
        <title>404 — Not found</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main className="py-16 sm:py-24">
        <Container>
          <Card className="mx-auto max-w-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-emerald-200/70 terminal-glow">
              bash
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-emerald-50 terminal-glow sm:text-3xl">
              404: command not found
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200/70">
              The path you requested doesn’t exist on this host. If you think this is a
              broken link, it may have been moved or renamed.
            </p>

            <div className="mt-6 rounded-xl border border-emerald-300/15 bg-black/40 p-4 text-sm text-emerald-100/90">
              <pre className="whitespace-pre-wrap">
{`$ cd /requested-path
bash: cd: /requested-path: No such file or directory`}
              </pre>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" passHref legacyBehavior>
                <Button>Go home</Button>
              </Link>
              <Button variant="ghost" href="#top">
                Back to top
              </Button>
            </div>
          </Card>
        </Container>
      </main>
    </div>
  );
}

export default NotFound;
