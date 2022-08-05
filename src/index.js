import { createBodyString } from './body';
import { createHeaderString } from './header';
import startExport from './export';
import { createExtraBlockString } from './extra';
// import startExportIE from './exportIE';

export default ({ columns, data, fileName, sheetName, style, spanMethod, topRows = [], bottomRows = [], rowHeight, showHeader = true }) => {
    const extraHeaders = (topRows || []).map(columns => createExtraBlockString(columns, 'thead')).join('');

    const thead = showHeader ? createHeaderString(columns) : '';

    const tbody = createBodyString(columns, data, spanMethod, rowHeight);

    const extraFooters = (bottomRows || []).map(columns => createExtraBlockString(columns, 'tfoot')).join('');

    const table = extraHeaders + thead + tbody + extraFooters;

    startExport({
        table,
        fileName,
        sheetName,
        style
    });
}