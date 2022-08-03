import { CELL_TYPE, DEFAULTS } from "./constant";
import { serializeStyle } from "./utils";

export const getCellStyle = (value, row, column, rowIndex, columnIndex) => {
    const { type, cellStyle, width, height } = column;

    let style = undefined;

    if (typeof cellStyle === 'function') {
        style = cellStyle({ value, row, rowIndex, columnIndex });
    }
    else {
        style = cellStyle;
    }

    let composeStyle = {
        ...DEFAULTS.CELL_STYLE,
        ...style
    }

    if (type === CELL_TYPE.IMAGE) {
        composeStyle.width = (width || DEFAULTS.IMAGE_WIDTH) + 'px';
        composeStyle.height = (height || DEFAULTS.IMAGE_HEIGHT) + 'px';
    }

    return serializeStyle(composeStyle);
}

export const getCellValue = (row, column, rowIndex, columnIndex) => {
    const { formatter, prop } = column;

    const value = row[prop] || '';

    if (typeof formatter !== 'function') {
        return value;
    }
    else {
        return formatter({ value, row, rowIndex, columnIndex });
    }
}

export const getSpanContent = (spanMethod, ctx) => {
    if (typeof spanMethod !== 'function') return '';

    const spanResult = spanMethod(ctx);

    if (!spanResult) return '';

    const { rowspan, colspan } = spanResult;

    return {
        content: `rowspan="${rowspan}" colspan="${colspan}"`,
        needDelete: rowspan === 0 && colspan === 0
    };
}

export const getTdContent = (row, column, rowIndex, columnIndex, spanMethod) => {
    const { type, width, height } = column;

    const value = getCellValue(row, column, rowIndex, columnIndex);

    const td_style = getCellStyle(value, row, column, rowIndex, columnIndex);

    // 合并单元格处理
    const { content: span_content, needDelete } = getSpanContent(spanMethod, { row, column, rowIndex, columnIndex });

    if (needDelete) return '';

    if (!value) return `<td ${span_content} style="${td_style}"></td>`;

    if (type === CELL_TYPE.IMAGE) {
        return `<td ${span_content} style="${td_style}"><img src="${value}" width="${width || DEFAULTS.IMAGE_WIDTH}" height="${height || DEFAULTS.IMAGE_HEIGHT}" /></td>`;
    }
    else {
        return `<td ${span_content} style="${td_style}"><span>${value}</span></td>`;
    }
}
