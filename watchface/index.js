import { SCREEN, MONTHS, STEPS_TEXT, WEEKDAYS, WEATHER_NAMES } from '../utils/constants';
import { formatStepCount } from '../utils/formatStepCount';
import { decline } from '../utils/decline';
import {
  BACKGROUND_IMAGE_PROPS,
  HOUR_TEXT_PROPS,
  INNER_IMAGE_PROPS,
  MINUTE_TEXT_PROPS,
  OUTER_IMAGE_PROPS,
  BASE_TEXT_PROPS,
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

    this.buildMonth();
    this.buildDate();

    this.buildBattery();
    this.buildSteps();

    this.buildWeather();
    this.buildFloors();

    this.buildPointers();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
  },

  buildPointers() {
    hmUI.createWidget(hmUI.widget.TIME_POINTER, HOUR_POINTER_PROPS);
    hmUI.createWidget(hmUI.widget.TIME_POINTER, MINUTE_POINTER_PROPS);
    hmUI.createWidget(hmUI.widget.TIME_POINTER, SECOND_POINTER_PROPS);
  },

  buildBackground() {
    hmUI.createWidget(hmUI.widget.IMG, BACKGROUND_IMAGE_PROPS);
  },

  buildMonth() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
      start_angle: -60,
      end_angle: 0,
    });

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);

    const update = () => {
      const { day, week, month, year } = timeSensor;
      const monthText = `${MONTHS[month - 1]} ${year}`;
      textWidget.setProperty(hmUI.prop.TEXT, monthText);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          timeSensor.addEventListener?.(hmSensor.event.MINUTEEND, update);
          update();
        }
      },
      pause_call: () => {
        timeSensor.removeEventListener?.(hmSensor.event.MINUTEEND, update);
      },
    });
  },

  buildDate() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
  show_level: hmUI.show_level.ONLY_NORMAL,
      start_angle: 0,
      end_angle: 60,
    });

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);

    const update = () => {
      const { day, week, month } = timeSensor;
      const dateText = `${WEEKDAYS[week - 1]} ${day}`;
      textWidget.setProperty(hmUI.prop.TEXT, dateText);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          timeSensor.addEventListener?.(hmSensor.event.MINUTEEND, update);
          update();
        }
      },
      pause_call: () => {
        timeSensor.removeEventListener?.(hmSensor.event.MINUTEEND, update);
      },
    });
  },

  buildBattery() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
      ...OUTER_TEXT_PROPS,
      start_angle: 60,
      end_angle: 120,
      type: hmUI.data_type.BATTERY,
	  unit_type: 2,
    });
  },


  buildFloors() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
      ...OUTER_TEXT_PROPS,
      start_angle: 120,
      end_angle: 180,
      type: hmUI.data_type.FLOOR,
	  unit_type: 2,
    });
  },

  buildWeather() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
      ...OUTER_TEXT_PROPS,
      start_angle: -120,
      end_angle: -60,
      type: hmUI.data_type.WEATHER,
	  unit_type: 2,
    });
  },

  buildSteps() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
      ...OUTER_TEXT_PROPS,
      start_angle: -180,
      end_angle: -120,
      type: hmUI.data_type.STEP,
	  unit_type: 2,
    });
  },

});
