import { differenceInYears, format, isValid, lastDayOfMonth } from "date-fns";
import { CAREER_START_DATE } from "./variables";

const yearsOfExperience = () => {
  return differenceInYears(new Date(), CAREER_START_DATE);
};
export const calculateDuration = (data: any) => {
  const { duration, isCurrent = false } = data;
  const lastDay = lastDayOfMonth(duration[1]);

  let dateFormat = format(duration[0], "MMMM yyyy");
  if (!isCurrent && isValid(lastDay)) {
    dateFormat += ` - ${format(lastDay, "MMMM yyyy")}`;
  }
  if (isCurrent) {
    dateFormat += " - present";
  }

  return dateFormat;
};
export default yearsOfExperience;
