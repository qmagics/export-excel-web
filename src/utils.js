export const serializeStyle = (style) => {
    if (typeof style === 'object') {
        return Object.entries(style).map(([key, value]) => value ? `${key}:${value}` : '').filter(i => !!i).join(';') + ';';
    }
    else {
        return style;
    }
}

// 转换用户配置的columns格式：多级表头的情况
export const parseColumns = (columns) => {
    // 用于多级表头展示的组
    const columnsGroup = [];

    // 用于表体显示的列配置项
    const bodyColumns = [];

    // 递归填值
    function fillGroup(curDepth, items) {
        columnsGroup[curDepth] = [];

        let next_items = [];

        items.forEach(item => {
            item.colspan = 1;
            item.depth = curDepth;
            item.hasChildren = !!(item.children?.length);

            if (item.hasChildren) {
                item.children.forEach(child => {
                    child.parent = item;
                });
                item.colspan = 0;
                next_items = [...next_items, ...item.children];
            }

            delete item.children;
            columnsGroup[curDepth].push(item);
        });

        if (next_items?.length) {
            fillGroup(curDepth + 1, next_items);
        }
    }

    // 第一步
    fillGroup(0, columns);

    // 第二步
    const totalDepth = columnsGroup.length - 1;
    for (let i = totalDepth; i >= 0; i--) {
        const columns = columnsGroup[i];

        const bColumnsChunk = [];

        columns.forEach(column => {
            const { parent, hasChildren, colspan, depth } = column;
            if (parent) {
                column.parent.colspan += colspan;
            }

            if (!hasChildren) {
                column.rowspan = (totalDepth - i) + 1;
            }

            if (!hasChildren || depth === totalDepth) {
                bColumnsChunk.push(column);
            }
        })

        bodyColumns.unshift(...bColumnsChunk);
    }

    return {
        columnsGroup,
        bodyColumns
    };
}