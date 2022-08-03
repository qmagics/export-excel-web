export const serializeStyle = (style) => {
    if (typeof style === 'object') {
        return Object.entries(style).map(([key, value]) => `${key}:${value}`).join(';') + ';';
    }
    else {
        return style;
    }
}