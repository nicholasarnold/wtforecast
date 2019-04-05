import React from 'react';

const insults = {
  sunnyDay: [
    `It's a beautiful day, just like King Joeffrey's wedding day.`,
    `Hope you get sunburned.`,
    `It's a great day to stare at the sun.`
    ],
  cloudyDay: [
    `You could be having a better day.`,
    `See that cloud? It looks like a cloud.`,
    `Cloudy with a chance of depression.`,
    ],
  rainyDay: [
    `It's raining because God is crying. God is crying because of something you did.`,
    ],
  heavyRainDay: [
    `Hope you have flood insurance.`,
    ],
  stormyDay: [
    `Great, the gods are angry.`,
    ],
  snowyDay: [
    `Mother Nature's dandriff is getting everywhere.`,
    `You could be snuggled up warm near a fire. But you're probably not.`,
    `I'm freezing my privates off.`,
    ],
  foggyDay: [
    `If you squint, you can pretend you're in a cloud.`,
    ]
}

const getRandomInsult = insultArray => {
  return insultArray[Math.floor(Math.random() * insultArray.length)];
}

// returns insult based on weather type
export const getWeatherInsult = iconCode => {  
  switch (iconCode) {
    case '01d':
      return getRandomInsult(insults.sunnyDay);
    case '02d':
    case '03d':
    case '04d':
      return getRandomInsult(insults.cloudyDay);
    case '09d':
      return getRandomInsult(insults.heavyRainDay);
    case '10d':
      return getRandomInsult(insults.rainyDay);
    case '11d':
      return getRandomInsult(insults.stormyDay);
    case '13d':
      return getRandomInsult(insults.snowyDay);
    case '50d':
      return getRandomInsult(insults.foggyDay);
    case '01n':
      return <i className="fas fa-moon"></i>;
    case '02n':
      return <i className="fas fa-cloud-moon"></i>;
    case '03n':
      return <i className="fas fa-cloud-moon"></i>;
    case '04n':
      return <i className="fas fa-cloud"></i>;
    case '09n':
      return <i className="fas fa-cloud-showers-heavy"></i>;
    case '10n':
      return <i className="fas fa-cloud-moon-rain"></i>;
    case '11n':
      return <i className="fas fa-bolt"></i>;
    case '13n':
      return <i className="far fa-snowflake"></i>;
    case '50n':
      return <i className="fas fa-smog"></i>;
    default:
      return '';
  }
}