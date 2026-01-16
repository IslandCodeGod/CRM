[中文](README/README_zh.md)|English|[German](README/README_de.md)|[Español](README/README_es.md)|[Français](README/README_fr.md)|[Italiano](README/README_it.md)|[日本語](README/README_ja.md)|[한국어](README/README_ko.md)|[Nederlands](README/README_nl.md)|[Polski](README/README_pl.md)|[Português](README/README_pt.md)|[Русский](README/README_ru.md)|[العربية](README/README_ar.md)|[हिन्दी](README/README_hi.md)|[Svenska](README/README_sv.md)|[ไทย](README/README_th.md)|[Türkçe](README/README_tr.md)|[Tiếng Việt](README/README_vi.md)

# CRM System

A fully featured, user-friendly Customer Relationship Management system developed with Python Flask.

## Features

### Core Features
- ✅ **User Authentication System** - Login, registration, session management
- ✅ **Customer Management** - Complete CRUD operations, search and filter support
- ✅ **Sales Lead Tracking** - Lead status management, scoring system
- ✅ **Sales Opportunity Management** - Kanban view, sales process management
- ✅ **Contact Management** - Customer contact information management
- ✅ **Task Management** - To-do items, priority management
- ✅ **Data Analysis** - Visual charts, key metrics display

### Technical Highlights
- 🎨 **Modern UI Design** - Dark/light theme switching
- 📱 **Responsive Layout** - Mobile-friendly access
- ⚡ **Smooth Animations** - Page transitions and interactive animations
- 📊 **Data Visualization** - Chart.js for data representation
- 🔍 **Real-time Search** - Smart search and filtering
- 🎯 **Kanban Management** - Drag-and-drop sales opportunity management

## Technology Stack

### Backend
- Python 3.x
- Flask 3.0
- SQLAlchemy (ORM)
- Flask-Login (Authentication)
- SQLite (Database)

### Frontend
- HTML5
- CSS3 (Native, no frameworks)
- JavaScript (ES6+)
- Chart.js (Data visualization)

## Quick Start

### Method 1: Start with Environment Variables (Recommended)

**Configure Environment Variables:**
```bash
# Set necessary environment variables
# SECRET_KEY: Application secret key (must be complex for production)
# DATABASE_URL: Database connection URL (optional, defaults to SQLite)
# PORT: Application port (optional, defaults to 5000)

# Windows Command Prompt example
set SECRET_KEY=your_secure_secret_key_here
set PORT=5000

# Linux/Mac Terminal example
export SECRET_KEY=your_secure_secret_key_here
export PORT=5000
```

**Using Startup Scripts:**

**Windows Users:**
```bash
# Run in Command Prompt or PowerShell
start.bat
```

**Linux/Mac Users:**
```bash
chmod +x start.sh
./start.sh
```

### Method 2: Manual Startup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Start the application:
```bash
python app.py
```

3. Access the system:
Open your browser and visit `http://localhost:5000`

## Default Account

- **Username**: admin
- **Password**: admin123

## Project Structure

```
trae_crm/
├── app.py                 # Flask application entry point
├── config.py              # Configuration file
├── requirements.txt       # Python dependencies
├── models/                # Data models
│   ├── user.py           # User model
│   ├── customer.py       # Customer model
│   ├── lead.py           # Sales lead model
│   ├── opportunity.py    # Sales opportunity model
│   ├── contact.py        # Contact model
│   └── task.py           # Task model
├── routes/                # Route handlers
│   ├── auth.py           # Authentication routes
│   ├── customer.py       # Customer management routes
│   ├── lead.py           # Lead management routes
│   ├── opportunity.py    # Opportunity management routes
│   ├── contact.py        # Contact management routes
│   ├── task.py           # Task management routes
│   └── dashboard.py      # Dashboard routes
├── static/                # Static assets
│   ├── css/              # Style files
│   └── js/               # JavaScript files
└── templates/             # HTML templates
    ├── base.html         # Base template
    ├── auth/             # Authentication pages
    └── dashboard/        # Management pages
```

