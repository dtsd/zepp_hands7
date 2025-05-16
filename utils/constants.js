const { width, height } = hmSetting.getDeviceInfo();

const lang = DeviceRuntimeCore.HmUtils.getLanguage();
const isRusLang = ['ru-RU', 'uk-UA'].includes(lang);

export const SCREEN = {
  width,
  height,
  centerX: width / 2,
  centerY: height / 2,
};

export const COLORS = {
  sun: 0x000000,
  text: 0xffffff,
  time: 0xffdc37,
  sleep: 0xceb12a,
};

export const FONT = 'fonts/RobotoCondensed-Medium.ttf';

const WEEKDAYS_EN = [
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
  'SUN',
];
const WEEKDAYS_RU = [
  'ПОНЕДЕЛЬНИК',
  'ВТОРНИК',
  'СРЕДА',
  'ЧЕТВЕРГ',
  'ПЯТНИЦА',
  'СУББОТА',
  'ВОСКРЕСЕНЬЕ',
];
export const WEEKDAYS = isRusLang ? WEEKDAYS_RU : WEEKDAYS_EN;

const MONTHS_EN = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];
const MONTHS_RU = [
  'ЯНВАРЬ',
  'ФЕВРАЛЬ',
  'МАРТ',
  'АПРЕЛЬ',
  'МАЙ',
  'ИЮНЬ',
  'ИЮЛЬ',
  'АВГУСТ',
  'СЕНТЯБРЬ',
  'ОКТЯБРЬ',
  'НОЯБРЬ',
  'ДЕКАБРЬ',
];

export const MONTHS = isRusLang ? MONTHS_RU : MONTHS_EN;

const STEPS_TEXT_RU = ['шаг', 'шага', 'шагов', 'шагов'];
const STEPS_TEXT_EN = ['step', 'steps'];
export const STEPS_TEXT = isRusLang ? STEPS_TEXT_RU : STEPS_TEXT_EN;

export const WEATHER_NAMES = [
  'CLOUDY',    // CLOUDY.PNG (no change)
  'SHOWER',    // SHOWER.PNG (no change)
  'SNOW',      // SNOW_SHOWER.PNG (no change)
  'SUN',     // SUNNY.PNG (changed from "SUN" for clarity)
  'OVRCST',    // OVERCAST.PNG ("OVERCAST" → "OVRCST")
  'LT RAIN',   // LIGHT_RAIN.PNG ("LT RAIN" → "LT RAIN" for consistency)
  'LT SNOW',   // LIGHT_SNOW.PNG (no change)
  'RAIN',      // MODERATE_RAIN.PNG (no change)
  'SNOW',      // MODERATE_SNOW.PNG (no change)
  'HV SNOW',   // HEAVY_SNOW.PNG ("HVY" → "HV" to save space)
  'HV RAIN',   // HEAVY_RAIN.PNG (ditto)
  'SAND',      // SANDSTORM.PNG ("SANDSTORM" → "SAND")
  'SLEET',     // SLEET.PNG (no change)
  'FOG',       // FOG.PNG (no change)
  'HAZE',      // HAZE.PNG (no change)
  'T-STORM',   // THUNDERSHOWER.PNG ("THUNDERSHOWER" → "T-STORM")
  'SNW-STRM',    // SNOWSTORM.PNG ("SNOWSTORM" → "SNOWST")
  'DUST',      // DUST.PNG (no change)
  'RN-STRM',    // EXTRAORDINARY_RAINSTORM.PNG ("XTRA RAINSTORM" → "X-RAIN")
  'RAIN HAIL',   // RAIN_WITH_HAIL.PNG ("RAIN HAIL" → "RN HAIL")
  'T-HAIL',    // THUNDERSHOWERS_WITH_HAIL.PNG ("THUNDER HAIL" → "T-HAIL")
  'HV RN-STRM',   // HEAVY_RAINSTORM.PNG (matches "HV RAIN" style)
  'SAND',   // SAND_BLOWING.PNG ("SAND BLOWING" → "SAND BL")
  'SND-STRM',    // STRONG_SANDSTORM.PNG ("STRONG SANDSTORM" → "SANDST")
  'RN-STRM',    // RAINSTORM.PNG ("RAINSTORM" → "RAINST")
  'UNKNOWN',   // UNKNOWN WEATHER.PNG (no change)
  'CLOUDY',    // CLOUDY_AT_NIGHT.PNG (no change)
  'SHOWER',    // SHOWER_AT_NIGHT.PNG (no change)
  'CLEAR',     // CLEAR_NIGHT.PNG (no change)
];

