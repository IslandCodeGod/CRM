[中文](README_zh.md)|[English](README_en.md)|[German](README_de.md)|Español|[Français](README_fr.md)|[Italiano](README_it.md)|[日本語](README_ja.md)|[한국어](README_ko.md)|[Nederlands](README_nl.md)|[Polski](README_pl.md)|[Português](README_pt.md)|[Русский](README_ru.md)|[العربية](README_ar.md)|[हिन्दी](README_hi.md)|[Svenska](README_sv.md)|[ไทย](README_th.md)|[Türkçe](README_tr.md)|[Tiếng Việt](README_vi.md)

# Sistema CRM

Un sistema de gestión de relaciones con clientes completo y fácil de usar, desarrollado con Python Flask.

## Características

### Características Principales
- ✅ **Sistema de Autenticación de Usuarios** - Inicio de sesión, registro, gestión de sesiones
- ✅ **Gestión de Clientes** - Operaciones CRUD completas, soporte de búsqueda y filtrado
- ✅ **Seguimiento de Prospectos** - Gestión de estado de prospectos, sistema de puntuación
- ✅ **Gestión de Oportunidades de Venta** - Vista de tablero Kanban, gestión del proceso de venta
- ✅ **Gestión de Contactos** - Gestión de información de contactos de clientes
- ✅ **Gestión de Tareas** - Elementos pendientes, gestión de prioridades
- ✅ **Análisis de Datos** - Gráficos visuales, presentación de métricas clave

### Destacados Técnicos
- 🎨 **Diseño de UI Moderno** - Cambio de tema oscuro/claro
- 📱 **Diseño Responsivo** - Soporte de acceso móvil
- ⚡ **Animaciones Suaves** - Transiciones de página y animaciones interactivas
- 📊 **Visualización de Datos** - Chart.js para representación de datos
- 🔍 **Búsqueda en Tiempo Real** - Búsqueda inteligente y filtrado
- 🎯 **Gestión de Kanban** - Gestión de oportunidades de venta por arrastrar y soltar

## Pila Tecnológica

### Backend
- Python 3.x
- Flask 3.0
- SQLAlchemy (ORM)
- Flask-Login (Autenticación)
- SQLite (Base de Datos)

### Frontend
- HTML5
- CSS3 (Nativo, sin frameworks)
- JavaScript (ES6+)
- Chart.js (Visualización de datos)

## Inicio Rápido

### Método 1: Iniciar con Variables de Entorno (Recomendado)

**Configurar Variables de Entorno:**
```bash
# Establecer variables de entorno necesarias
# SECRET_KEY: Clave secreta de la aplicación (debe ser compleja para producción)
# DATABASE_URL: URL de conexión a la base de datos (opcional, por defecto SQLite)
# PORT: Puerto de la aplicación (opcional, por defecto 5000)

# Ejemplo para Símbolo del Sistema de Windows
set SECRET_KEY=your_secure_secret_key_here
set PORT=5000

# Ejemplo para Terminal de Linux/Mac
export SECRET_KEY=your_secure_secret_key_here
export PORT=5000
```

**Usando Scripts de Inicio:**

**Usuarios de Windows:**
```bash
# Ejecutar en Símbolo del Sistema o PowerShell
start.bat
```

**Usuarios de Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

### Método 2: Inicio Manual

1. Instalar dependencias:
```bash
pip install -r requirements.txt
```

2. Iniciar la aplicación:
```bash
python app.py
```

3. Acceder al sistema:
Abrir el navegador y visitar `http://localhost:5000`

## Cuenta Predeterminada

- **Nombre de usuario**: admin
- **Contraseña**: admin123

## Estructura del Proyecto

```
trae_crm/
├── app.py                 # Punto de entrada de la aplicación Flask
├── config.py              # Archivo de configuración
├── requirements.txt       # Dependencias de Python
├── models/                # Modelos de datos
│   ├── user.py           # Modelo de usuario
│   ├── customer.py       # Modelo de cliente
│   ├── lead.py           # Modelo de prospecto
│   ├── opportunity.py    # Modelo de oportunidad
│   ├── contact.py        # Modelo de contacto
│   └── task.py           # Modelo de tarea
├── routes/                # Controladores de rutas
│   ├── auth.py           # Rutas de autenticación
│   ├── customer.py       # Rutas de gestión de clientes
│   ├── lead.py           # Rutas de gestión de prospectos
│   ├── opportunity.py    # Rutas de gestión de oportunidades
│   ├── contact.py        # Rutas de gestión de contactos
│   ├── task.py           # Rutas de gestión de tareas
│   └── dashboard.py      # Rutas de dashboard
├── static/                # Recursos estáticos
│   ├── css/              # Archivos de estilo
│   └── js/               # Archivos JavaScript
└── templates/             # Plantillas HTML
    ├── base.html         # Plantilla base
    ├── auth/             # Páginas de autenticación
    └── dashboard/        # Páginas de gestión
```

## Guía de Uso

### 1. Iniciar Sesión en el Sistema

1. Abrir el navegador y visitar `http://localhost:5000`
2. Ingresar nombre de usuario y contraseña
3. Hacer clic en el botón "Iniciar Sesión"

### 2. Dashboard

Después de iniciar sesión, se accede automáticamente al dashboard donde se puede ver:
- Estadísticas totales de clientes, prospectos, oportunidades de venta y tareas
- Gráfico de embudo de ventas
- Métricas clave (clientes nuevos este mes, monto total de oportunidades, tasa de conversión de prospectos)
- Listas de tareas recientes y clientes recientes

![Interfaz de Dashboard](screenshots/dashboard.png)

### 3. Gestión de Clientes

