import { toIn, toPt } from "../utils/style";

export const PROFILE = "/profile.jpeg";
export const TITLE = "Vikram Sangat - Full stack developer";
export const URL = "https://vikram-resume.vercel.app/";
export const SERVER_URL = "https://vikram-resume-26.herokuapp.com";
export const GRAVATAR =
  "https://www.gravatar.com/avatar/7384e1fc27b2c82cc01ab728f681f326?s=500";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/vikram-sangat-4414854a/";
export const BITBUCKET_URL = "https://bitbucket.org/vikram-sangat/";
export const GITHUB_URL = "https://github.com/Vikram-Sangat";
export const CAREER_START_DATE = new Date(2016, 6, 1);
export const PRIMARY_COLOR = "#35baf6";
export const PRIMARY_COLOR_LIGHT = "#b3e5fc";
export const PRIMARY_COLOR_DARK = "#03a9f4";
export const PRIMARY_COLOR_DARKER = "#0276aa";
export const PRIMARY_FONT = "Lato";
export const PAGE_WIDTH = toIn(8.3 / 8);
export const PAGE_HEIGHT = toIn(11.7 / 8);
export const PAGE_PADDING_PT = toPt(3);
export const PAGE_FONT_SIZE = toPt(1);
export enum KEYMAPPING {
  name = "profile.name",
  title = "profile.title",
  description = "profile.description",
  favicon = "profile.favicon.url",
}
