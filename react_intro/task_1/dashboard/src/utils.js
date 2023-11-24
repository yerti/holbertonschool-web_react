export function getFullYear() {
    // obtenemos la fecha actual
    const currentDate = new Date();

    return currentDate.getFullYear();
};

export function getFooterCopy(isIndex) {
    const parameter = isIndex ? "Holberton School" : "Holberton School main dashboard";

    return parameter;
};
