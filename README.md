# export-excel-web
用于在Web端实现导出excel文件，支持图片、合并单元格、控制导出样式等功能

## 在线DEMO
[export-excel-web 在线demo](https://qmagics.github.io/export-excel-web)

## 用法

- 最简用法
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    columns: [
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "年龄",
            prop: "age"
        }
    ],
    data: [
        {
            name: "张三",
            age: 28
        },
        {
            name: "李四",
            age: 22
        }
    ]
});
```

- 格式化函数
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出2.xlsx",
    columns: [
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "年龄",
            prop: "age"
        },
        {
            label: "性别",
            prop: "sex",
            formatter({ value }) {
                return { 1: '男', 2: '女' }[value]
            }
        }
    ],
    data: [
        {
            name: "张三",
            age: 28,
            sex: 1
        },
        {
            name: "李四",
            age: 22,
            sex: 2
        }
    ]
});
```

- 导出带图片
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出3.xlsx",
    columns: [
        {
            label: "头像",
            prop: "avatar",
            type: "image"
        },
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "年龄",
            prop: "age"
        },
        {
            label: "性别",
            prop: "sex",
            formatter({ value }) {
                return { 1: '男', 2: '女' }[value]
            }
        }
    ],
    data: [
        {
            name: "张三",
            age: 28,
            sex: 1,
            avatar: "https://placekitten.com/300/300"
        },
        {
            name: "李四",
            age: 22,
            sex: 2,
            avatar: "https://placekitten.com/400/400"
        }
    ]
});
```

- 设置表格整体样式
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出4.xlsx",
    columns: [
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "年龄",
            prop: "age"
        }
    ],
    data: [
        {
            name: "张三",
            age: 28
        },
        {
            name: "李四",
            age: 22
        }
    ],
    style: {
        'font-family': '微软雅黑',
        'font-size': '18pt',
        'color': 'blue'
    }
});
```

- 设置单元格样式
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出5.xlsx",
    columns: [
        {
            label: "姓名",
            prop: "name",
            cellStyle: { // 静态样式
                'font-size': '14pt',
                'font-weight': 'bold',
                'color': 'blue'
            }
        },
        {
            label: "年龄",
            prop: "age",
            cellStyle: {
                'font-size': '14pt',
            }
        },
        {
            label: "性别",
            prop: "sex",
            formatter({ value }) {
                return { 1: '男', 2: '女' }[value]
            },
            cellStyle({ value, row, rowIndex, columnIndex }) { // 动态样式
                return {
                    'font-size': '14pt',
                    color: row.sex === 1 ? 'skyblue' : 'pink'
                }
            }
        }
    ],
    data: [
        {
            name: "张三",
            age: 28,
            sex: 1
        },
        {
            name: "李四",
            age: 22,
            sex: 2
        }
    ]
});
```

- 设置表头样式
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出6.xlsx",
    columns: [
        {
            label: "姓名",
            prop: "name",
            style: {
                'font-size': '14pt',
                'font-weight': 'normal',
                'color': 'blue'
            }
        },
        {
            label: "年龄",
            prop: "age",
            style: {
                'font-size': '14pt'
            }
        }
    ],
    data: [
        {
            name: "张三",
            age: 28
        },
        {
            name: "李四",
            age: 22
        }
    ]
});
```

- 设置列宽（图片宽度），图片高度
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出7.xlsx",
    columns: [
        {
            label: "头像",
            prop: "avatar",
            type: "image",
            width: 50,
            height: 50
        },
        {
            label: "姓名",
            prop: "name",
            width: 200
        },
        {
            label: "年龄",
            prop: "age",
            width: 100
        },
        {
            label: "性别",
            prop: "sex",
            width: 50,
            formatter({ value }) {
                return { 1: '男', 2: '女' }[value]
            }
        }
    ],
    data: [
        {
            name: "张三",
            age: 28,
            sex: 1,
            avatar: "https://placekitten.com/300/300",
        },
        {
            name: "李四",
            age: 22,
            sex: 2,
            avatar: "https://placekitten.com/400/400",
        }
    ]
});
```

- 合并单元格
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出8.xlsx",
    columns: [
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "订单号",
            prop: "orderId",
        },
        {
            label: "金额1",
            prop: "amount1"
        },
        {
            label: "金额2",
            prop: "amount2"
        },
        {
            label: "金额3",
            prop: "amount3"
        }
    ],
    data: [
        {
            orderId: '12987122',
            name: '张三',
            amount1: '234',
            amount2: '3.2',
            amount3: 10
        },
        {
            orderId: '12987122',
            name: '张三',
            amount1: '165',
            amount2: '4.43',
            amount3: 12
        },
        {
            orderId: '12987124',
            name: '李四',
            amount1: '324',
            amount2: '1.9',
            amount3: 9
        },
        {
            orderId: '12987124',
            name: '李四',
            amount1: '621',
            amount2: '2.2',
            amount3: 17
        }
    ],
    spanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
                return {
                    rowspan: 2,
                    colspan: 1
                };
            } else {
                return {
                    rowspan: 0,
                    colspan: 0
                };
            }
        }
    }
});
```

- 表头单元格合并
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出9",
    columns: [
        {
            label: "姓名",
            prop: "name",
        },
        {
            label: "年龄",
            prop: "age"
        },
        {
            label: "地址",
            prop: "address1",
            span: {
                colspan: 2,
                rowspan: 1
            }
        },
        {
            label: "地址",
            prop: "address2",
            span: {
                colspan: 0,
                rowspan: 0
            }
        },
    ],
    data: [
        {
            name: "张三",
            address1: "浙江省",
            address2: "杭州市",
            age: 28
        },
        {
            name: "李四",
            address1: "广东省",
            address2: "深圳市",
            age: 22
        }
    ]
});
```

- 头部额外内容
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    topRows: [
        [
            {
                label: "学生表2022",
                style: {
                    'font-size': '20pt'
                },
                span: {
                    colspan: 2,
                    rowspan: 1
                }
            }
        ]
    ],
    fileName: "导出10",
    columns: [
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "年龄",
            prop: "age"
        }
    ],
    data: [
        {
            name: "张三",
            age: 28
        },
        {
            name: "李四",
            age: 22
        }
    ]
});
```

- 尾部额外内容
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出10",
    columns: [
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "年龄",
            prop: "age"
        }
    ],
    data: [
        {
            name: "张三",
            age: 28
        },
        {
            name: "李四",
            age: 22
        }
    ],
    bottomRows: [
        [
            {
                label: "学生表2022",
                style: {
                    'font-size': '20pt'
                },
                span: {
                    colspan: 2,
                    rowspan: 1
                }
            }
        ]
    ]
});
```
