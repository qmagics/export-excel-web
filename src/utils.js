export const serializeStyle = (style) => {
    if (typeof style === 'object') {
        return Object.entries(style).map(([key, value]) => value ? `${key}:${value}` : '').filter(i => !!i).join(';') + ';';
    }
    else {
        return style;
    }
}