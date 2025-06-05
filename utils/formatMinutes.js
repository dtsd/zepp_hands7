export function formatMinutes(minutes) {
    if (minutes < 100) {
        return minutes.toString() + 'M';
    } else {
        return Math.floor(minutes / 60) + 'H';
    }
}

