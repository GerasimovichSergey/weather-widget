import { renderWidgetForecast, renderWidgetOther, renderWidgetToday, showError } from './render.js';
import { fetchWeather } from './APIservice.js';


export const startWidget = async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Минск');
    console.log(dataWeather.data);

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        showError(widget, error);
    }

    renderWidgetForecast(widget);


    return widget;
};