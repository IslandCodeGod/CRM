// 可复用组件

// ==================== 数据表格组件 ====================
class DataTable {
    constructor(containerId, columns, options = {}) {
        this.container = document.getElementById(containerId);
        this.columns = columns;
        this.options = {
            searchable: true,
            sortable: true,
            pagination: true,
            perPage: 10,
            ...options
        };
        this.data = [];
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortDirection = 'asc';
    }

    setData(data) {
        this.data = data;
        this.render();
    }

    render() {
        if (!this.container) return;

        let html = '<div class="table-wrapper"><table class="table">';

        // 表头
        html += '<thead><tr>';
        this.columns.forEach(col => {
            html += `<th>${col.label}</th>`;
        });
        if (this.options.actions) {
            html += '<th>操作</th>';
        }
        html += '</tr></thead>';

        // 表体
        html += '<tbody>';
        const startIndex = (this.currentPage - 1) * this.options.perPage;
        const endIndex = startIndex + this.options.perPage;
        const pageData = this.data.slice(startIndex, endIndex);

        if (pageData.length === 0) {
            html += `<tr><td colspan="${this.columns.length + (this.options.actions ? 1 : 0)}" class="text-center">暂无数据</td></tr>`;
        } else {
            pageData.forEach(row => {
                html += '<tr>';
                this.columns.forEach(col => {
                    const value = col.render ? col.render(row[col.field], row) : row[col.field];
                    html += `<td>${value || '-'}</td>`;
                });
                if (this.options.actions) {
                    html += `<td class="data-item-actions">${this.renderActions(row)}</td>`;
                }
                html += '</tr>';
            });
        }

        html += '</tbody></table></div>';

        this.container.innerHTML = html;
    }

    renderActions(row) {
        if (!this.options.actions) return '';

        return this.options.actions.map(action => {
            return `<button class="btn btn-sm ${action.class || 'btn-secondary'}" 
                            onclick="${action.onClick}(${row.id})">
                        ${action.label}
                    </button>`;
        }).join('');
    }
}

// ==================== 看板拖拽功能 ====================
class KanbanBoard {
    constructor(containerId, columns, onMove) {
        this.container = document.getElementById(containerId);
        this.columns = columns;
        this.onMove = onMove;
        this.draggedItem = null;
    }

    render(data) {
        if (!this.container) return;

        let html = '<div class="kanban-board">';

        this.columns.forEach(column => {
            const items = data.filter(item => item.stage === column.value);

            html += `
                <div class="kanban-column" data-column="${column.value}">
                    <div class="kanban-header">
                        <span class="kanban-title">${column.label}</span>
                        <span class="kanban-count">${items.length}</span>
                    </div>
                    <div class="kanban-items" data-column="${column.value}">
            `;

            items.forEach(item => {
                html += this.renderKanbanItem(item);
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += '</div>';

        this.container.innerHTML = html;
        this.initDragAndDrop();
    }

    renderKanbanItem(item) {
        return `
            <div class="kanban-item" draggable="true" data-id="${item.id}">
                <div class="kanban-item-title">${item.name}</div>
                <div class="kanban-item-meta">
                    <span>${formatCurrency(item.amount)}</span>
                    <span>${item.probability}%</span>
                </div>
            </div>
        `;
    }

    initDragAndDrop() {
        const items = this.container.querySelectorAll('.kanban-item');
        const columns = this.container.querySelectorAll('.kanban-items');

        items.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                this.draggedItem = item;
                item.style.opacity = '0.5';
            });

            item.addEventListener('dragend', (e) => {
                item.style.opacity = '1';
            });
        });

        columns.forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                column.style.backgroundColor = 'var(--bg-tertiary)';
            });

            column.addEventListener('dragleave', (e) => {
                column.style.backgroundColor = '';
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.style.backgroundColor = '';

                if (this.draggedItem) {
                    const itemId = this.draggedItem.dataset.id;
                    const newStage = column.dataset.column;

                    if (this.onMove) {
                        this.onMove(itemId, newStage);
                    }
                }
            });
        });
    }
}

// ==================== 状态徽章组件 ====================
function renderStatusBadge(status) {
    const statusMap = {
        'active': { key: 'status.active', class: 'badge-success' },
        'inactive': { key: 'status.inactive', class: 'badge-secondary' },
        'potential': { key: 'status.potential', class: 'badge-warning' },
        'new': { key: 'status.new', class: 'badge-info' },
        'contacted': { key: 'status.contacted', class: 'badge-primary' },
        'qualified': { key: 'status.qualified', class: 'badge-success' },
        'lost': { key: 'status.lost', class: 'badge-error' },
        'converted': { key: 'status.converted', class: 'badge-success' },
        'pending': { key: 'status.pending', class: 'badge-warning' },
        'in_progress': { key: 'status.in_progress', class: 'badge-primary' },
        'completed': { key: 'status.completed', class: 'badge-success' },
        'cancelled': { key: 'status.cancelled', class: 'badge-error' },
        'prospecting': { key: 'stage.prospecting', class: 'badge-info' },
        'qualification': { key: 'stage.qualification', class: 'badge-primary' },
        'proposal': { key: 'stage.proposal', class: 'badge-warning' },
        'negotiation': { key: 'stage.negotiation', class: 'badge-warning' },
        'closed_won': { key: 'stage.closed_won', class: 'badge-success' },
        'closed_lost': { key: 'stage.closed_lost', class: 'badge-error' }
    };

    const config = statusMap[status] || { key: status, class: 'badge-secondary' };
    const label = typeof t === 'function' ? t(config.key) : status;
    return `<span class="badge ${config.class}">${label}</span>`;
}

// ==================== 优先级徽章组件 ====================
function renderPriorityBadge(priority) {
    const priorityMap = {
        'low': { key: 'priority.low', class: 'badge-info' },
        'medium': { key: 'priority.medium', class: 'badge-warning' },
        'high': { key: 'priority.high', class: 'badge-error' },
        'urgent': { key: 'priority.urgent', class: 'badge-error' }
    };

    const config = priorityMap[priority] || { key: priority, class: 'badge-secondary' };
    const label = typeof t === 'function' ? t(config.key) : priority;
    return `<span class="badge ${config.class}">${label}</span>`;
}

// ==================== 确认对话框 ====================
function confirmDialog(message, onConfirm) {
    if (confirm(message)) {
        onConfirm();
    }
}
