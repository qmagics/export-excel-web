import { createBodyString } from './body';
import { createHeaderString } from './header';
import startExport from './export';
import { createExtraBlockString } from './extra';
import { parseColumns } from './utils';
// import startExportIE from './exportIE';

export default ({ columns, data, fileName, sheetName, style, spanMethod, topRows = [], bottomRows = [], rowHeight, showHeader = true }) => {

    const { columnsGroup, bodyColumns } = parseColumns(columns);

    const thead = showHeader ? createHeaderString(columnsGroup) : '';

    const tbody = createBodyString(bodyColumns, data, spanMethod, rowHeight);

    const extraHeaders = (topRows || []).map(columns => createExtraBlockString(columns, 'thead')).join('');
    const extraFooters = (bottomRows || []).map(columns => createExtraBlockString(columns, 'tfoot')).join('');

    const table = extraHeaders + thead + tbody + extraFooters;

    startExport({
        table,
        fileName,
        sheetName,
        style
    });
}