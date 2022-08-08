import { serializeStyle } from "./utils";

const getSpanContent = (column) => {
    const { colspan, rowspan } = column;
    if (colspan === 0 && rowspan === 0) {
        return '';
    }
    return `${colspan ? ('colspan="' + colspan + '"') : ''} ${rowspan ? ('rowspan="' + rowspan + '"') : ''}`;
}

export const createExtraBlockString = (columns, blockTag) => {
    const ths = columns.map(column => {
        const { label, width, style, tag = 'td', align = 'center' } = column;

        const styleStr = serializeStyle(style);

        let spanContent = getSpanContent(column);

        return `<${tag} ${spanContent} align="${align}" style="${styleStr}" width="${width}"> ${label} </${tag}>`;
    })

    return `<${blockTag}><tr>${ths.join('')}</tr></${blockTag}>`;
}