import { SCREEN, MONTHS, STEPS_TEXT, WEEKDAYS, WEATHER_NAMES } from '../utils/constants';
import { formatNumber } from '../utils/formatNumber';
import { decline } from '../utils/decline';
import {
  BACKGROUND_IMAGE_PROPS,
  HOUR_TEXT_PROPS,
  INNER_IMAGE_PROPS,
  MINUTE_TEXT_PROPS,
  OUTER_IMAGE_PROPS,
  OUTER_TEXT_PROPS,
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
    this.buildHeartRate();

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
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
      start_angle: 60,
      end_angle: 120,
    });

    const batterySensor = hmSensor.createSensor(hmSensor.id.BATTERY);

    const update = () => {
      const { current } = batterySensor;
      const text = `BAT ${current}%`;
      textWidget.setProperty(hmUI.prop.TEXT, text);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          batterySensor.addEventListener?.(hmSensor.event.CHANGE, update);
          update();
        }
      },
      pause_call: () => {
        batterySensor.removeEventListener?.(hmSensor.event.CHANGE, update);
      },
    });
  },

  buildHeartRate() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
      start_angle: 120,
      end_angle: 180,
    });

    const heartSensor = hmSensor.createSensor(hmSensor.id.HEART);

    const update = () => {
      const { last } = heartSensor;
      const text = `BPM ${last}`.toUpperCase();
      textWidget.setProperty(hmUI.prop.TEXT, text);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          heartSensor.addEventListener?.(hmSensor.event.LAST, update);
          update();
        }
      },
      pause_call: () => {
        heartSensor.removeEventListener?.(hmSensor.event.LAST, update);
      },
    });
  },

  buildWeather() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
      start_angle: -120,
      end_angle: -60,
    });

    const weatherSensor = hmSensor.createSensor(hmSensor.id.WEATHER);

    const update = () => {
      const temp = weatherSensor.current;

	const index = weatherSensor.curAirIconIndex;
	const hasName = !isNaN(index) && index !== 25;
      const text = hasName ? `${WEATHER_NAMES[index]} ${temp}\u00B0C` : `${temp}\u00B0C`;

      textWidget.setProperty(hmUI.prop.TEXT, text);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          update();
        }
      },
    });
  },

  buildSteps() {
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
      start_angle: -180,
      end_angle: -120,
    });

    const stepSensor = hmSensor.createSensor(hmSensor.id.STEP);

    const update = () => {
      const { current } = stepSensor;
      const text = `STP ${current}`.toUpperCase();

      textWidget.setProperty(hmUI.prop.TEXT, text);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          stepSensor.addEventListener(hmSensor.event.CHANGE, update);
          update();
        }
      },
      pause_call: () => {
        stepSensor.removeEventListener(hmSensor.event.CHANGE, update);
      },
    });
  },

});
