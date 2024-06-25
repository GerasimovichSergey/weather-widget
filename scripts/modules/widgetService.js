import { renderWidgetForecast, renderWidgetOther, renderWidgetToday, showError } from './render.js';
import { fetchForecast, fetchWeather } from './APIservice.js';


export const startWidget = async () => {
    const city = 'Минск';

    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather(city);

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        showError(widget, dataWeather.error);
    }

    const dataForecast = await fetchForecast(city);

    if (dataForecast.success) {
        renderWidgetForecast(widget, dataForecast.data);
    } else {
        showError(widget, dataForecast.error);
    }

    return widget;
};