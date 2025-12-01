// 数据可视化图表

// ==================== Chart.js CDN加载 ====================
// 在HTML中引入: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// ==================== 销售趋势图 ====================
function renderSalesTrendChart(canvasId, data) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels || [],
            datasets: [{
                label: t('dashboard.total_amount'),
                data: data.values || [],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '¥' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// ==================== 销售漏斗图 ====================
function renderSalesFunnelChart(canvasId, data) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                t('stage.prospecting'),
                t('stage.qualification'),
                t('stage.proposal'),
                t('stage.negotiation'),
                t('stage.closed_won')
            ],
            datasets: [{
                label: t('dashboard.total_opportunities'),
                data: [
                    data.prospecting || 0,
                    data.qualification || 0,
                    data.proposal || 0,
                    data.negotiation || 0,
                    data.closed_won || 0
                ],
                backgroundColor: [
                    '#4f46e5',
                    '#6366f1',
                    '#818cf8',
                    '#a5b4fc',
                    '#10b981'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ==================== 客户分布饼图 ====================
function renderCustomerDistributionChart(canvasId, data) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels || [],
            datasets: [{
                data: data.values || [],
                backgroundColor: [
                    '#4f46e5',
                    '#06b6d4',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// ==================== 任务完成率图 ====================
function renderTaskCompletionChart(canvasId, completed, total) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    const percentage = total > 0 ? (completed / total * 100).toFixed(1) : 0;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [t('status.completed'), t('status.pending')],
            datasets: [{
                data: [completed, total - completed],
                backgroundColor: ['#10b981', '#e5e7eb']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.parsed;
                        }
                    }
                }
            },
            cutout: '70%'
        },
        plugins: [{
            id: 'centerText',
            beforeDraw: function (chart) {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;

                ctx.restore();
                const fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";

                const text = percentage + "%";
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });
}

// ==================== 月度对比柱状图 ====================
function renderMonthlyComparisonChart(canvasId, currentData, previousData) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: t('common.current_year') || 'This Year',
                    data: currentData || [],
                    backgroundColor: '#4f46e5'
                },
                {
                    label: t('common.last_year') || 'Last Year',
                    data: previousData || [],
                    backgroundColor: '#d1d5db'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
