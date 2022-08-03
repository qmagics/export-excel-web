import { DEFAULTS } from "./constant";
import { serializeStyle } from "./utils";

const BASE64_PREFIX = 'data:application/vnd.ms-excel;base64,';
const TEMPLATE =
    `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="UTF-8">
            <!--[if gte mso 9]>
            <xml>
                <x:ExcelWorkbook>
                    <x:ExcelWorksheets>
                        <x:ExcelWorksheet>
                            <x:Name>{worksheet}</x:Name>
                            <x:WorksheetOptions>
                                <x:DisplayGridlines/>
                            </x:WorksheetOptions>
                        </x:ExcelWorksheet>
                    </x:ExcelWorksheets>
                </x:ExcelWorkbook>
            </xml>
            <![endif]-->
        </head>
        <body>
            <table style="{style}">{table}</table>
        </body>
    </html>`;

const base64 = (s) => window.btoa(unescape(encodeURIComponent(s)));

const format = (s, c) => s.replace(/{(\w+)}/g, (m, p) => c[p]);

export default ({ table, sheetName, fileName, style }) => {

    const ctx = {
        worksheet: sheetName || DEFAULTS.DEFAULT_SHEET_NAME,
        table,
        style: serializeStyle({
            ...DEFAULTS.TABLE_STYLE,
            ...style
        })
    }

    // 创建下载
    let link = document.createElement('a');
    link.setAttribute('href', BASE64_PREFIX + base64(format(TEMPLATE, ctx)));
    link.setAttribute('download', fileName || DEFAULTS.DEFAULT_FILE_NAME);
    link.click();
}