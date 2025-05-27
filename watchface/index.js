import { SCREEN, MONTHS, STEPS_TEXT, WEEKDAYS, WEATHER_NAMES } from '../utils/constants';
import { formatStepCount } from '../utils/formatStepCount';
import { decline } from '../utils/decline';
import {
  BACKGROUND_IMAGE_PROPS,
  HOUR_TEXT_PROPS,
  INNER_IMAGE_PROPS,
  MINUTE_TEXT_PROPS,
  OUTER_IMAGE_PROPS,
  OUTER_TEXT_PROPS,
  OUTER_TEXT_ROTATED_PROPS,
  SLEEP_ARC_PROPS,
  SUN_ARC_PROPS,
  HOUR_POINTER_PROPS,
  MINUTE_POINTER_PROPS,
  SECOND_POINTER_PROPS,
} from './index.r.layout';

WatchFace({
  onInit() {
    console.log('index page.js on init invoke');
  },

  build() {
    console.log('index page.js on build invoke');

    this.buildBackground();
    this.buildEdgeWidgets();
    this.buildPointers();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
  },

  buildBackground() {
    hmUI.createWidget(hmUI.widget.IMG, BACKGROUND_IMAGE_PROPS);
  },

  buildPointers() {
    hmUI.createWidget(hmUI.widget.TIME_POINTER, HOUR_POINTER_PROPS);
    hmUI.createWidget(hmUI.widget.TIME_POINTER, MINUTE_POINTER_PROPS);
    hmUI.createWidget(hmUI.widget.TIME_POINTER, SECOND_POINTER_PROPS);
  },

  buildEdgeWidgets() {
    const widgetAngleMap = [
      { id: 11, start_angle: -60, end_angle: 0 },
      { id: 1, start_angle: 0, end_angle: 60 },
      { id: 3, start_angle: 60, end_angle: 120 },
      { id: 5, start_angle: 120, end_angle: 180 },
      { id: 7, start_angle: -180, end_angle: -120 },
      { id: 9, start_angle: -120, end_angle: -60 },
    ];

	const widgetBuilderMap = {
  	  5: (start, end) => this.buildMonth(true, start, end),
  	  7: (start, end) => this.buildDate(true, start, end),
  	  3: (start, end) => this.buildTextFontWidget(hmUI.data_type.TRAINING_LOAD, 2, start, end),
  	  9: (start, end) => this.buildTextFontWidget(hmUI.data_type.RECOVERY_TIME, 2, start, end),
  	  //3: (start, end) => this.buildTextFontWidget(hmUI.data_type.TRAINING_LOAD, 2, start, end),
  	  //9: (start, end) => this.buildTextFontWidget(hmUI.data_type.RECOVERY_TIME, 2, start, end),
  	  11: (start, end) => this.buildTextFontWidget(hmUI.data_type.STEP, 2, start, end),
  	  1: (start, end) => this.buildTextFontWidget(hmUI.data_type.FLOOR, 2, start, end),
	};


    widgetAngleMap.forEach(({ id, start_angle, end_angle }) => {
      const builder = widgetBuilderMap[id];
      builder(start_angle, end_angle);
    });
  },

  buildMonth(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      start_angle,
      end_angle,
    });

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
    const update = () => {
      const { month, year } = timeSensor;
      let text = `${MONTHS[month - 1]} ${year}`;
      if (rotated) text = text.split('').reverse().join('');
      textWidget.setProperty(hmUI.prop.TEXT, text);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() === hmSetting.screen_type.WATCHFACE) {
          timeSensor.addEventListener?.(hmSensor.event.MINUTEEND, update);
          update();
        }
      },
      pause_call: () => {
        timeSensor.removeEventListener?.(hmSensor.event.MINUTEEND, update);
      },
    });
  },

  buildDate(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      show_level: hmUI.show_level.ONLY_NORMAL,
      start_angle,
      end_angle,
    });

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
    const update = () => {
      const { day, week } = timeSensor;
      let text = `${WEEKDAYS[week - 1]} ${day}`;
      if (rotated) text = text.split('').reverse().join('');
      textWidget.setProperty(hmUI.prop.TEXT, text);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() === hmSetting.screen_type.WATCHFACE) {
          timeSensor.addEventListener?.(hmSensor.event.MINUTEEND, update);
          update();
        }
      },
      pause_call: () => {
        timeSensor.removeEventListener?.(hmSensor.event.MINUTEEND, update);
      },
    });
  },

  buildTextFontWidget(type, unit_type, start_angle, end_angle) {
    hmUI.createWidget(hmUI.widget.TEXT_FONT, {
      ...OUTER_TEXT_PROPS,
      start_angle,
      end_angle,
      type,
      unit_type,
    });
  },
});
