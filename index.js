function findTheW(record) {
    return (record.result === "W")
}

function superbowlWin(record) {
    let element = record.find(findTheW);

    if (element !== undefined) {
        return element.year;
    }
    else {
        return element;
    }
}