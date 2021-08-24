import { differenceInYears } from "date-fns";
import { CAREER_START_DATE } from "./variables";

const yearsOfExperience = () => {
  return differenceInYears(new Date(), CAREER_START_DATE);
};
export default yearsOfExperience;
