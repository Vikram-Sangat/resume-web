import { get } from "lodash-es";
import type { NextPage } from "next";
import Head from "next/head";
import App from "../app";
import { Resume } from "../constants/resume";
import { KEYMAPPING, URL } from "../constants/variables";
import { fetchAPI,fetchAPILocal } from "../lib/api";
import { GlobalContext } from "../constants/context";
import { getStrapiMedia } from "../lib/media";

type Props = Record<string, any>;
const Home: NextPage<Props> = ({ global = {}, ...others }) => {
  const profile = get(global, "profile.profile_image", {});
  const title = get(global, KEYMAPPING.title, "") || "";
  const name = get(global, KEYMAPPING.name, "") || "";
  const description = get(global, KEYMAPPING.description, "") || "";
  const profileImage = getStrapiMedia(profile);
  const finalTittle = `${name} - ${title}`;
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>{finalTittle}</title>
        <meta name="title" content={finalTittle} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={finalTittle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={profileImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={finalTittle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={profileImage} />
      </Head>

      <main>
        <GlobalContext.Provider value={global}>
          <App />
        </GlobalContext.Provider>
      </main>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  const global = await fetchAPILocal();
  return {
    props: {
      global:JSON.parse(global) ,
    }, // will be passed to the page component as props
  };
}
