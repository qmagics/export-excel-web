import { CELL_TYPE, DEFAULTS } from "./constant";
import { serializeStyle } from "./utils";

const getImageWidth = (imageWidth, ctx) => {
    if (!imageWidth) return DEFAULTS.IMAGE_WIDTH;

    if (typeof imageWidth === 'number') {
        return imageWidth;
    }
    else if (typeof imageWidth === 'function') {
        return imageWidth(ctx);
    }
}

const getImageHeight = (imageHeight, ctx) => {
    if (!imageHeight) return DEFAULTS.IMAGE_HEIGHT;

    if (typeof imageHeight === 'number') {
        return imageHeight;
    }
    else if (typeof imageHeight === 'function') {
        return imageHeight(ctx);
    }
}

export const getCellProps = (value, row, column, rowIndex, columnIndex) => {
    const { type, cellStyle, width, imageHeight, imageWidth } = column;

    let style = undefined;

    if (typeof cellStyle === 'function') {
        style = cellStyle({ value, row, rowIndex, columnIndex });
    }
    else {
        style = cellStyle;
    }

    let composeStyle = {
        ...DEFAULTS.CELL_STYLE,
        width: width ? (width + 'px') : '',
        ...style
    }

    let imageProps = {};

    if (type === CELL_TYPE.IMAGE) {
        imageProps.width = getImageWidth(imageWidth, { value, row, column, rowIndex, columnIndex });
        imageProps.height = getImageHeight(imageHeight, { value, row, column, rowIndex, columnIndex });
        composeStyle.height = imageProps.width + 'px';

        if (!width) {
            composeStyle.width = imageProps.width + 'px';
        }
    }

    return {
        cellStyle: serializeStyle(composeStyle),
        imageProps
    }
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
    const { type } = column;

    const value = getCellValue(row, column, rowIndex, columnIndex);

    const { cellStyle: td_style, imageProps } = getCellProps(value, row, column, rowIndex, columnIndex);

    // 合并单元格处理
    const { content: span_content, needDelete } = getSpanContent(spanMethod, { row, column, rowIndex, columnIndex });

    if (needDelete) return '';

    if (!value) return `<td ${span_content} style="${td_style}"></td>`;

    if (type === CELL_TYPE.IMAGE) {
        return `<td ${span_content} style="${td_style}"><img src="${value}" width="${imageProps.width}" height="${imageProps.height}" /></td>`;
    }
    else {
        return `<td ${span_content} style="${td_style}"><span>${value}</span></td>`;
    }
}
