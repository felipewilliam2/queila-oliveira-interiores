// app.js
// Queila de Oliveira Interiores – Sistema Completo de Gestão de Projetos

/* ========================================================================== */
/* DATA STORAGE AND MANAGEMENT                                               */
/* ========================================================================== */

// Sample data with extended functionality
let appData = {
  tasks: [
    { 
      _id: 't1', 
      title: 'Planejamento e Projeto', 
      startDate: '2025-08-01', 
      endDate: '2025-08-05', 
      status: 'Concluído', 
      percent: 100,
      responsible: 'Queila de Oliveira',
      description: 'Desenvolvimento do projeto de interiores e aprovação do cliente'
    },
    { 
      _id: 't2', 
      title: 'Demolição e Preparação', 
      startDate: '2025-08-06', 
      endDate: '2025-08-15', 
      status: 'Em Andamento', 
      percent: 60,
      responsible: 'João Silva',
      description: 'Demolição controlada e preparação dos ambientes'
    },
    { 
      _id: 't3', 
      title: 'Instalações Elétricas', 
      startDate: '2025-08-16', 
      endDate: '2025-08-20', 
      status: 'A Fazer', 
      percent: 0,
      responsible: 'Carlos Eletricista',
      description: 'Nova instalação elétrica conforme projeto'
    },
    { 
      _id: 't4', 
      title: 'Revestimentos e Pisos', 
      startDate: '2025-08-21', 
      endDate: '2025-08-25', 
      status: 'A Fazer', 
      percent: 0,
      responsible: 'Pedro Santos',
      description: 'Aplicação de revestimentos e instalação de pisos'
    },
    { 
      _id: 't5', 
      title: 'Mobiliário e Decoração', 
      startDate: '2025-08-26', 
      endDate: '2025-08-30', 
      status: 'A Fazer', 
      percent: 0,
      responsible: 'Ana Decoradora',
      description: 'Instalação de mobiliário e elementos decorativos'
    }
  ],
  
  expenses: [
    { 
      _id: 'e1', 
      taskId: 't1', 
      description: 'Desenvolvimento do projeto',
      category: 'Projeto', 
      amount: 2500, 
      date: '2025-08-05' 
    },
    { 
      _id: 'e2', 
      taskId: 't2', 
      description: 'Materiais para demolição',
      category: 'Materiais', 
      amount: 1800, 
      date: '2025-08-10' 
    },
    { 
      _id: 'e3', 
      taskId: 't2', 
      description: 'Mão de obra demolição',
      category: 'Mão de obra', 
      amount: 3200, 
      date: '2025-08-12' 
    }
  ],
  
  contacts: [
    {
      _id: 'c1',
      name: 'Queila de Oliveira',
      role: 'Designer de Interiores',
      phone: '(11) 99999-0000',
      email: 'queila@queilainteriores.com'
    },
    {
      _id: 'c2',
      name: 'João Silva',
      role: 'Mestre de Obras',
      phone: '(11) 99999-1111',
      email: 'joao@email.com'
    },
    {
      _id: 'c3',
      name: 'Carlos Eletricista',
      role: 'Eletricista',
      phone: '(11) 99999-3333',
      email: 'carlos@email.com'
    },
    {
      _id: 'c4',
      name: 'Ana Decoradora',
      role: 'Decoradora',
      phone: '(11) 99999-4444',
      email: 'ana@email.com'
    }
  ],
  
  documents: [
    {
      _id: 'd1',
      name: 'Projeto de Interiores',
      type: 'PDF',
      uploadDate: '2025-07-20',
      size: '3.2 MB'
    },
    {
      _id: 'd2',
      name: 'Orçamento Detalhado',
      type: 'PDF',
      uploadDate: '2025-07-22',
      size: '1.8 MB'
    },
    {
      _id: 'd3',
      name: 'Paleta de Cores',
      type: 'PDF',
      uploadDate: '2025-07-25',
      size: '2.1 MB'
    }
  ],
  
  diaryEntries: [
    {
      _id: 'diary1',
      date: '2025-08-01',
      title: 'Início do projeto',
      description: 'Reunião inicial com cliente para definição do briefing. Apresentação das primeiras ideias e conceitos para o projeto de interiores.'
    },
    {
      _id: 'diary2',
      date: '2025-08-05',
      title: 'Aprovação do projeto',
      description: 'Cliente aprovou o projeto final. Iniciamos a fase de execução com a equipe de obra. Cronograma definido para 4 semanas.'
    },
    {
      _id: 'diary3',
      date: '2025-08-10',
      title: 'Progresso da demolição',
      description: 'Demolição controlada em andamento. João Silva está conduzindo os trabalhos com excelência. Ambiente preparado para próximas etapas.'
    }
  ],
  
  acquisitions: [
    {
      _id: 'a1',
      item: 'Piso Vinílico Premium',
      quantity: '80m²',
      store: 'Leroy Merlin',
      deadline: '2025-08-20',
      status: 'Comprado'
    },
    {
      _id: 'a2',
      item: 'Luminárias LED Modernas',
      quantity: '12 unidades',
      store: 'Tok&Stok',
      deadline: '2025-08-18',
      status: 'Pendente'
    },
    {
      _id: 'a3',
      item: 'Papel de Parede Texturizado',
      quantity: '15 rolos',
      store: 'Casa&Decoração',
      deadline: '2025-08-22',
      status: 'Pendente'
    },
    {
      _id: 'a4',
      item: 'Móveis Planejados',
      quantity: '1 conjunto',
      store: 'Madeira Madeira',
      deadline: '2025-08-25',
      status: 'Pendente'
    }
  ],
  
  budget: 25000
};

