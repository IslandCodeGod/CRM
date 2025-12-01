// 前端国际化系统

// 翻译数据
const translations = {
    en: {
        // 通用
        'app.name': 'CRM System',
        'app.welcome': 'Welcome back',
        'app.logout': 'Logout',

        // 导航
        'nav.dashboard': 'Dashboard',
        'nav.customers': 'Customers',
        'nav.leads': 'Leads',
        'nav.opportunities': 'Opportunities',
        'nav.contacts': 'Contacts',
        'nav.tasks': 'Tasks',

        // 认证
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.username': 'Username',
        'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.confirm_password': 'Confirm Password',
        'auth.remember_me': 'Remember me',
        'auth.no_account': "Don't have an account?",
        'auth.have_account': 'Already have an account?',
        'auth.register_now': 'Register now',
        'auth.login_now': 'Login now',
        'auth.welcome_title': 'Welcome back',
        'auth.welcome_subtitle': 'Login to your CRM account',
        'auth.create_account': 'Create Account',
        'auth.create_subtitle': 'Start using CRM system',

        // 仪表板
        'dashboard.title': 'Dashboard',
        'dashboard.subtitle': 'Welcome back',
        'dashboard.total_customers': 'Total Customers',
        'dashboard.total_leads': 'Leads',
        'dashboard.total_opportunities': 'Opportunities',
        'dashboard.pending_tasks': 'Pending Tasks',
        'dashboard.sales_funnel': 'Sales Funnel',
        'dashboard.key_metrics': 'Key Metrics',
        'dashboard.new_customers': 'New Customers This Month',
        'dashboard.growth': 'Growth vs Last Month',
        'dashboard.total_amount': 'Total Opportunity Amount',
        'dashboard.expected_revenue': 'Expected Revenue',
        'dashboard.conversion_rate': 'Lead Conversion Rate',
        'dashboard.this_month': 'This Month',
        'dashboard.recent_tasks': 'Recent Tasks',
        'dashboard.recent_customers': 'Recent Customers',
        'dashboard.view_all': 'View All',
        'dashboard.no_tasks': 'No tasks',
        'dashboard.no_customers': 'No customers',

        // 客户管理
        'customer.title': 'Customer Management',
        'customer.subtitle': 'Manage your customer information',
        'customer.add': 'Add Customer',
        'customer.edit': 'Edit Customer',
        'customer.name': 'Name',
        'customer.company': 'Company',
        'customer.industry': 'Industry',
        'customer.email': 'Email',
        'customer.phone': 'Phone',
        'customer.address': 'Address',
        'customer.status': 'Status',
        'customer.created_at': 'Created At',
        'customer.contact_info': 'Contact Info',
        'customer.no_company': 'No company',

        // 销售线索
        'lead.title': 'Sales Leads',
        'lead.subtitle': 'Track and manage your sales leads',
        'lead.add': 'Add Lead',
        'lead.edit': 'Edit Lead',
        'lead.name': 'Name',
        'lead.company': 'Company',
        'lead.email': 'Email',
        'lead.phone': 'Phone',
        'lead.source': 'Source',
        'lead.status': 'Status',
        'lead.score': 'Score',
        'lead.created_at': 'Created At',
        'lead.contact_info': 'Contact Info',

        // 销售机会
        'opportunity.title': 'Sales Opportunities',
        'opportunity.subtitle': 'Manage your sales opportunities and pipeline',
        'opportunity.add': 'Add Opportunity',
        'opportunity.edit': 'Edit Opportunity',
        'opportunity.name': 'Opportunity Name',
        'opportunity.customer': 'Customer',
        'opportunity.stage': 'Stage',
        'opportunity.amount': 'Amount',
        'opportunity.probability': 'Probability',
        'opportunity.expected_close_date': 'Expected Close Date',
        'opportunity.select_customer': 'Select Customer',

        // 联系人
        'contact.title': 'Contact Management',
        'contact.subtitle': 'Manage customer contacts',
        'contact.add': 'Add Contact',
        'contact.edit': 'Edit Contact',
        'contact.name': 'Name',
        'contact.customer': 'Customer',
        'contact.position': 'Position',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.is_primary': 'Primary Contact',
        'contact.set_primary': 'Set as primary contact',

        // 任务管理
        'task.title': 'Task Management',
        'task.subtitle': 'Manage your tasks and activities',
        'task.add': 'Add Task',
        'task.edit': 'Edit Task',
        'task.task_title': 'Task Title',
        'task.description': 'Description',
        'task.priority': 'Priority',
        'task.status': 'Status',
        'task.due_date': 'Due Date',
        'task.created_at': 'Created At',

        // 状态
        'status.active': 'Active',
        'status.inactive': 'Inactive',
        'status.potential': 'Potential',
        'status.new': 'New',
        'status.contacted': 'Contacted',
        'status.qualified': 'Qualified',
        'status.converted': 'Converted',
        'status.lost': 'Lost',
        'status.pending': 'Pending',
        'status.in_progress': 'In Progress',
        'status.completed': 'Completed',
        'status.cancelled': 'Cancelled',
        'status.all': 'All Status',

        // 阶段
        'stage.prospecting': 'Prospecting',
        'stage.qualification': 'Qualification',
        'stage.proposal': 'Proposal',
        'stage.negotiation': 'Negotiation',
        'stage.closed_won': 'Closed Won',
        'stage.closed_lost': 'Closed Lost',
        'stage.all': 'All Stages',

        // 优先级
        'priority.low': 'Low',
        'priority.medium': 'Medium',
        'priority.high': 'High',
        'priority.urgent': 'Urgent',
        'priority.all': 'All Priorities',

        // 来源
        'source.website': 'Website',
        'source.referral': 'Referral',
        'source.social': 'Social Media',
        'source.advertisement': 'Advertisement',

        // 操作
        'action.save': 'Save',
        'action.cancel': 'Cancel',
        'action.edit': 'Edit',
        'action.delete': 'Delete',
        'action.search': 'Search',
        'action.filter': 'Filter',
        'action.add': 'Add',
        'action.close': 'Close',

        // 消息
        'message.no_data': 'No data available',
        'message.loading': 'Loading...',
        'message.success': 'Success',
        'message.error': 'Error',
        'message.confirm_delete': 'Are you sure you want to delete this item?',
        'message.required_field': 'This field is required',
        'message.invalid_email': 'Please enter a valid email address',
        'message.password_mismatch': 'Passwords do not match',

        // 其他
        'common.yes': 'Yes',
        'common.no': 'No',
        'common.current_user': 'Current User',
        'common.search_placeholder': 'Search...',
        'common.actions': 'Actions',
        'common.created_at': 'Created At',
        'common.status': 'Status',
        'common.required': '*',
        'common.current_year': 'This Year',
        'common.last_year': 'Last Year',
    },

    zh: {
        // 通用
        'app.name': 'CRM系统',
        'app.welcome': '欢迎回来',
        'app.logout': '退出登录',

        // 导航
        'nav.dashboard': '仪表板',
        'nav.customers': '客户管理',
        'nav.leads': '销售线索',
        'nav.opportunities': '销售机会',
        'nav.contacts': '联系人',
        'nav.tasks': '任务管理',

        // 认证
        'auth.login': '登录',
        'auth.register': '注册',
        'auth.username': '用户名',
        'auth.email': '邮箱',
        'auth.password': '密码',
        'auth.confirm_password': '确认密码',
        'auth.remember_me': '记住我',
        'auth.no_account': '还没有账户？',
        'auth.have_account': '已有账户？',
        'auth.register_now': '立即注册',
        'auth.login_now': '立即登录',
        'auth.welcome_title': '欢迎回来',
        'auth.welcome_subtitle': '登录您的CRM账户',
        'auth.create_account': '创建账户',
        'auth.create_subtitle': '开始使用CRM系统',

        // 仪表板
        'dashboard.title': '仪表板',
        'dashboard.subtitle': '欢迎回来',
        'dashboard.total_customers': '总客户数',
        'dashboard.total_leads': '销售线索',
        'dashboard.total_opportunities': '销售机会',
        'dashboard.pending_tasks': '待办任务',
        'dashboard.sales_funnel': '销售漏斗',
        'dashboard.key_metrics': '关键指标',
        'dashboard.new_customers': '本月新增客户',
        'dashboard.growth': '较上月增长',
        'dashboard.total_amount': '销售机会总金额',
        'dashboard.expected_revenue': '预期收入',
        'dashboard.conversion_rate': '线索转化率',
        'dashboard.this_month': '本月数据',
        'dashboard.recent_tasks': '最近任务',
        'dashboard.recent_customers': '最近客户',
        'dashboard.view_all': '查看全部',
        'dashboard.no_tasks': '暂无任务',
        'dashboard.no_customers': '暂无客户',

        // 客户管理
        'customer.title': '客户管理',
        'customer.subtitle': '管理您的客户信息',
        'customer.add': '添加客户',
        'customer.edit': '编辑客户',
        'customer.name': '客户姓名',
        'customer.company': '公司名称',
        'customer.industry': '行业',
        'customer.email': '邮箱',
        'customer.phone': '电话',
        'customer.address': '地址',
        'customer.status': '状态',
        'customer.created_at': '创建时间',
        'customer.contact_info': '联系方式',
        'customer.no_company': '无公司信息',

        // 销售线索
        'lead.title': '销售线索',
        'lead.subtitle': '跟踪和管理您的销售线索',
        'lead.add': '添加线索',
        'lead.edit': '编辑线索',
        'lead.name': '姓名',
        'lead.company': '公司',
        'lead.email': '邮箱',
        'lead.phone': '电话',
        'lead.source': '来源',
        'lead.status': '状态',
        'lead.score': '评分',
        'lead.created_at': '创建时间',
        'lead.contact_info': '联系方式',

        // 销售机会
        'opportunity.title': '销售机会',
        'opportunity.subtitle': '管理您的销售机会和销售流程',
        'opportunity.add': '添加机会',
        'opportunity.edit': '编辑机会',
        'opportunity.name': '机会名称',
        'opportunity.customer': '客户',
        'opportunity.stage': '阶段',
        'opportunity.amount': '金额',
        'opportunity.probability': '成交概率',
        'opportunity.expected_close_date': '预计成交日期',
        'opportunity.select_customer': '请选择客户',

        // 联系人
        'contact.title': '联系人管理',
        'contact.subtitle': '管理客户联系人信息',
        'contact.add': '添加联系人',
        'contact.edit': '编辑联系人',
        'contact.name': '姓名',
        'contact.customer': '所属客户',
        'contact.position': '职位',
        'contact.email': '邮箱',
        'contact.phone': '电话',
        'contact.is_primary': '主要联系人',
        'contact.set_primary': '设为主要联系人',

        // 任务管理
        'task.title': '任务管理',
        'task.subtitle': '管理您的待办任务和活动',
        'task.add': '添加任务',
        'task.edit': '编辑任务',
        'task.task_title': '任务标题',
        'task.description': '描述',
        'task.priority': '优先级',
        'task.status': '状态',
        'task.due_date': '截止日期',
        'task.created_at': '创建时间',

        // 状态
        'status.active': '活跃',
        'status.inactive': '不活跃',
        'status.potential': '潜在',
        'status.new': '新建',
        'status.contacted': '已联系',
        'status.qualified': '已确认',
        'status.converted': '已转化',
        'status.lost': '已失去',
        'status.pending': '待处理',
        'status.in_progress': '进行中',
        'status.completed': '已完成',
        'status.cancelled': '已取消',
        'status.all': '全部状态',

        // 阶段
        'stage.prospecting': '潜在客户',
        'stage.qualification': '资格审查',
        'stage.proposal': '提案',
        'stage.negotiation': '谈判',
        'stage.closed_won': '成交',
        'stage.closed_lost': '失败',
        'stage.all': '全部阶段',

        // 优先级
        'priority.low': '低',
        'priority.medium': '中',
        'priority.high': '高',
        'priority.urgent': '紧急',
        'priority.all': '全部优先级',

        // 来源
        'source.website': '网站',
        'source.referral': '推荐',
        'source.social': '社交媒体',
        'source.advertisement': '广告',

        // 操作
        'action.save': '保存',
        'action.cancel': '取消',
        'action.edit': '编辑',
        'action.delete': '删除',
        'action.search': '搜索',
        'action.filter': '筛选',
        'action.add': '添加',
        'action.close': '关闭',

        // 消息
        'message.no_data': '暂无数据',
        'message.loading': '加载中...',
        'message.success': '成功',
        'message.error': '错误',
        'message.confirm_delete': '确定要删除这个项目吗？',
        'message.required_field': '此字段为必填项',
        'message.invalid_email': '请输入有效的邮箱地址',
        'message.password_mismatch': '两次输入的密码不一致',

        // 其他
        'common.yes': '是',
        'common.no': '否',
        'common.current_user': '当前用户',
        'common.search_placeholder': '搜索...',
        'common.actions': '操作',
        'common.created_at': '创建时间',
        'common.status': '状态',
        'common.required': '*',
        'common.current_year': '本年',
        'common.last_year': '去年',
    }
};

// 当前语言
let currentLanguage = localStorage.getItem('language') || 'en';

// 翻译函数
function t(key) {
    return translations[currentLanguage][key] || key;
}

// 切换语言
function switchLanguage(lang) {
    if (lang && translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updatePageLanguage();
        showToast(t('message.success'), 'success');
    }
}

// 更新页面语言
function updatePageLanguage() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // 更新所有带有 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });

    // 更新语言切换按钮
    updateLanguageToggle();
}

// 更新语言切换按钮
function updateLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'en' ? '中文' : 'EN';
        langToggle.title = currentLanguage === 'en' ? 'Switch to Chinese' : '切换到英文';
    }
}

// 初始化语言
function initLanguage() {
    updatePageLanguage();
}

// 页面加载时初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
