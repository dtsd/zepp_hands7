import { COLORS, FONT, FONT_ROTATED, SCREEN } from '../utils/constants';

export const BACKGROUND_IMAGE_PROPS = {
  x: 0,
  y: 0,
  src: 'background.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const OUTER_IMAGE_PROPS = {
  x: 0,
  y: 0,
  src: 'time/outer.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const INNER_IMAGE_PROPS = {
  x: 0,
  y: 0,
  w: SCREEN.width,
  h: SCREEN.height,
  center_x: SCREEN.centerX,
  center_y: SCREEN.centerY,
  src: 'time/inner.png',
  angle: 0,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const SUN_ARC_PROPS = {
  center_x: SCREEN.centerX,
  center_y: SCREEN.centerY,
  radius: SCREEN.width / 4,
  start_angle: 0,
  end_angle: 360,
  color: COLORS.sun,
  line_width: SCREEN.width / 2,
  level: 100,
  corner_flag: 3,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const SLEEP_ARC_PROPS = {
  center_x: SCREEN.centerX,
  center_y: SCREEN.centerY,
  radius: (px(410) - px(10)) / 2,
  start_angle: 0,
  end_angle: 0,
  color: COLORS.sleep,
  line_width: px(10),
  level: 100,
  corner_flag: 3,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const HOUR_TEXT_PROPS = {
  x: px(180),
  y: px(446),
  w: px(50),
  h: px(30),
  color: COLORS.time,
  text_size: px(26),
  align_h: hmUI.align.RIGHT,
  align_v: hmUI.align.CENTER_V,
  font: FONT,
  text: '00',
  char_space: px(5),
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const MINUTE_TEXT_PROPS = {
  ...HOUR_TEXT_PROPS,
  x: px(250),
  align_h: hmUI.align.LEFT,
};

export const OUTER_TEXT_PROPS = {
  x: px(15),
  y: px(15),
  w: SCREEN.width - px(30),
  h: SCREEN.height - px(30),
  text_size: px(32),
  color: 0xa89e00,
  text: '',
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
  char_space: px(1),
  line_space: 0,
  start_angle: -135,
  end_angle: -45,
  font: FONT,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const OUTER_TEXT_ROTATED_PROPS = {
	... OUTER_TEXT_PROPS,
	font: FONT_ROTATED
};


export const HOUR_POINTER_PROPS = {
  hour_centerX: SCREEN.centerX,
  hour_centerY: SCREEN.centerY,
  hour_posX: px(20),
  hour_posY: px(240),
  hour_path: 'time/h.png',

  show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD,
};

export const MINUTE_POINTER_PROPS = {
  minute_centerX: SCREEN.centerX,
  minute_centerY: SCREEN.centerY,
  minute_posX: px(20),
  minute_posY: px(240),
  minute_path: 'time/m.png',

  minute_cover_path: 'time/mc.png',
  minute_cover_x: SCREEN.centerX - px(20),
  minute_cover_y: SCREEN.centerY - px(20),

  show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD,
};

export const SECOND_POINTER_PROPS = {
  second_centerX: SCREEN.centerX,
  second_centerY: SCREEN.centerY,
  second_posX: px(20),
  second_posY: px(240),
  second_path: 'time/s.png',

  second_cover_path: 'time/sc.png',
  second_cover_x: SCREEN.centerX - px(20),
  second_cover_y: SCREEN.centerY - px(20),

  show_level: hmUI.show_level.ONLY_NORMAL,
};
