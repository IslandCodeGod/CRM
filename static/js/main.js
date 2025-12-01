// 核心JavaScript功能

// ==================== 工具函数 ====================

// API请求封装
async function apiRequest(url, options = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    try {
        const response = await fetch(url, { ...defaultOptions, ...options });
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || '请求失败');
        }
        
        return data;
    } catch (error) {
        console.error('API请求错误:', error);
        showToast(error.message, 'error');
        throw error;
    }
}

// 显示通知
function showToast(message, type = 'info') {
    const container = document.querySelector('.toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${getToastIcon(type)}</div>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

function getToastIcon(type) {
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    return icons[type] || icons.info;
}

// ==================== 模态框管理 ====================

class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.overlay = this.modal?.closest('.modal-overlay');
        
        if (this.overlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        const closeBtn = this.modal?.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }
    }
    
    open() {
        if (this.overlay) {
            this.overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    close() {
        if (this.overlay) {
            this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// ==================== 表单验证 ====================

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const errorElement = input.nextElementSibling;
        
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = '此字段为必填项';
            }
        } else {
            input.classList.remove('error');
            
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = '';
            }
        }
        
        // 邮箱验证
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
                
                if (errorElement && errorElement.classList.contains('form-error')) {
                    errorElement.textContent = '请输入有效的邮箱地址';
                }
            }
        }
    });
    
    return isValid;
}

// 清除表单
function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    }
}

// ==================== 主题切换 ====================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ==================== 搜索和筛选 ====================

let searchTimeout;

function setupSearch(inputId, callback, delay = 500) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    input.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            callback(e.target.value);
        }, delay);
    });
}

// ==================== 分页 ====================

function renderPagination(containerId, currentPage, totalPages, onPageChange) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    // 上一页
    html += `
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} 
                onclick="${onPageChange}(${currentPage - 1})">
            ‹
        </button>
    `;
    
    // 页码
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    if (startPage > 1) {
        html += `<button class="pagination-btn" onclick="${onPageChange}(1)">1</button>`;
        if (startPage > 2) {
            html += `<span class="pagination-info">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                    onclick="${onPageChange}(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="pagination-info">...</span>`;
        }
        html += `<button class="pagination-btn" onclick="${onPageChange}(${totalPages})">${totalPages}</button>`;
    }
    
    // 下一页
    html += `
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} 
                onclick="${onPageChange}(${currentPage + 1})">
            ›
        </button>
    `;
    
    container.innerHTML = html;
}

// ==================== 加载状态 ====================

function showLoading() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.id = 'loadingOverlay';
    overlay.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(overlay);
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// ==================== 日期格式化 ====================

function formatDate(dateString) {
    if (!dateString) return '-';
    
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    
    return date.toLocaleDateString('zh-CN');
}

function formatDateTime(dateString) {
    if (!dateString) return '-';
    
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ==================== 数字格式化 ====================

function formatNumber(num) {
    if (num === null || num === undefined) return '0';
    return num.toLocaleString('zh-CN');
}

function formatCurrency(amount) {
    if (amount === null || amount === undefined) return '¥0.00';
    return `¥${amount.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', () => {
    // 初始化主题
    initTheme();
    
    // 设置主题切换按钮
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 移动端侧边栏切换
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
});
