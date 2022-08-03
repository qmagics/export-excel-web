import { serializeStyle } from "./utils";

export const createExtraBlockString = (columns, blockTag) => {
    const ths = columns.map(column => {
        const { label, width, style, span } = column;

        const styleStr = serializeStyle(style);

        let spanContent = '';

        if (span) {
            const { colspan, rowspan } = span;
            if (colspan === 0 && rowspan === 0) {
                return '';
            }
            spanContent = `${colspan ? ('colspan="' + colspan + '"') : ''}${rowspan ? ('rowspan="' + rowspan + '"') : ''}`;
        }

        return `<th ${spanContent} style="${styleStr}" width="${width}"> ${label} </th>`;
    })

    return `<${blockTag}><tr>${ths.join('')}</tr></${blockTag}>`;
}