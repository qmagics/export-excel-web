# export-excel-web
用于在Web端实现导出excel文件，支持图片、合并单元格、控制导出样式等功能

## 在线演示
<a href="https://qmagics.github.io/export-excel-web" target="_blank">演示地址</a>

## 用法

- 最简用法
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出1.xlsx",
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

- 设置列宽/行高/图片宽度/图片高度
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出7.xlsx",
    columns: [
        {
            label: "头像",
            prop: "avatar",
            type: "image",
            width: 80,
            imageWidth: 50,
            imageHeight: 50
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
    ],
    rowHeight: 80
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

- 多级表头
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出9.xlsx",
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
            label: "地址",
            children: [
                {
                    label: "省",
                    prop: "address1"
                },
                {
                    label: "市",
                    prop: "address2"
                },
                {
                    label: "详细地址",
                    children: [
                        {
                            label: "区/县",
                            prop: "address3"
                        },
                        {
                            label: "街道",
                            prop: "address4"
                        },
                        {
                            label: "门牌号",
                            prop: "address5"
                        },
                    ]
                },
            ]
        },
    ],
    data: [
        {
            name: "张三",
            age: 28,
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "1108号",
        },
        {
            name: "李四",
            age: 22,
            address1: "广东省",
            address2: "深圳市",
            address3: "福田区",
            address4: "滨海大道",
            address5: "864号",
        }
    ],
});
```

- 头部额外内容
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出10.xlsx",
    topRows: [
        [
            {
                label: "学生表2022",
                    style: {
                    'font-size': '20pt'
                    },
                    colspan: 2,
                rowspan: 1
            }
        ]
    ],
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
    fileName: "导出11",
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
                label: "统计时间：2022-08-01",
                style: {
                    'font-weight': 'normal',
                    'color': '#888',
                    'font-size': '10pt'
                },
                colspan: 2,
                rowspan: 1
            }
        ]
    ],
});
```

- 动态设置行高/图片宽高
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出12.xlsx",
    columns: [
        {
            label: "头像",
            prop: "avatar",
            type: "image",
            width: 80,
            imageWidth({ row }) {
                if (row.sex === 1) {
                    return 30;
                } else {
                    return 60;
                }
            },
            imageHeight({ row }) {
                if (row.sex === 1) {
                    return 30;
                } else {
                    return 60;
                }
            }
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
        },
        {
            name: "王五",
            age: 26,
            sex: 1,
            avatar: ""
        }
    ],
    // 根据每行的数据和索引，动态设置行高度
    rowHeight({ row }) {
        if (row.avatar) return 80;
        return 30;
    }
});
```

- 隐藏表头
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "导出13.xlsx",
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
            sex: 1,
        },
        {
            name: "李四",
            age: 22,
            sex: 2,
        }
    ],
    showHeader: false
});
```

- 隐藏表头
``` js
import ExportExcelWeb from 'export-excel-web';

ExportExcelWeb({
    fileName: "综合案例.xlsx",
    columns: [
        {
            label: "班级",
            prop: "class"
        },
        {
            label: "头像",
            prop: "avatar",
            type: "image",
            imageWidth: 60,
            imageHeight: 60
        },
        {
            label: "姓名",
            prop: "name"
        },
        {
            label: "性别",
            prop: "sex",
            formatter({ value }) {
                return { 1: '男', 2: '女' }[value]
            }
        },
        {
            label: "年龄",
            prop: "age"
        },
        {
            label: "期末成绩",
            children: [
                {
                    label: "数学",
                    prop: "score1",
                    cellStyle: sroceCellStyleMethod
                },
                {
                    label: "语文",
                    prop: "score2",
                    cellStyle: sroceCellStyleMethod
                },
                {
                    label: "外语",
                    prop: "score3",
                    cellStyle: sroceCellStyleMethod
                }
            ]
        },
        {
            label: "地址",
            children: [
                {
                    label: "省",
                    prop: "address1"
                },
                {
                    label: "市",
                    prop: "address2"
                },
                {
                    label: "详细地址",
                    children: [
                        {
                            label: "区/县",
                            prop: "address3"
                        },
                        {
                            label: "街道",
                            prop: "address4"
                        },
                        {
                            label: "门牌号",
                            prop: "address5"
                        },
                    ]
                },
            ]
        },
    ],
    data: [
        {
            name: "王小明",
            age: 28,
            avatar: "https://placekitten.com/300/300",
            class: "一班",
            sex: 1,
            score1: 88,
            score2: 90,
            score3: 86,
            teacher: "王老师",
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "969号淘宝城一期1108号",
        },
        {
            name: "李小红",
            age: 26,
            avatar: "https://placekitten.com/402/402",
            class: "一班",
            sex: 2,
            score1: 86,
            score2: 87,
            score3: 92,
            teacher: "王老师",
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "969号淘宝城一期1108号",
        },
        {
            name: "刘小军",
            age: 22,
            avatar: "https://placekitten.com/304/304",
            class: "二班",
            sex: 2,
            score1: 99,
            score2: 98,
            score3: 90,
            teacher: "赵老师",
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "969号淘宝城一期1108号",
        },
        {
            name: "周小曼",
            age: 26,
            avatar: "https://placekitten.com/308/308",
            class: "二班",
            sex: 2,
            score1: 100,
            score2: 95,
            score3: 99,
            teacher: "赵老师",
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "969号淘宝城一期1108号",
        },
        {
            name: "赵小琦",
            age: 25,
            avatar: "https://placekitten.com/318/318",
            class: "三班",
            sex: 2,
            score1: 58,
            score2: 78,
            score3: 82,
            teacher: "何老师",
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "969号淘宝城一期1108号",
        },
        {
            name: "陆小凤",
            age: 25,
            avatar: "https://placekitten.com/320/320",
            class: "三班",
            sex: 1,
            score1: 89,
            score2: 48,
            score3: 72,
            teacher: "何老师",
            address1: "浙江省",
            address2: "杭州市",
            address3: "西湖区",
            address4: "龙井路",
            address5: "969号淘宝城一期1108号",
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
    },
    topRows: [
        [
            {
                label: "2022年XXX大学考生综合信息表",
                colspan: 13,
                tag: 'th',
                style: {
                    'font-size': '20pt',
                    color: 'rgb(132,151,176)'
                }
            }
        ]
    ],
    bottomRows: [
        [
            {
                label: "制表日期：",
                colspan: 3,
            },
            {
                label: "2022-06-08",
                colspan: 4,
            },
            {
                label: "制表人：",
                colspan: 3,
            },
            {
                label: "王老师",
                colspan: 3,
            }
        ],
        [
            {
                label: "备注：",
                colspan: 3
            },
            {
                label: "",
                colspan: 10
            }
        ]
    ],
    style: {
        border: '0.5px solid #333'
    }
});

function sroceCellStyleMethod({ value }) {
    let style = {
        'font-weight': 'bold',
        color: value >= 90 ? 'green' : value < 60 ? 'red' : ''
    }
    return style;
}
```