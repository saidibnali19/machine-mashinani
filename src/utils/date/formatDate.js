export function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    return isNaN(date)
        ? 'Invalid date'
        : date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
}