/* ========================================================================== */
/* UTILITY FUNCTIONS                                                         */
/* ========================================================================== */

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function saveData() {
  localStorage.setItem('reformaAppData', JSON.stringify(appData));
}

function loadData() {
  const saved = localStorage.getItem('reformaAppData');
  if (saved) {
    appData = { ...appData, ...JSON.parse(saved) };
  }
}

/* ========================================================================== */
/* NAVIGATION AND SECTION MANAGEMENT                                         */
/* ========================================================================== */

function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Remove active class from all nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(`${sectionName}-section`);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Add active class to corresponding nav button
  const navBtn = document.querySelector(`[data-section="${sectionName}"]`);
  if (navBtn) {
    navBtn.classList.add('active');
  }
  
  // Render section content
  renderSection(sectionName);
}

function renderSection(sectionName) {
  switch(sectionName) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'cronograma':
      renderCronograma();
      break;
    case 'financeiro':
      renderFinanceiro();
      break;
    case 'documentos':
      renderDocumentos();
      break;
    case 'diario':
      renderDiario();
      break;
    case 'aquisicoes':
      renderAquisicoes();
      break;
  }
}

/* ========================================================================== */
/* DASHBOARD RENDERING                                                        */
/* ========================================================================== */

function renderDashboard() {
  renderProgress();
  renderBudgetChart();
  renderNextTasks();
}

function renderProgress() {
  const progressBar = document.getElementById('progress-bar');
  const progressLabel = document.getElementById('progress-label');
  
  if (!progressBar || !progressLabel) return;
  
  const completed = appData.tasks.filter(t => t.status === 'Concluído').length;
  const total = appData.tasks.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `${percent}% concluído (${completed} de ${total} tarefas)`;
  progressLabel.className = 'status';
  
  if (percent === 100) {
    progressLabel.classList.add('status--success');
  } else if (percent >= 50) {
    progressLabel.classList.add('status--warning');
  } else {
    progressLabel.classList.add('status--info');
  }
}

