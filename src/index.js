import { createBodyString } from './body';
import { createHeaderString } from './header';
import startExport from './export';
import { createExtraBlockString } from './extra';
// import startExportIE from './exportIE';

export default ({ columns, data, fileName, sheetName, style, spanMethod, headerRows, footerRows }) => {
    const extraHeaders = (headerRows || []).map(columns => createExtraBlockString(columns, 'thead')).join('');
    const thead = createHeaderString(columns);
    const tbody = createBodyString(columns, data, spanMethod);
    const extraFooters = (footerRows || []).map(columns => createExtraBlockString(columns, 'tfoot')).join('');

    const table = extraHeaders + thead + tbody + extraFooters;

    startExport({
        table,
        fileName,
        sheetName,
        style
    });
}