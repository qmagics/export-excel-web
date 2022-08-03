import { getTdContent } from "./cell";

export const createBodyString = (columns, rows, spanMethod) => {
    let tbody = '<tbody>';

    const rows_len = rows.length;
    const columns_len = columns.length;

    for (let i = 0; i < rows_len; i++) {
        const row = rows[i];

        tbody += `<tr>`;

        for (let j = 0; j < columns_len; j++) {
            const column = columns[j];
            tbody += getTdContent(row, column, i, j, spanMethod);
        }

        tbody += '</tr>';
    }

    tbody += '</tbody>';

    return tbody;
}