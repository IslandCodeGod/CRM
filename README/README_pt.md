# Trae CRM - Sistema de Gerenciamento de Relacionamento com Clientes

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Visão Geral do Projeto

O Trae CRM é um sistema de Gerenciamento de Relacionamento com Clientes (CRM) de código aberto projetado para pequenas e médias empresas. Ele oferece funcionalidades completas para gerenciar clientes, oportunidades de venda, leads e atividades de follow-up, ajudando as empresas a melhorar seu desempenho de vendas e satisfação do cliente.

## ✨ Recursos Principais

- 🎯 **Gerenciamento de Clientes**: Adicione, edite, pesquise e gerencie informações do cliente
- 📊 **Painel de Controle**: Visualize estatísticas de vendas e métricas-chave
- 💰 **Oportunidades de Venda**: Acompanhe oportunidades de venda através do funil de vendas
- 📈 **Gerenciamento de Leads**: Gerencie leads potenciais e taxas de conversão
- 📞 **Contatos**: Mantenha contatos de clientes organizados
- 📝 **Tarefas**: Planeje e gerencie atividades e follow-ups
- 🔐 **Controle de Acesso**: Sistema de autenticação seguro com funções de usuário

## 🛠️ Stack Tecnológico

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Banco de Dados**: SQLite
- **Estrutura**: MVC (Model-View-Controller)

## 🚀 Início Rápido

### Pré-requisitos

- Python 3.8+
- pip (gerenciador de pacotes Python)

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Instale as dependências
   ```bash
   pip install -r requirements.txt
   ```

3. Inicie a aplicação
   ```bash
   python run.py
   ```

4. Abra o navegador e acesse `http://localhost:5000`

### Conta de Teste

- **Nome de Usuário**: admin
- **Senha**: admin123

## 📁 Estrutura do Projeto

```
trae_crm/
├── app/
│   ├── __init__.py          # Inicialização da aplicação Flask
│   ├── models/              # Modelos de dados (ORM)
│   ├── routes/              # Definições de rotas (controladores)
│   ├── static/              # Arquivos estáticos (CSS, JS, imagens)
│   ├── templates/           # Modelos HTML
│   └── utils/               # Utilitários e funções de suporte
├── config.py                # Configurações da aplicação
├── run.py                   # Ponto de entrada principal
├── requirements.txt         # Dependências do projeto
└── README.md                # Documentação do projeto
```

## 📖 Guia de Uso

### 1. Painel de Controle

O painel de controle fornece uma visão geral das métricas-chave do seu negócio:

- **Métricas de Vendas**: Total de clientes, leads, oportunidades e receita esperada
- **Funil de Vendas**: Visualize o progresso das oportunidades de venda
- **Métricas-chave**: Novos clientes este mês, taxa de conversão, etc.
- **Atividades Recentes**: Últimas atividades e tarefas

![Painel de Controle](screenshots/dashboard.png)

### 2. Gerenciamento de Clientes

- **Adicionar Cliente**: Preencha o formulário para adicionar novos clientes
- **Lista de Clientes**: Exiba todos os clientes com recursos de filtragem e ordenação
- **Detalhes do Cliente**: Visualize e edite informações do cliente
- **Pesquisar Clientes**: Encontre clientes por nome, e-mail ou telefone

### 3. Gerenciamento de Oportunidades de Venda

- **Adicionar Oportunidade**: Crie novas oportunidades de venda
- **Funil de Vendas**: Acompanhe o status das oportunidades através das fases
- **Avaliação de Oportunidades**: Atribua valores e probabilidades de fechamento
- **Previsão de Receita**: Calcule a receita esperada a partir de oportunidades

### 4. Gerenciamento de Leads

- **Adicionar Lead**: Insira novos leads potenciais
- **Qualificação**: Avalie e qualifique leads
- **Conversão**: Acompanhe a conversão de leads em clientes
- **Análise**: Exiba estatísticas de conversão

### 5. Contatos

- **Gerenciamento de Contatos**: Mantenha contatos de clientes organizados
- **Informações de Contato**: Número de telefone, e-mail, localização, etc.
- **Categorização**: Categorize contatos para acesso fácil

### 6. Tarefas

- **Criar Tarefa**: Planeje reuniões, ligações ou tarefas
- **Prazos**: Defina prazos para tarefas
- **Conclusão**: Marque tarefas como concluídas
- **Exibição**: Exiba tarefas em uma lista ou calendário

## ❓ Perguntas Frequentes

**Q: Posso mudar o banco de dados de SQLite para MySQL/PostgreSQL?**
A: Sim, você pode modificar as configurações no arquivo `config.py` para usar um banco de dados diferente.

**Q: Como posso adicionar novas funções de usuário?**
A: Você pode modificar o modelo User em `app/models/user.py` e adicionar novas funções.

**Q: É possível personalizar a interface?**
A: Sim, você pode modificar os modelos HTML em `app/templates/` e os arquivos CSS em `app/static/css/`.

## 🛠️ Desenvolvimento

### Ambiente de Desenvolvimento

1. Crie um ambiente virtual
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Instale as dependências de desenvolvimento
   ```bash
   pip install -r requirements.txt
   ```

3. Execute o aplicativo no modo de desenvolvimento
   ```bash
   python run.py
   ```

### Contribuir

1. Faça um fork do repositório
2. Crie um branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Push para o branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Tarefas a Fazer

- [ ] Integrar APIs de e-mail e SMS
- [ ] Adicionar recursos avançados de relatórios
- [ ] Implementar exportação de dados (Excel, PDF)
- [ ] Adicionar notificações push
- [ ] Melhorar a interface móvel

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contatos

- **Projeto**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **E-mail**: your.email@example.com
- **Problemas**: [Relate um problema](https://github.com/yourusername/trae_crm/issues)

---

Obrigado por escolher o Trae CRM! 🎉