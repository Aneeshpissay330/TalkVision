import moment from "moment";

export function formatMilliseconds(milliseconds) {
  const duration = moment.duration(milliseconds);
  const formattedTime = duration.minutes() + ':' + duration.seconds().toString().padStart(2, '0');
  return formattedTime;
}






