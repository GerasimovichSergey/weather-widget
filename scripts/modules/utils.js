const addZeroToTime = (time) => time < 10 ? `0${time}` : time;

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

// export const windDirection = (degrees) => {
//     if (degrees >= 0 && degrees <= 45) {
//         return '&#8599;';
//     } else if (degrees > 45 && degrees <= 90) {
//         return '';
//     }
// };