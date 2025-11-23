# 📚 Sistema CRUD de Libros — Backend (Django) + Frontend (Node.js)

Este proyecto implementa un sistema CRUD para la gestión de libros, utilizando:

- **Backend:** Django + Django REST Framework + SQLite  
- **Frontend:** Node.js + Express + EJS  
- **Comunicación:** API REST

Ideal para prácticas de diseño web, arquitectura MVC y consumo de APIs REST.

---

## 📁 Estructura del Proyecto

```
Eje 4 desarrollo web/
│
├── biblioteca/           → Backend en Django (API REST)
│   ├── manage.py
│   ├── biblioteca/
│   ├── libros/
│   ├── db.sqlite3
│   ├── venv/ (ignorado)
│   └── requirements.txt
│
├── frontend_libros/      → Frontend en Node + Express + EJS
│   ├── server.js
│   ├── views/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

# 🚀 Instalación y Ejecución

## 1️⃣ Backend — Django + SQLite

### ✔ Requisitos
- Python 3.8+
- Pip instalado

### 📍 Ubicación del backend
```
biblioteca/
```

### ▶️ Pasos

#### 1. Crear entorno virtual
```bash
python -m venv venv
```

#### 2. Activarlo (Windows)
```bash
venv\Scripts\activate
```

#### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

#### 4. Crear/actualizar base de datos
```bash
python manage.py migrate
```

#### 5. Iniciar servidor
```bash
python manage.py runserver
```

### 🌐 URL del backend
```
http://127.0.0.1:8000
```

---

# 📡 Endpoints del API

| Método | Endpoint            | Descripción            |
|--------|---------------------|------------------------|
| GET    | /api/libros/        | Listar libros          |
| POST   | /api/libros/        | Crear libro            |
| GET    | /api/libros/:id/    | Consultar un libro     |
| PUT    | /api/libros/:id/    | Actualizar libro       |
| DELETE | /api/libros/:id/    | Eliminar libro         |

---

# 2️⃣ Frontend — Node.js + Express + EJS

### ✔ Requisitos
- Node.js 18+
- npm

### 📍 Ubicación del frontend
```
frontend_libros/
```

### ▶️ Pasos

#### 1. Instalar dependencias
```bash
npm install
```

#### 2. Ejecutar servidor
```bash
node server.js
```

### 🌐 URL del frontend
```
http://localhost:3001
```

Este frontend consume automáticamente el backend en:
```
http://127.0.0.1:8000/api/libros/
```

---

# 🎨 Funcionalidades del Frontend

- Listar libros registrados  
- Crear nuevos libros  
- Editar libros existentes  
- Eliminar libros  
- Interfaz EJS estilizada con CSS  
- Consumo de API REST  

---
