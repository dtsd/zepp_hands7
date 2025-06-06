export function getNextSunEvent(timeSensor, weatherSensor) {
  // Get current time
  const { hour, minute } = timeSensor;
  const currentTimeInMinutes = hour * 60 + minute;
  
  // Get forecast data with tide information
  const forecastWeather = weatherSensor.getForecastWeather();
  // Extract sunrise/sunset times from tide data
  const tideData = forecastWeather.tideData;
  const { sunrise, sunset } = tideData.data[0] || {};
  
  // Convert to minutes
  const sunriseMins = sunrise.hour * 60 + sunrise.minute;
  const sunsetMins = sunset.hour * 60 + sunset.minute;
  
  // Calculate time until next event
  let minutesUntilEvent, eventType;
  
  if (currentTimeInMinutes < sunriseMins) {
    // Next event is sunrise today
    minutesUntilEvent = sunriseMins - currentTimeInMinutes;
    eventType = 'sunrise';
  } else if (currentTimeInMinutes < sunsetMins) {
    // Next event is sunset today
    minutesUntilEvent = sunsetMins - currentTimeInMinutes;
    eventType = 'sunset';
  } else {
    // Next event is sunrise tomorrow - check if we have tomorrow's data
    if (tideData.data.length > 1) {
      const tomorrowSunrise = tideData.data[1].sunrise;
      const tomorrowSunriseMins = tomorrowSunrise.hour * 60 + tomorrowSunrise.minute;
      minutesUntilEvent = (24 * 60 - currentTimeInMinutes) + tomorrowSunriseMins;
    } else {
      // Fallback to today's sunrise time for tomorrow
      minutesUntilEvent = (24 * 60 - currentTimeInMinutes) + sunriseMins;
    }
    eventType = 'sunrise';
  }
  
  return {
    minutes: minutesUntilEvent,
    type: eventType,
  };
}

