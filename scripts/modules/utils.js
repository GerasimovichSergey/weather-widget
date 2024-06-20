const addZeroToTime = (time) => {
    if (time < 10) {
        time = `0${time}`;
    }

    return time;
};

export const getCurrentDateTime = () => {
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    const weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const date = new Date();

    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekDays[date.getDay()];
    let hours = addZeroToTime(date.getHours());
    let minutes = addZeroToTime(date.getMinutes());

    return { dayOfMonth, month, year, dayOfWeek, hours, minutes };
};