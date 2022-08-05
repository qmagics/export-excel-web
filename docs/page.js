// 最简单用法
function download1() {
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
}

// 格式化函数
function download2() {
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
}

// 导出带图片
function download3() {
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
}

// 设置表格整体样式
function download4() {
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
}

// 设置单元格样式
function download5() {
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
}

// 设置表头样式
function download6() {
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
}

// 设置列宽/行高/图片宽度/图片高度
function download7() {
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
}

// 合并单元格
function download8() {
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
}

// 表头单元格合并
function download9() {
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
}

// 头部额外内容
function download10() {
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
}

// 尾部额外内容
function download11() {
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
                    span: {
                        colspan: 2,
                        rowspan: 1
                    }
                }
            ]
        ],
    });
}

// 动态设置行高/图片宽高
function download12() {
    return ExportExcelWeb({
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
}

// 隐藏表头
function download13() {
    ExportExcelWeb({
        fileName: "导出3.xlsx",
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
}

// // 多个工作表页签
// function download13() {
//     ExportExcelWeb({
//         fileName: "导出11.xlsx",

//         sheets: [
//             {
//                 name: '学生表',
//                 columns: [
//                     {
//                         label: "姓名",
//                         prop: "name"
//                     },
//                     {
//                         label: "年龄",
//                         prop: "age"
//                     }
//                 ],
//                 data: [
//                     {
//                         name: "张三",
//                         age: 28
//                     },
//                     {
//                         name: "李四",
//                         age: 22
//                     }
//                 ]
//             },
//             {
//                 name: '班级表',
//                 columns: [
//                     {
//                         label: "班级",
//                         prop: "class"
//                     },
//                     {
//                         label: "班主任",
//                         prop: "teacher"
//                     }
//                 ],
//                 data: [
//                     {
//                         class: "一班",
//                         teacher: "张老师"
//                     },
//                     {
//                         class: "二班",
//                         teacher: "李老师"
//                     }
//                 ]
//             }
//         ]
//     });
// }

// 综合案例
function download99() {
    ExportExcelWeb({
        fileName: "综合案例.xlsx",
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
        topRows: [],
        bottomRows: [],
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
                address: "浙江省杭州市余杭区文一西路969号淘宝城一期"
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
                address: "浙江省嘉兴市海宁市盐官镇环城南路"
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
                address: "浙江省杭州市拱墅区明园路28号"
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
                address: "浙江省杭州市西湖区龙井路1号"
            }
        ]
    });
}
