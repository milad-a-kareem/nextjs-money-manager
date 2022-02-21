import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>about</div>;<button onClick={goHome}>Go Home</button>
    </>
  );
}

export default About;