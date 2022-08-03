// ie浏览器下执行
export default (data, name) => {
    let curTbl = data;
    let oXL = new ActiveXObject("Excel.Application");

    //创建AX对象excel
    let oWB = oXL.Workbooks.Add();
    //获取workbook对象
    let xlsheet = oWB.Worksheets(1);
    //激活当前sheet
    let sel = document.body.createTextRange();
    sel.moveToElementText(curTbl);
    //把表格中的内容移到TextRange中
    sel.select;
    //全选TextRange中内容
    sel.execCommand("Copy");
    //复制TextRange中内容
    xlsheet.Paste();
    //粘贴到活动的EXCEL中

    oXL.Visible = true;
    //设置excel可见属性

    try {
        let fname = oXL.Application.GetSaveAsFilename("Excel.xls", "Excel Spreadsheets (*.xls), *.xls");
    } catch (e) {
        print("Nested catch caught " + e);
    } finally {
        oWB.SaveAs(fname);

        oWB.Close(savechanges = false);
        //xls.visible = false;
        oXL.Quit();
        oXL = null;
        // 结束excel进程，退出完成
        window.setInterval("Cleanup();", 1);
        idTmr = window.setInterval("Cleanup();", 1);
    }
}