function renderBudgetChart() {
  const canvas = document.getElementById('budget-chart');
  if (!canvas) return;
  
  const totalSpent = appData.expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = Math.max(appData.budget - totalSpent, 0);
  const percentUsed = Math.round((totalSpent / appData.budget) * 100);
  
  let statusColor;
  if (percentUsed < 70) statusColor = '#21805D';
  else if (percentUsed <= 90) statusColor = '#D97706';
  else statusColor = '#DC2626';
  
  // Destroy existing chart
  if (window.budgetChart) {
    window.budgetChart.destroy();
  }
  
  const ctx = canvas.getContext('2d');
  window.budgetChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Gasto', 'Restante'],
      datasets: [{
        data: [totalSpent, remaining],
        backgroundColor: [statusColor, '#E5E7EB'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    }
  });
  
  // Update budget status text
  const wrapper = document.getElementById('budget-chart-wrapper');
  let statusDiv = wrapper.querySelector('.budget-status-text');
  if (!statusDiv) {
    statusDiv = document.createElement('div');
    statusDiv.className = 'budget-status-text';
    statusDiv.style.textAlign = 'center';
    statusDiv.style.marginTop = '10px';
    statusDiv.style.fontSize = '14px';
    statusDiv.style.fontWeight = '500';
    wrapper.appendChild(statusDiv);
  }
  
  let statusText = 'Orçamento sob controle';
  if (percentUsed > 90) statusText = 'Atenção: orçamento quase esgotado';
  else if (percentUsed > 100) statusText = 'Orçamento ultrapassado!';
  
  statusDiv.textContent = `${statusText} - ${formatCurrency(totalSpent)} de ${formatCurrency(appData.budget)}`;
  statusDiv.style.color = statusColor;
}

function renderNextTasks() {
  const container = document.getElementById('next-tasks');
  if (!container) return;
  
  const upcomingTasks = appData.tasks
    .filter(t => t.status !== 'Concluído')
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, 5);
  
  if (upcomingTasks.length === 0) {
    container.innerHTML = '<li class="empty-state">Todas as tarefas foram concluídas! 🎉</li>';
    return;
  }
  
  container.innerHTML = upcomingTasks.map(task => `
    <li class="task-item">
      <div class="task-info">
        <p class="task-title">${task.title}</p>
        <p class="task-date">${formatDate(task.startDate)} → ${formatDate(task.endDate)}</p>
        <span class="status ${getStatusClass(task.status)}">${task.status}</span>
      </div>
      <div class="task-progress">
        <div class="task-progress-bar">
          <div class="task-progress-fill" style="width: ${task.percent}%"></div>
        </div>
        <span class="task-progress-text">${task.percent}%</span>
      </div>
    </li>
  `).join('');
}

function getStatusClass(status) {
  switch(status) {
    case 'Concluído': return 'status--success';
    case 'Em Andamento': return 'status--warning';
    case 'A Fazer': return 'status--info';
    default: return 'status--info';
  }
}

/* ========================================================================== */
/* CRONOGRAMA RENDERING                                                       */
/* ========================================================================== */

function renderCronograma() {
  renderGanttView();
  renderKanbanView();
  renderListaView();
}

function renderGanttView() {
  const container = document.getElementById('gantt-chart');
  if (!container) return;
  
  container.innerHTML = `
    <div class="empty-state">
      <i class="fas fa-chart-gantt"></i>
      <h3>Gráfico de Gantt</h3>
      <p>Visualização em desenvolvimento. Em breve você poderá ver o cronograma completo com dependências entre tarefas.</p>
    </div>
  `;
}

function renderKanbanView() {
  const todoContainer = document.getElementById('kanban-todo');
  const progressContainer = document.getElementById('kanban-progress');
  const doneContainer = document.getElementById('kanban-done');
  
  if (!todoContainer || !progressContainer || !doneContainer) return;
  
  // Clear containers
  todoContainer.innerHTML = '';
  progressContainer.innerHTML = '';
  doneContainer.innerHTML = '';
  
  // Distribute tasks
  appData.tasks.forEach(task => {
    const taskElement = createKanbanTask(task);
    
    switch(task.status) {
      case 'A Fazer':
        todoContainer.appendChild(taskElement);
        break;
      case 'Em Andamento':
        progressContainer.appendChild(taskElement);
        break;
      case 'Concluído':
        doneContainer.appendChild(taskElement);
        break;
    }
  });
}

function createKanbanTask(task) {
  const div = document.createElement('div');
  div.className = 'kanban-task';
  div.innerHTML = `
    <h4>${task.title}</h4>
    <p>${formatDate(task.startDate)} - ${formatDate(task.endDate)}</p>
    <p><strong>Responsável:</strong> ${task.responsible || 'Não definido'}</p>
    <div class="task-progress-bar" style="margin-top: 8px;">
      <div class="task-progress-fill" style="width: ${task.percent}%"></div>
    </div>
  `;
  return div;
}

