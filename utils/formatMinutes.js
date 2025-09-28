export function formatMinutes(minutes, labels) {
    if (minutes < 100) {
        return minutes.toString() + labels[1];
    } else {
        return Math.floor(minutes / 60) + labels[0];
    }
}

