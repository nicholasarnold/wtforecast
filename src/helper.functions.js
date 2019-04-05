const getZipcodeFromCurrentPath = () => {
  const path = window.location.pathname;
  const pathArray = path.split('/zip/');
  if (pathArray.length > 1) {
    const zipcodeFromPath = pathArray[1].split('/');
    return zipcodeFromPath[0];
  }
}

const getMonth = number => {
  switch (number) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return '';
  }
}

const formatDate = date => {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = getMonth(dateArray[1]);
  const day = Number(dateArray[2]);
  return `${month} ${day}, ${year}`;
}

const formatTime = time => {
  const timeArray = time.split(':');
  const hour = Number(timeArray[0]);
  if (hour === 0) return `12:00 AM (Midnight)`;
  if (hour <= 11) return `${hour}:00 AM`;
  if (hour === 12) return `12:00 PM (Noon)`;
  if (hour >= 13) return `${hour - 12}:00 PM`;
}

const formatDateAndTime = dt_txt => {
  const dtArray = dt_txt.split(' ');
  const date = formatDate(dtArray[0]);
  const time = formatTime(dtArray[1]);
  return `${date} at ${time}`;
}

const getFahrenheitFromKelvin = kelvinTemp => {
  return Math.round((kelvinTemp - 273.15) * 9/5 + 32);
}

const getWindDirectionFromDegree = degree => {
  if (degree > 337.5) return 'N';
  if (degree > 292.5) return 'NW';
  if (degree > 247.5) return 'W';
  if (degree > 202.5) return 'SW';
  if (degree > 157.5) return 'S';
  if (degree > 122.5) return 'SE';
  if (degree > 67.5) return 'E';
  if (degree > 22.5) return 'NE';
}

export {
  getZipcodeFromCurrentPath,
  formatDateAndTime,
  getFahrenheitFromKelvin,
  getWindDirectionFromDegree,
}