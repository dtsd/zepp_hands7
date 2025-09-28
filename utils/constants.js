const { width, height } = hmSetting.getDeviceInfo();

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

const lang = DeviceRuntimeCore.HmUtils.getLanguage();

const isRusLang = ['ru-RU', 'uk-UA'].includes(lang);
const isCnLang  = ['zh-CN', 'zh-Hans', 'zh-Hant'].includes(lang);
const isDeLang  = ['de-DE'].includes(lang);
const isEsLang  = ['es-ES', 'es-MX', 'es-419'].includes(lang);

// --- Weekdays ---
const WEEKDAYS_EN = ['MO','TU','WE','TH','FR','SA','SU'];
const WEEKDAYS_RU = ['ПН','ВТ','СР','ЧТ','ПТ','СУ','ВС'];
const WEEKDAYS_CN = ['一','二','三','四','五','六','日'];
const WEEKDAYS_DE = ['MO','DI','MI','DO','FR','SA','SO'];
const WEEKDAYS_ES = ['LU','MA','MI','JU','VI','SA','DO'];


// --- Months ---
const MONTHS_EN = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const MONTHS_RU = ['ЯНВ','ФЕВ','МАР','АПР','МАЙ','ИЮН','ИЮЛ','АВГ','СЕН','ОКТ','НОЯ','ДЕК'];
const MONTHS_CN = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const MONTHS_DE = ['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'];
const MONTHS_ES = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];


// --- Weather ---
const WEATHER_EN = ['CLOUDY','SHOWER','SNOW','SUNNY','OVRCST',
  'L-RAIN','L-SNOW','RAIN','SNOW','H-SNOW',
  'H-RAIN','SAND','SLEET','FOG','HAZE',
  'T-SHWR','T-SNOW','DUST','X-RAIN','HAIL',
  'T-HAIL','X-RAIN','SAND','T-SAND','T-RAIN',
  'RAIN','CLOUDY','SHOWER','CLEAR'
];

const WEATHER_RU = ['ОБЛН','ЛИВН','СНЕГ','СОЛН','ПАСМ',
  'М-ДОЖ','М-СНЕ','ДОЖД','СНЕГ','С-СНЕ',
  'С-ДОЖ','ПЕСОК','СЛЕТ','ТУМА','ДЫМКА',
  'Г-ГРМ','МЕТЕ','ПЫЛЬ','ЛИВН+','ГРАД',
  'ГРМ+Г','ЛИВН+','ПЕСОК','С-БУР','ЛИВН',
  '??','ОБЛН','ЛИВН','ЯСНО'
];

const WEATHER_CN = ['多云','阵雨','雪','晴','阴',
  '小雨','小雪','雨','雪','大雪',
  '大雨','沙尘','雨夹雪','雾','霾',
  '雷阵雨','暴雪','扬尘','暴雨','冰雹',
  '雷雨雹','特大雨','浮尘','强沙尘','雨暴',
  '未知','多云','阵雨','晴'
];

const WEATHER_DE = ['WOLK','SCHAU','SCHNE','SONNE','BEWT',
  'L-REG','L-SCH','REGEN','SCHNE','S-SCH',
  'S-REG','SAND','GRAUP','NEBL','DUNST',
  'GEWIT','SCHST','STAUB','EXT-REG','HAGEL',
  'G-HAG','S-REG','SAND','ST-SND','REGST',
  'UNKWN','WOLK','SCHAU','KLAR'
];

const WEATHER_ES = ['NUBL','CHUB','NIEVE','SOL','CUBI',    // Cubierto
  'L-LLV','L-NIV','LLUV','NIV','F-NIV', // Fuerte nieve
  'F-LLV','ARENA','AGUAH','NIEB','CALI',
  'TORM','NEVAS','POLVO','LLUV+','GRAN',
  'T-GRN','LLUV+','ARENA','T-ARE','T-LLV',
  'DESC','NUBL','CHUB','DESP'           // Despejado
];


// --- Labels ---
const LABELS_EN = ['PWR', 'STP', 'HR'];
const LABELS_RU = ['БАТ', 'ШАГ', 'ЧСС'];
const LABELS_CN = ['电量', '步数', '心率'];
const LABELS_DE = ['AKK', 'SCH', 'CHS'];
const LABELS_ES = ['BAT', 'PAS', 'FC']; // FC = Frecuencia cardíaca


// --- Sun state ---
const SUNSTATES_EN = ['SPACE','NGHT','DAY'];
const SUNSTATES_RU = ['КОСМ','НОЧЬ','ДЕНЬ'];
const SUNSTATES_CN = ['太空','夜','日'];
const SUNSTATES_DE = ['ALL','NCHT','TAG'];
const SUNSTATES_ES = ['ESP','NCHE','DIA'];


// Single-character time labels: [hours, minutes]
const TIME_LABELS_EN = ['H', 'M'];
const TIME_LABELS_RU = ['Ч', 'М'];   // Часы, Минуты
const TIME_LABELS_CN = ['时', '分'];  // 小时, 分钟
const TIME_LABELS_DE = ['H', 'M'];   // Stunde → H, Minute → M
const TIME_LABELS_ES = ['H', 'M'];   // Hora → H, Minuto → M

export const WEEKDAYS = isRusLang
  ? WEEKDAYS_RU
  : isCnLang
    ? WEEKDAYS_EN
    : isDeLang
      ? WEEKDAYS_EN
      : isEsLang
        ? WEEKDAYS_ES
        : WEEKDAYS_EN;
export const MONTHS = isRusLang
  ? MONTHS_RU
  : isCnLang
    ? MONTHS_EN
    : isDeLang
      ? MONTHS_DE
      : isEsLang
        ? MONTHS_ES
        : MONTHS_EN;
export const WEATHER_NAMES = isRusLang
  ? WEATHER_RU
  : isCnLang
    ? WEATHER_EN
    : isDeLang
      ? WEATHER_DE
      : isEsLang
        ? WEATHER_ES
        : WEATHER_EN;
export const LABELS = isRusLang
  ? LABELS_RU
  : isCnLang
    ? LABELS_EN
    : isDeLang
      ? LABELS_DE
      : isEsLang
        ? LABELS_ES
        : LABELS_EN;
export const SUNSTATES = isRusLang
  ? SUNSTATES_RU
  : isCnLang
    ? SUNSTATES_EN
    : isDeLang
      ? SUNSTATES_DE
      : isEsLang
        ? SUNSTATES_ES
        : SUNSTATES_EN;

export const TIME_LABELS = isRusLang
  ? TIME_LABELS_RU
  : isCnLang
    ? TIME_LABELS_EN
    : isDeLang
      ? TIME_LABELS_DE
      : isEsLang
        ? TIME_LABELS_ES
        : TIME_LABELS_EN;

