import Head from "next/head";
import { GetStaticProps } from "next";

const Home = () => {
  return (
    <>
      <Head>
        <title>Hello</title>
        <link
          rel="shortcut icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/unicorn_1f984.png"
        />
      </Head>
      <div>Welcome</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
