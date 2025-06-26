import { SCREEN, MONTHS, STEPS_TEXT, WEEKDAYS, WEATHER_NAMES } from '../utils/constants';
import { formatStepCount } from '../utils/formatStepCount';
import { formatMinutes } from '../utils/formatMinutes';
import { getNextSunEvent } from '../utils/getNextSunEvent';
import {
  BACKGROUND_IMAGE_PROPS,
  OUTER_TEXT_PROPS,
  OUTER_TEXT_ROTATED_PROPS,
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

  	  //3: (start, end) => this.buildTextFontWidget(hmUI.data_type.TRAINING_LOAD, 2, start, end),
  	  //9: (start, end) => this.buildTextFontWidget(hmUI.data_type.RECOVERY_TIME, 2, start, end),
  	  //11: (start, end) => this.buildTextFontWidget(hmUI.data_type.STEP, 2, start, end),
	  // up to 4 digits? 5 decimal places
  	  //3:  (start, end) => this.buildLabelledTextFontWidget(hmUI.data_type.TRAINING_LOAD, 'TRN', 4, start, end),
  	  //3:  (start, end) => this.buildLabelledTextFontWidget(hmUI.data_type.ALARM_CLOCK, 'ALM', 4, start, end),
  	  // 9:  (start, end) => this.buildLabelledTextFontWidget(hmUI.data_type.FLOOR, 'FLR', 3, start, end),
  	  //3: (start, end) => this.buildLabelledTextFontWidget(hmUI.data_type.MONTH_RUN_DISTANCE, 'MR', 5, start, end, true),
  	  //9: (start, end) => this.buildLabelledTextFontWidget(hmUI.data_type.FLOOR, 'FLOOR', 2, start, end, false),
	const widgetBuilderMap = {
  	  11: (start, end) => this.buildWeather(false, start, end),
  	  1: (start, end) => this.buildDate(false, start, end),
  	  3: (start, end) => this.buildBattery(false, start, end),
  	  9: (start, end) => this.buildSunriseSunset(false, start, end),
  	  5: (start, end) => this.buildHeartRate(true, start, end),
  	  7: (start, end) => this.buildSteps(true, start, end),
	};

    widgetAngleMap.forEach(({ id, start_angle, end_angle }) => {
      const builder = widgetBuilderMap[id];
      builder(start_angle, end_angle);
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
      const { day, month, year, week } = timeSensor;
      //let text = `${day} ${MONTHS[month - 1]} ${year}`;
      //let text = `${day} ${MONTHS[month - 1]}`;
      // let text = `${WEEKDAYS[week - 1]}`;
	  //const shortYear = year.toString().slice(-2);
      //let text = `${MONTHS[month - 1]} ${day}`;
      let text = `${WEEKDAYS[week - 1]} ${day} ${MONTHS[month - 1]}`;
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

  buildWeekday(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      show_level: hmUI.show_level.ONLY_NORMAL,
      start_angle,
      end_angle,
    });

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
    const update = () => {
      const { day, month, year, week } = timeSensor;
      //let text = `${day} ${MONTHS[month - 1]} ${year}`;
      //let text = `${day} ${MONTHS[month - 1]}`;
	  //const shortYear = year.toString().slice(-2);
      let text = `${WEEKDAYS[week - 1]}`;
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

  buildLabelledTextFontWidget(type, label, dataChars, start_angle, end_angle, padding) {

	const totalTextChars = 10; //font NotoSansMonoCondensed, 32

	const angleRange = end_angle - start_angle;
	const charAngle = angleRange / totalTextChars;
	const axisAngle = start_angle + angleRange * 0.5;

	const labelWithSpace = `${label} `;
	const labelChars = labelWithSpace.length; //space

	const axisShiftAngle = (labelChars - dataChars) * charAngle * 0.5;
	const labelEndAngle = axisAngle + axisShiftAngle;

    hmUI.createWidget(hmUI.widget.TEXT, {
      ...OUTER_TEXT_PROPS,
      start_angle,
      end_angle: labelEndAngle,
  	  align_h: hmUI.align.RIGHT,
		text: labelWithSpace,
    });

    hmUI.createWidget(hmUI.widget.TEXT_FONT, {
      ...OUTER_TEXT_PROPS,
      start_angle: labelEndAngle,
      end_angle,
  	  align_h: hmUI.align.LEFT,
      type,
	  padding,
    });
  },

  buildBattery(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      start_angle,
      end_angle,
    });

    const batterySensor = hmSensor.createSensor(hmSensor.id.BATTERY);

    const update = () => {
      const { current } = batterySensor;
      let text = `PWR ${current}%`;
      if (rotated) text = text.split('').reverse().join('');
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

  buildWeather(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      start_angle,
      end_angle,
    });

    const weatherSensor = hmSensor.createSensor(hmSensor.id.WEATHER);

    const update = () => {
      const temp = weatherSensor.current;

	const index = weatherSensor.curAirIconIndex;
	const weatherName = (index >= 0 &&  index < WEATHER_NAMES.length)
		? WEATHER_NAMES[index] : `[ID ${index}]`;
	let text = `${weatherName} ${temp}\u00B0`;
    if (rotated) text = text.split('').reverse().join('');

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

  buildSteps(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      start_angle,
      end_angle,
    });

    const stepSensor = hmSensor.createSensor(hmSensor.id.STEP);

    const update = () => {
      const { current } = stepSensor;
      let text = `STP ${formatStepCount(current)}`;
      if (rotated) text = text.split('').reverse().join('');
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

  buildHeartRate(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      start_angle,
      end_angle,
    });

    const heartSensor = hmSensor.createSensor(hmSensor.id.HEART);

    const update = () => {
      const { last, today } = heartSensor;
      let max = today.length ? Math.max(...today) : last;
      let text = `HR ${last}/${max}`;
      if (rotated) text = text.split('').reverse().join('');
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

  buildSunriseSunset(rotated, start_angle, end_angle) {
    const props = rotated ? OUTER_TEXT_ROTATED_PROPS : OUTER_TEXT_PROPS;
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...props,
      start_angle,
      end_angle,
    });

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
    const weatherSensor = hmSensor.createSensor(hmSensor.id.WEATHER);

    const update = () => {
      const sunEvent = getNextSunEvent(timeSensor, weatherSensor);
      let text = 'IN SPACE';
	  if (sunEvent)
	  	{
        	const { type, minutes } = sunEvent;
		    const label = (type == 'sunrise') ? 'NGHT' : 'DAY';
			text = `${label} ${formatMinutes(minutes)}`;
		}
      if (rotated) text = text.split('').reverse().join('');
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

});
