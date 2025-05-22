
export function formatStepCount(steps) {
    if (steps < 10000) {
        return steps.toString();
    } else {
        return Math.floor(steps / 1000) + 'K';
    }
}
