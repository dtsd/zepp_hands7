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
  widget: 0xccc000,
};

/*
export const FONT = 'fonts/NotoSansMono-Condensed.ttf';
export const FONT_ROTATED = 'fonts/NotoSansMono-Condensed_rotated.ttf';
export const FONT = 'fonts/Zepp-OS-Number-Condensed.ttf';
export const FONT_ROTATED = 'fonts/Zepp-OS-Number-Condensed_rotated.ttf';
*/
export const FONT = 'fonts/RobotoCondensed-Medium.ttf';
export const FONT_ROTATED = 'fonts/RobotoCondensed-Medium_rotated.ttf';

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
  'ПНД',
  'ВТР',
  'СРД',
  'ЧТВ',
  'ПТН',
  'СУБ',
  'ВСК',
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
  'SUNNY',     // SUNNY.PNG (changed from "SUN" for clarity)
  'OVRCST',    // OVERCAST.PNG ("OVERCAST" → "OVRCST")
  'L-RAIN',   // LIGHT_RAIN.PNG ("LT RAIN" → "LT RAIN" for consistency)
  'L-SNOW',   // LIGHT_SNOW.PNG (no change)
  'RAIN',      // MODERATE_RAIN.PNG (no change)
  'SNOW',      // MODERATE_SNOW.PNG (no change)
  'H-SNOW',   // HEAVY_SNOW.PNG ("HVY" → "HV" to save space)
  'H-RAIN',   // HEAVY_RAIN.PNG (ditto)
  'SAND',      // SANDSTORM.PNG ("SANDSTORM" → "SAND")
  'SLEET',     // SLEET.PNG (no change)
  'FOG',       // FOG.PNG (no change)
  'HAZE',      // HAZE.PNG (no change)
  'T-SHWR',   // THUNDERSHOWER.PNG ("THUNDERSHOWER" → "T-STORM")
  'T-SNOW',    // SNOWSTORM.PNG ("SNOWSTORM" → "SNOWST")
  'DUST',      // DUST.PNG (no change)
  'X-RAIN',    // EXTRAORDINARY_RAINSTORM.PNG ("XTRA RAINSTORM" → "X-RAIN")
  'HAIL',   // RAIN_WITH_HAIL.PNG ("RAIN HAIL" → "RN HAIL")
  'T-HAIL',    // THUNDERSHOWERS_WITH_HAIL.PNG ("THUNDER HAIL" → "T-HAIL")
  'X-RAIN',   // HEAVY_RAINSTORM.PNG (matches "HV RAIN" style)
  'SAND',   // SAND_BLOWING.PNG ("SAND BLOWING" → "SAND BL")
  'T-SAND',    // STRONG_SANDSTORM.PNG ("STRONG SANDSTORM" → "SANDST")
  'T-RAIN',    // RAINSTORM.PNG ("RAINSTORM" → "RAINST")
  'RAIN',   // UNKNOWN WEATHER.PNG (no change)
  'CLOUDY',    // CLOUDY_AT_NIGHT.PNG (no change)
  'SHOWER',    // SHOWER_AT_NIGHT.PNG (no change)
  'CLEAR',     // CLEAR_NIGHT.PNG (no change)
];

