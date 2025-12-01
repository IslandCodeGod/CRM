// 页面翻译辅助函数 - 在页面加载后调用

// 翻译页面标题
function translatePageTitle(key) {
    document.title = t(key);
}

// 翻译页面头部
function translatePageHeader(titleKey, subtitleKey) {
    const title = document.querySelector('.page-title');
    const subtitle = document.querySelector('.page-subtitle');

    if (title) title.textContent = t(titleKey);
    if (subtitle) subtitle.textContent = t(subtitleKey);
}

// 翻译按钮文本
function translateButtons() {
    // 翻译所有带有特定类名的按钮
    const buttonMap = {
        'btn-add-customer': 'customer.add',
        'btn-add-lead': 'lead.add',
        'btn-add-opportunity': 'opportunity.add',
        'btn-add-contact': 'contact.add',
        'btn-add-task': 'task.add'
    };

    Object.entries(buttonMap).forEach(([className, key]) => {
        const buttons = document.querySelectorAll(`.${className}`);
        buttons.forEach(btn => {
            const icon = btn.querySelector('span:first-child');
            const iconHtml = icon ? icon.outerHTML : '';
            btn.innerHTML = iconHtml + '<span>' + t(key) + '</span>';
        });
    });
}

// 翻译表格表头
function translateTableHeaders(headerMap) {
    const headers = document.querySelectorAll('th');
    headers.forEach((header, index) => {
        if (headerMap[index]) {
            header.textContent = t(headerMap[index]);
        }
    });
}

// 翻译下拉选项
function translateSelectOptions(selectId, optionsMap) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const options = select.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (optionsMap[value]) {
            option.textContent = t(optionsMap[value]);
        }
    });
}

// 批量翻译常用下拉框
function translateCommonSelects() {
    // 状态筛选
    const statusOptions = {
        '': 'status.all',
        'active': 'status.active',
        'inactive': 'status.inactive',
        'potential': 'status.potential',
        'new': 'status.new',
        'contacted': 'status.contacted',
        'qualified': 'status.qualified',
        'converted': 'status.converted',
        'lost': 'status.lost',
        'pending': 'status.pending',
        'in_progress': 'status.in_progress',
        'completed': 'status.completed',
        'cancelled': 'status.cancelled'
    };

    // 优先级筛选
    const priorityOptions = {
        '': 'priority.all',
        'low': 'priority.low',
        'medium': 'priority.medium',
        'high': 'priority.high',
        'urgent': 'priority.urgent'
    };

    // 阶段筛选
    const stageOptions = {
        '': 'stage.all',
        'prospecting': 'stage.prospecting',
        'qualification': 'stage.qualification',
        'proposal': 'stage.proposal',
        'negotiation': 'stage.negotiation',
        'closed_won': 'stage.closed_won',
        'closed_lost': 'stage.closed_lost'
    };

    translateSelectOptions('statusFilter', statusOptions);
    translateSelectOptions('priorityFilter', priorityOptions);
    translateSelectOptions('stageFilter', stageOptions);
    translateSelectOptions('status', statusOptions);
    translateSelectOptions('priority', priorityOptions);
    translateSelectOptions('stage', stageOptions);
}

// 页面加载完成后自动翻译
document.addEventListener('DOMContentLoaded', function () {
    // 延迟执行以确保i18n.js已加载
    setTimeout(() => {
        translateCommonSelects();
    }, 100);
});
