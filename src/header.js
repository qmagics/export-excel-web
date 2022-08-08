import { serializeStyle } from "./utils";

export const createHeaderString = (columnsGroup) => {
    const trs = columnsGroup.map(columns => createHeaderTr(columns))

    return `<thead>${trs.join('')}</thead>`;
}

const getSpanContent = (column) => {
    const { rowspan, colspan } = column;

    if (colspan === 0 && rowspan === 0) {
        return '';
    }
    return `${colspan ? ('colspan="' + colspan + '"') : ''} ${rowspan ? ('rowspan="' + rowspan + '"') : ''}`;
}

export const createHeaderTr = (columns) => {
    const ths = columns.map(column => {
        const { label, width, style } = column;

        const styleStr = serializeStyle(style);

        let spanContent = getSpanContent(column);

        // if (span) {
        //     const { colspan, rowspan } = span;
        //     if (colspan === 0 && rowspan === 0) {
        //         return '';
        //     }
        //     spanContent = `${colspan ? ('colspan="' + colspan + '"') : ''}${rowspan ? ('rowspan="' + rowspan + '"') : ''}`;
        // }

        return `<th ${spanContent} style="${styleStr}" width="${width}"> ${label} </th>`;
    })

    return `<tr>${ths.join('')}</tr>`;
}