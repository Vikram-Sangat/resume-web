import {
  differenceInYears,
  format,
  isValid,
  lastDayOfMonth,
  intervalToDuration,
} from "date-fns";
import { CAREER_START_DATE } from "./variables";

const yearsOfExperience = () => {
  const difference = differenceInYears(new Date(), CAREER_START_DATE);
  const interval = intervalToDuration({
    start: CAREER_START_DATE,
    end: new Date(),
  });
  console.log(interval);
  return difference;
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
