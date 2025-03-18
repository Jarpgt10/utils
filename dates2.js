import dayjs from 'dayjs';

const DiffByHours = (fechaInicio) => {
    // Convertir la fecha inicial y la fecha actual en objetos Day.js
    const fechaInicial = dayjs(fechaInicio);
    const fechaActual = dayjs();

    // Calcular la diferencia total en minutos
    const diferenciaTotalMinutos = fechaActual.diff(fechaInicial, 'minute');

    // Obtener las horas y minutos
    const horas = Math.floor(diferenciaTotalMinutos / 60);
    const minutos = diferenciaTotalMinutos % 60;

    return `${horas}:${minutos}`;
}





const fechasTs = (fecha) => {
    return fecha.split('T')[0]
}
function onlyDate(fechaHora) {
    const partes = fechaHora.split(' ')
    const fecha = partes[0]
    return fecha
}
function DayDifference(fechaInicio, fechaFin) {
    const inicio = dayjs(fechaInicio)
    const fin = dayjs(fechaFin)
    const diferencia = fin.diff(inicio, 'day')
    return diferencia
}

function DataPickerFecha(rangoFecha) {
    return rangoFecha.map(item => dayjs(item['$d']).format('YYYY-MM-DD'));
}
function formatDatePickerDate(dateObject) {
    if (!dateObject || !dateObject.$d) {
        throw new Error('Invalid date object');
    }

    return dayjs(dateObject.$d).format('YYYY-MM-DD');
}

function parseStringToDateObject(dateString) {
    const date = dayjs(dateString);
    if (!date.isValid()) {
        throw new Error('Invalid date string');
    }

    return {
        $D: date.date(),
        $H: date.hour(),
        $L: date.locale(),
        $M: date.month(),
        $W: date.day(),
        $d: date.toDate(),
        $isDayjsObject: true,
        $m: date.minute(),
        $ms: date.millisecond(),
        $s: date.second(),
        $u: date.utcOffset(),
        $x: {},
        $y: date.year()
    };
}
export {
    DiffByHours
    , fechasTs
    , onlyDate
    , DayDifference
    , DataPickerFecha
    , parseStringToDateObject
    , formatDatePickerDate
}


