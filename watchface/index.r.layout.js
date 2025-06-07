import { COLORS, FONT, FONT_ROTATED, SCREEN } from '../utils/constants';

export const BACKGROUND_IMAGE_PROPS = {
  x: 0,
  y: 0,
  src: 'bg.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const BASE_TEXT_PROPS = {
  text_size: px(34),
  color: COLORS.widget,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
  char_space: px(1),
  line_space: 0,
  font: FONT,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const OUTER_TEXT_PROPS = {
  ... BASE_TEXT_PROPS,
  x: px(15),
  y: px(15),
  w: SCREEN.width - px(30),
  h: SCREEN.height - px(30),
  start_angle: -135,
  end_angle: -45,
};

export const OUTER_TEXT_ROTATED_PROPS = {
	... OUTER_TEXT_PROPS,
	font: FONT_ROTATED,
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
