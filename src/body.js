import { getTdContent } from "./cell";

const getRowHeightString = ({ row, rowIndex, rowHeight }) => {
    if (!rowHeight) return '';

    let height = "";

    if (typeof rowHeight === 'number') {
        height = rowHeight;
    }
    else if (typeof rowHeight === 'function') {
        height = rowHeight({ row, rowIndex });
    }

    return `height="${height}"`;
}

export const createBodyString = (columns, rows, spanMethod, rowHeight) => {
    let tbody = '<tbody>';

    const rows_len = rows.length;
    const columns_len = columns.length;

    for (let i = 0; i < rows_len; i++) {
        const row = rows[i];

        const row_height_str = getRowHeightString({ row, rowIndex: i, rowHeight });

        tbody += `<tr ${row_height_str}>`;

        for (let j = 0; j < columns_len; j++) {
            const column = columns[j];
            tbody += getTdContent(row, column, i, j, spanMethod);
        }

        tbody += '</tr>';
    }

    tbody += '</tbody>';

    return tbody;
}