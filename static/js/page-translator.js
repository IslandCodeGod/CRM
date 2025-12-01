// 为所有管理页面添加通用翻译函数

// 翻译页面标题
function translatePageElements() {
    // 等待i18n.js加载完成
    if (typeof t !== 'function') {
        setTimeout(translatePageElements, 100);
        return;
    }

    // 翻译所有data-i18n元素
    updatePageLanguage();

    // 翻译表格表头
    translateTableHeaders();

    // 翻译按钮
    translateButtons();

    // 翻译模态框
    translateModals();
}

// 翻译表格表头
function translateTableHeaders() {
    const headerMappings = {
        '姓名': 'customer.name',
        '公司': 'customer.company',
        '行业': 'customer.industry',
        '联系方式': 'customer.contact_info',
        '状态': 'common.status',
        '创建时间': 'common.created_at',
        '操作': 'common.actions',
        '电话': 'customer.phone',
        '邮箱': 'customer.email',
        '来源': 'lead.source',
        '评分': 'lead.score',
        '客户': 'opportunity.customer',
        '阶段': 'opportunity.stage',
        '金额': 'opportunity.amount',
        '成交概率': 'opportunity.probability',
        '预计成交日期': 'opportunity.expected_close_date',
        '所属客户': 'contact.customer',
        '职位': 'contact.position',
        '主要联系人': 'contact.is_primary',
        '任务标题': 'task.task_title',
        '描述': 'task.description',
        '优先级': 'task.priority',
        '截止日期': 'task.due_date'
    };

    document.querySelectorAll('th').forEach(th => {
        const text = th.textContent.trim();
        if (headerMappings[text]) {
            th.textContent = t(headerMappings[text]);
        }
    });
}

// 翻译按钮
function translateButtons() {
    const buttonMappings = {
        '添加客户': 'customer.add',
        '添加线索': 'lead.add',
        '添加机会': 'opportunity.add',
        '添加联系人': 'contact.add',
        '添加任务': 'task.add',
        '编辑': 'action.edit',
        '删除': 'action.delete',
        '保存': 'action.save',
        '取消': 'action.cancel',
        '关闭': 'action.close',
        '查看全部': 'dashboard.view_all'
    };

    document.querySelectorAll('button').forEach(btn => {
        const text = btn.textContent.trim();
        // 保留图标
        const icon = btn.querySelector('span:first-child');
        if (buttonMappings[text] || buttonMappings[text.replace(/[➕✓🔍]/g, '').trim()]) {
            const key = buttonMappings[text] || buttonMappings[text.replace(/[➕✓🔍]/g, '').trim()];
            if (icon) {
                btn.innerHTML = icon.outerHTML + '<span>' + t(key) + '</span>';
            } else {
                btn.textContent = t(key);
            }
        }
    });
}

// 翻译模态框
function translateModals() {
    // 翻译模态框标题
    document.querySelectorAll('.modal-title').forEach(title => {
        const text = title.textContent.trim();
        const mappings = {
            '添加客户': 'customer.add',
            '编辑客户': 'customer.edit',
            '添加线索': 'lead.add',
            '编辑线索': 'lead.edit',
            '添加机会': 'opportunity.add',
            '编辑机会': 'opportunity.edit',
            '添加联系人': 'contact.add',
            '编辑联系人': 'contact.edit',
            '添加任务': 'task.add',
            '编辑任务': 'task.edit'
        };
        if (mappings[text]) {
            title.textContent = t(mappings[text]);
        }
    });
}

// 页面加载时自动翻译
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translatePageElements);
} else {
    translatePageElements();
}

// 监听语言切换事件
document.addEventListener('languageChanged', translatePageElements);