function renderListaView() {
  const tbody = document.getElementById('tasks-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = appData.tasks.map(task => `
    <tr>
      <td>${task.title}</td>
      <td><span class="status ${getStatusClass(task.status)}">${task.status}</span></td>
      <td>${formatDate(task.startDate)}</td>
      <td>${formatDate(task.endDate)}</td>
      <td>
        <div class="task-progress-bar" style="width: 80px;">
          <div class="task-progress-fill" style="width: ${task.percent}%"></div>
        </div>
        ${task.percent}%
      </td>
      <td>${task.responsible || 'Não definido'}</td>
      <td>
        <button class="action-btn" onclick="editTask('${task._id}')" title="Editar">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn danger" onclick="deleteTask('${task._id}')" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

/* ========================================================================== */
/* FINANCEIRO RENDERING                                                       */
/* ========================================================================== */

function renderFinanceiro() {
  renderBudgetSummary();
  renderCategoryChart();
  renderExpensesTable();
}

function renderBudgetSummary() {
  const totalSpent = appData.expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = appData.budget - totalSpent;
  
  document.getElementById('total-budget').textContent = formatCurrency(appData.budget);
  document.getElementById('total-spent').textContent = formatCurrency(totalSpent);
  document.getElementById('remaining-budget').textContent = formatCurrency(remaining);
}

function renderCategoryChart() {
  const canvas = document.getElementById('category-chart');
  if (!canvas) return;
  
  // Group expenses by category
  const categoryTotals = {};
  appData.expenses.forEach(expense => {
    categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
  });
  
  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);
  const colors = ['#21805D', '#D97706', '#DC2626', '#7C3AED', '#059669'];
  
  // Destroy existing chart
  if (window.categoryChart) {
    window.categoryChart.destroy();
  }
  
  const ctx = canvas.getContext('2d');
  window.categoryChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Gastos por Categoria',
        data: data,
        backgroundColor: colors.slice(0, labels.length),
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return formatCurrency(value);
            }
          }
        }
      }
    }
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById('expenses-table-body');
  if (!tbody) return;
  
  const sortedExpenses = [...appData.expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  tbody.innerHTML = sortedExpenses.map(expense => {
    const task = appData.tasks.find(t => t._id === expense.taskId);
    return `
      <tr>
        <td>${formatDate(expense.date)}</td>
        <td>${expense.description}</td>
        <td>${expense.category}</td>
        <td>${formatCurrency(expense.amount)}</td>
        <td>${task ? task.title : 'Não vinculado'}</td>
        <td>
          <button class="action-btn danger" onclick="deleteExpense('${expense._id}')" title="Excluir">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

/* ========================================================================== */
/* DOCUMENTOS RENDERING                                                       */
/* ========================================================================== */

function renderDocumentos() {
  renderDocumentsList();
  renderContactsList();
}

function renderDocumentsList() {
  const container = document.getElementById('documents-list');
  if (!container) return;
  
  if (appData.documents.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-file-alt"></i>
        <h3>Nenhum documento</h3>
        <p>Adicione documentos importantes da sua reforma</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = appData.documents.map(doc => `
    <div class="document-item">
      <div class="document-info">
        <div class="document-name">${doc.name}</div>
        <div class="document-type">${doc.type} • ${doc.size} • ${formatDate(doc.uploadDate)}</div>
      </div>
      <div>
        <button class="action-btn" title="Download">
          <i class="fas fa-download"></i>
        </button>
        <button class="action-btn danger" onclick="deleteDocument('${doc._id}')" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderContactsList() {
  const container = document.getElementById('contacts-list');
  if (!container) return;
  
  if (appData.contacts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-address-book"></i>
        <h3>Nenhum contato</h3>
        <p>Adicione contatos dos profissionais da sua reforma</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = appData.contacts.map(contact => `
    <div class="contact-item">
      <div class="contact-info">
        <div class="contact-name">${contact.name}</div>
        <div class="contact-role">${contact.role}</div>
        <div class="contact-role">${contact.phone} • ${contact.email}</div>
      </div>
      <div>
        <button class="action-btn" onclick="callContact('${contact.phone}')" title="Ligar">
          <i class="fas fa-phone"></i>
        </button>
        <button class="action-btn danger" onclick="deleteContact('${contact._id}')" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

/* ========================================================================== */
/* DIÁRIO RENDERING                                                           */
/* ========================================================================== */

function renderDiario() {
  const container = document.getElementById('diary-entries');
  if (!container) return;
  
  if (appData.diaryEntries.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-book"></i>
        <h3>Nenhuma entrada no diário</h3>
        <p>Comece a registrar o progresso da sua reforma</p>
      </div>
    `;
    return;
  }
  
  const sortedEntries = [...appData.diaryEntries].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  container.innerHTML = sortedEntries.map(entry => `
    <div class="diary-entry">
      <div class="diary-header">
        <div class="diary-date">${formatDate(entry.date)}</div>
        <button class="action-btn danger" onclick="deleteDiaryEntry('${entry._id}')" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <h4 class="diary-title">${entry.title}</h4>
      <div class="diary-content">${entry.description}</div>
    </div>
  `).join('');
}

/* ========================================================================== */
/* AQUISIÇÕES RENDERING                                                       */
/* ========================================================================== */

function renderAquisicoes() {
  const tbody = document.getElementById('acquisitions-table-body');
  if (!tbody) return;
  
  if (appData.acquisitions.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">
          <i class="fas fa-shopping-cart"></i>
          <h3>Nenhum item na lista</h3>
          <p>Adicione itens que precisam ser comprados</p>
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = appData.acquisitions.map(item => `
    <tr>
      <td>${item.item}</td>
      <td>${item.quantity}</td>
      <td>${item.store || 'Não definido'}</td>
      <td>${formatDate(item.deadline)}</td>
      <td>
        <span class="status ${item.status === 'Comprado' ? 'status--bought' : 'status--pending'}">
          ${item.status}
        </span>
      </td>
      <td>
        <button class="action-btn" onclick="toggleItemStatus('${item._id}')" title="Alterar Status">
          <i class="fas fa-check"></i>
        </button>
        <button class="action-btn danger" onclick="deleteAcquisition('${item._id}')" title="Excluir">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

/* ========================================================================== */
/* MODAL MANAGEMENT                                                           */
/* ========================================================================== */

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    
    // Populate task select for expense modal
    if (modalId === 'add-expense-modal') {
      populateTaskSelect();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    // Reset form
    const form = modal.querySelector('form');
    if (form) form.reset();
  }
}

function showAddTaskModal() { showModal('add-task-modal'); }
function showAddExpenseModal() { showModal('add-expense-modal'); }
function showAddContactModal() { showModal('add-contact-modal'); }
function showAddDiaryModal() { showModal('add-diary-modal'); }
function showAddItemModal() { showModal('add-item-modal'); }
function showUploadModal() { 
  alert('Funcionalidade de upload em desenvolvimento. Em breve você poderá fazer upload de documentos.'); 
}

function populateTaskSelect() {
  const select = document.getElementById('expense-task-select');
  if (!select) return;
  
  select.innerHTML = '<option value="">Selecione...</option>' + 
    appData.tasks.map(task => `<option value="${task._id}">${task.title}</option>`).join('');
}

/* ========================================================================== */
/* FORM HANDLERS                                                              */
/* ========================================================================== */

function handleAddTask(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newTask = {
    _id: generateId(),
    title: formData.get('title'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    responsible: formData.get('responsible') || 'Não definido',
    description: formData.get('description') || '',
    status: 'A Fazer',
    percent: 0
  };
  
  appData.tasks.push(newTask);
  saveData();
  closeModal('add-task-modal');
  renderSection('cronograma');
  renderDashboard();
}

function handleAddExpense(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newExpense = {
    _id: generateId(),
    description: formData.get('description'),
    amount: parseFloat(formData.get('amount')),
    date: formData.get('date'),
    category: formData.get('category'),
    taskId: formData.get('taskId') || null
  };
  
  appData.expenses.push(newExpense);
  saveData();
  closeModal('add-expense-modal');
  renderSection('financeiro');
  renderDashboard();
}

function handleAddContact(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newContact = {
    _id: generateId(),
    name: formData.get('name'),
    role: formData.get('role'),
    phone: formData.get('phone') || '',
    email: formData.get('email') || ''
  };
  
  appData.contacts.push(newContact);
  saveData();
  closeModal('add-contact-modal');
  renderSection('documentos');
}

function handleAddDiary(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newEntry = {
    _id: generateId(),
    date: formData.get('date'),
    title: formData.get('title'),
    description: formData.get('description')
  };
  
  appData.diaryEntries.push(newEntry);
  saveData();
  closeModal('add-diary-modal');
  renderSection('diario');
}

function handleAddItem(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newItem = {
    _id: generateId(),
    item: formData.get('item'),
    quantity: formData.get('quantity'),
    store: formData.get('store') || '',
    deadline: formData.get('deadline'),
    status: 'Pendente'
  };
  
  appData.acquisitions.push(newItem);
  saveData();
  closeModal('add-item-modal');
  renderSection('aquisicoes');
}

/* ========================================================================== */
/* ACTION HANDLERS                                                            */
/* ========================================================================== */

function deleteTask(taskId) {
  if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
    appData.tasks = appData.tasks.filter(t => t._id !== taskId);
    saveData();
    renderSection('cronograma');
    renderDashboard();
  }
}

function deleteExpense(expenseId) {
  if (confirm('Tem certeza que deseja excluir esta despesa?')) {
    appData.expenses = appData.expenses.filter(e => e._id !== expenseId);
    saveData();
    renderSection('financeiro');
    renderDashboard();
  }
}

function deleteContact(contactId) {
  if (confirm('Tem certeza que deseja excluir este contato?')) {
    appData.contacts = appData.contacts.filter(c => c._id !== contactId);
    saveData();
    renderSection('documentos');
  }
}

function deleteDocument(docId) {
  if (confirm('Tem certeza que deseja excluir este documento?')) {
    appData.documents = appData.documents.filter(d => d._id !== docId);
    saveData();
    renderSection('documentos');
  }
}

function deleteDiaryEntry(entryId) {
  if (confirm('Tem certeza que deseja excluir esta entrada?')) {
    appData.diaryEntries = appData.diaryEntries.filter(e => e._id !== entryId);
    saveData();
    renderSection('diario');
  }
}

function deleteAcquisition(itemId) {
  if (confirm('Tem certeza que deseja excluir este item?')) {
    appData.acquisitions = appData.acquisitions.filter(a => a._id !== itemId);
    saveData();
    renderSection('aquisicoes');
  }
}

function toggleItemStatus(itemId) {
  const item = appData.acquisitions.find(a => a._id === itemId);
  if (item) {
    item.status = item.status === 'Pendente' ? 'Comprado' : 'Pendente';
    saveData();
    renderSection('aquisicoes');
  }
}

function callContact(phone) {
  window.open(`tel:${phone}`);
}

function editTask(taskId) {
  alert('Funcionalidade de edição em desenvolvimento.');
}

/* ========================================================================== */
/* VIEW SWITCHERS                                                             */
/* ========================================================================== */

function switchView(viewName) {
  // Hide all views
  document.querySelectorAll('.view-content').forEach(view => {
    view.classList.remove('active');
  });
  
  // Remove active class from all view buttons
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show target view
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add('active');
  }
  
  // Add active class to corresponding button
  const viewBtn = document.querySelector(`[data-view="${viewName}"]`);
  if (viewBtn) {
    viewBtn.classList.add('active');
  }
}

/* ========================================================================== */
/* INITIALIZATION                                                             */
/* ========================================================================== */

function initializeApp() {
  console.log('Inicializando aplicativo completo...');
  
  // Load saved data
  loadData();
  
  // Set up navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.getAttribute('data-section');
      showSection(section);
    });
  });
  
  // Set up view switchers
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });
  
  // Set up form handlers
  document.getElementById('add-task-form').addEventListener('submit', handleAddTask);
  document.getElementById('add-expense-form').addEventListener('submit', handleAddExpense);
  document.getElementById('add-contact-form').addEventListener('submit', handleAddContact);
  document.getElementById('add-diary-form').addEventListener('submit', handleAddDiary);
  document.getElementById('add-item-form').addEventListener('submit', handleAddItem);
  
  // Set up modal close on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Set default date for forms
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    if (!input.value) input.value = today;
  });
  
  // Initialize dashboard
  showSection('dashboard');
  
  console.log('Aplicativo inicializado com sucesso!');
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);