## Usage Guide

### 1. Login to the System

1. Open your browser and visit `http://localhost:5000`
2. Enter your username and password
3. Click the "Login" button

### 2. Dashboard

After login, you'll automatically enter the dashboard where you can see:
- Total customers, sales leads, sales opportunities, and task statistics
- Sales funnel chart
- Key metrics (new customers this month, total opportunity amount, lead conversion rate)
- Recent tasks and recent customers lists

![Dashboard Interface](README/screenshots/dashboard.png)

### 3. Customer Management

**Add Customer:**
1. Click "Customer Management" in the left menu
2. Click the "Add Customer" button in the top right corner
3. Fill in customer information (name is required)
4. Click "Save"

**Search Customers:**
- Enter keywords in the search box to search customer name, company, or email

**Filter Customers:**
- Use the status dropdown to filter (Active/Inactive/Potential)

**Edit Customer:**
1. Click the "Edit" button on the customer row
2. Modify the information
3. Click "Save"

**Delete Customer:**
1. Click the "Delete" button on the customer row
2. Confirm deletion

### 4. Sales Lead Management

**Add Lead:**
1. Click "Sales Leads" in the left menu
2. Click the "Add Lead" button
3. Fill in lead information
4. Set lead score (0-100)
5. Select lead source
6. Click "Save"

**Update Lead Status:**
- New → Contacted → Confirmed → Converted/Lost

### 5. Sales Opportunity Management

**Kanban View:**
- Sales opportunities are displayed in a kanban board
- Includes 5 stages: Lead, Qualification, Proposal, Negotiation, Closed

**Add Opportunity:**
1. Click the "Add Opportunity" button
2. Select associated customer
3. Fill in opportunity name, amount, closing probability
4. Set expected close date
5. Click "Save"

**Drag to Update Stage:**
- Directly drag opportunity cards to different stage columns

### 6. Contact Management

**Add Contact:**
1. Click the "Add Contact" button
2. Select the associated customer
3. Fill in contact information
4. Optionally check "Set as primary contact"
5. Click "Save"

### 7. Task Management

**Add Task:**
1. Click the "Add Task" button
2. Fill in task title and description
3. Set priority (Low/Medium/High/Urgent)
4. Set status (Pending/In Progress/Completed/Cancelled)
5. Set due date
6. Click "Save"

**Filter Tasks:**
- Filter by status
- Filter by priority

### 8. Theme Switching

Click the theme toggle button (🌙/☀️) in the bottom right corner to switch between dark and light themes.

## Frequently Asked Questions

### Q: How to register a new user?
A: Click the "Register Now" link on the login page, fill in username, email, and password to register.

### Q: What if I forget my password?
A: Password recovery is not supported in the current version. You can use the default administrator account to login.

### Q: Where is the data stored?
A: Data is stored in the SQLite database file `crm.db` located in the project root directory.

### Q: How to backup data?
A: Simply copy the `crm.db` file to backup all data.

### Q: Does it support multiple users?
A: Yes. Each user can only see data they created.

### Q: How to export data?
A: Data export is not supported in the current version. You can directly access the SQLite database file.

## Development Instructions

### Adding New Features
1. Create data models in `models/`
2. Add route handlers in `routes/`
3. Create page templates in `templates/`
4. Register blueprints in `app.py`

### Database Migration
Database tables and default administrator account will be automatically created when running for the first time.

### Custom Configuration
Edit the `config.py` file to modify application configuration.

## Key Points

### Technical Capabilities
1. **Full-stack Development** - Complete implementation of backend API + frontend interface
2. **Database Design** - Reasonable table structure and relationship design
3. **RESTful API** - Standard API design
4. **User Experience** - Friendly interaction design and visual effects

### Project Highlights
1. **Complete Business Process** - Full process from lead to customer to opportunity
2. **Data Visualization** - Intuitive chart display
3. **Responsive Design** - Support for multiple devices
4. **Theme Switching** - Dark/light mode support

## License

MIT License

---

Thank you for using this project!
