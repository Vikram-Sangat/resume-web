import {
  differenceInYears,
  format,
  isValid,
  lastDayOfMonth,
  intervalToDuration,
} from "date-fns";
const CAREER_START_DATE = new Date(2016, 6, 1);
const yearsOfExperience = () => {
  const difference = differenceInYears( new Date(), CAREER_START_DATE);
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
