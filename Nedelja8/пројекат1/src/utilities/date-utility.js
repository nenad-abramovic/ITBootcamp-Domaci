export default function getSerbianDate(date) {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    return date.toLocaleDateString('sr-RS', options);
}

export function fillYearsToArray(min_year, max_year) {
    let years = [];

    for(let i = min_year; i <= max_year; i++) {
        years.push(i);
    }

    return years;
}