**Agregar Cliente:**
1. Hacer clic en "Gestión de Clientes" en el menú izquierdo
2. Hacer clic en el botón "Agregar Cliente" en la esquina superior derecha
3. Completar la información del cliente (nombre es obligatorio)
4. Hacer clic en "Guardar"

**Buscar Clientes:**
- Ingresar palabras clave en el cuadro de búsqueda para buscar por nombre, empresa o correo electrónico

**Filtrar Clientes:**
- Usar el menú desplegable de estado para filtrar (Activo/Inactivo/Potencial)

**Editar Cliente:**
1. Hacer clic en el botón "Editar" en la fila del cliente
2. Modificar la información
3. Hacer clic en "Guardar"

**Eliminar Cliente:**
1. Hacer clic en el botón "Eliminar" en la fila del cliente
2. Confirmar la eliminación

### 4. Gestión de Prospectos

**Agregar Prospecto:**
1. Hacer clic en "Prospectos" en el menú izquierdo
2. Hacer clic en el botón "Agregar Prospecto"
3. Completar la información del prospecto
4. Establecer puntuación del prospecto (0-100)
5. Seleccionar fuente del prospecto
6. Hacer clic en "Guardar"

**Actualizar Estado del Prospecto:**
- Nuevo → Contactado → Confirmado → Convertido/Perdido

### 5. Gestión de Oportunidades de Venta

**Vista de Kanban:**
- Las oportunidades de venta se muestran en un tablero Kanban
- Incluye 5 etapas: Prospecto, Calificación, Propuesta, Negociación, Cerrado

**Agregar Oportunidad:**
1. Hacer clic en el botón "Agregar Oportunidad"
2. Seleccionar cliente asociado
3. Completar nombre de la oportunidad, monto, probabilidad de cierre
4. Establecer fecha prevista de cierre
5. Hacer clic en "Guardar"

**Actualizar Etapa por Arrastre:**
- Arrastrar directamente las tarjetas de oportunidad a diferentes columnas de etapa

### 6. Gestión de Contactos

**Agregar Contacto:**
1. Hacer clic en el botón "Agregar Contacto"
2. Seleccionar cliente asociado
3. Completar información del contacto
4. Marcar opcionalmente "Establecer como contacto principal"
5. Hacer clic en "Guardar"

### 7. Gestión de Tareas

**Agregar Tarea:**
1. Hacer clic en el botón "Agregar Tarea"
2. Completar título y descripción de la tarea
3. Establecer prioridad (Baja/Mediana/Alta/Urgente)
4. Establecer estado (Pendiente/En Progreso/Completada/Cancelada)
5. Establecer fecha de vencimiento
6. Hacer clic en "Guardar"

**Filtrar Tareas:**
- Filtrar por estado
- Filtrar por prioridad

### 8. Cambio de Tema

Hacer clic en el botón de cambio de tema (🌙/☀️) en la esquina inferior derecha para cambiar entre temas oscuro y claro.

## Preguntas Frecuentes

### P: ¿Cómo registrar un nuevo usuario?
R: Hacer clic en el enlace "Regístrate ahora" en la página de inicio de sesión, completar nombre de usuario, correo electrónico y contraseña para registrarse.

### P: ¿Qué hacer si olvido mi contraseña?
R: La recuperación de contraseña no está disponible en la versión actual. Puede iniciar sesión con la cuenta de administrador predeterminada.

### P: ¿Dónde se almacenan los datos?
R: Los datos se almacenan en el archivo de base de datos SQLite `crm.db` ubicado en el directorio raíz del proyecto.

### P: ¿Cómo hacer una copia de seguridad de los datos?
R: Simplemente copie el archivo `crm.db` para hacer una copia de seguridad de todos los datos.

### P: ¿Soporta múltiples usuarios?
R: Sí. Cada usuario solo puede ver los datos que ha creado.

### P: ¿Cómo exportar datos?
R: La exportación de datos no está disponible en la versión actual. Puede acceder directamente al archivo de base de datos SQLite.

## Instrucciones de Desarrollo

### Agregar Nuevas Funciones
1. Crear modelos de datos en `models/`
2. Agregar controladores de rutas en `routes/`
3. Crear plantillas de página en `templates/`
4. Registrar blueprints en `app.py`

### Migración de Base de Datos
Las tablas de base de datos y la cuenta de administrador predeterminada se crearán automáticamente al ejecutar por primera vez.

### Configuración Personalizada
Editar el archivo `config.py` para modificar la configuración de la aplicación.

## Puntos Clave

### Capacidades Técnicas
1. **Desarrollo Full-Stack** - Implementación completa de API backend + interfaz frontend
2. **Diseño de Base de Datos** - Estructura de tablas y diseño de relaciones razonables
3. **API RESTful** - Diseño de API estandarizado
4. **Experiencia de Usuario** - Diseño de interacción amigable y efectos visuales

### Destacados del Proyecto
1. **Proceso de Negocio Completo** - Proceso completo desde prospecto a cliente a oportunidad
2. **Visualización de Datos** - Representación gráfica intuitiva
3. **Diseño Responsivo** - Soporte para múltiples dispositivos
4. **Cambio de Tema** - Soporte para modo oscuro/claro

## Licencia

Licencia MIT

## Información de Contacto

Para cualquier pregunta, sugerencia o si necesita la versión completa/desarrollo personalizado, por favor póngase en contacto a través de:

- **Correo Electrónico**: austinlive666@gmail.com (Recomendado)
- **Discord**: [https://discord.gg/7AN9PuGn](https://discord.gg/7AN9PuGn)

---

¡Gracias por usar este proyecto!