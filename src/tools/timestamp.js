function getTimestamp() {
    let format = n => {
        if (n < 10) {
            n = '0' + n;
        }
        return n;
    };
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; // January bears the number 0
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let timestamp = year + '-' + format(month) + '-' + format(day) + '_' + format(hours) + '-' + format(minutes) + '-' + format(seconds);
    return timestamp;
}
