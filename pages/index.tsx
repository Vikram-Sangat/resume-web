import { get } from "lodash-es";
import type { NextPage } from "next";
import Head from "next/head";
import App from "../app";
import { Resume } from "../constants/resume";
import { URL } from "../constants/variables";
import { getStrapiMedia } from "../lib/media";

type Props = Record<string, any>;
const Home: NextPage<Props> = ({ global }) => {
  const profile = get(global, "profile", {});
  const title = get(global, "title", "") || "";
  const profileImage = getStrapiMedia(profile);
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={Resume.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={Resume.description} />
        <meta property="og:image" content={profileImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={Resume.description} />
        <meta property="twitter:image" content={profileImage} />
      </Head>

      <main>
        <App />
      </main>
    </div>
  );
};

export default Home;
