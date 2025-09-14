# 📝 TaskList

Aplicación web para gestionar tareas de manera sencilla y rápida.  
Construida con **Vite** y gestionada con **pnpm**.

---

## 🚀 Tecnologías usadas

- [Vite](https://vitejs.dev/) – Empaquetador rápido para desarrollo frontend.
- [pnpm](https://pnpm.io/) – Gestor de dependencias eficiente.
- [ESLint](https://eslint.org/) – Estilo y buenas prácticas en el código.
- [JavaScript / TypeScript (según implementación)] – Lenguaje principal.

---

## 📂 Estructura del proyecto

```

tasklist/
│── index.html # Punto de entrada
│── package.json # Dependencias y scripts
│── pnpm-lock.yaml # Bloqueo de dependencias
│── vite.config.js # Configuración de Vite
│── eslint.config.js # Reglas de linting
│── .gitignore # Exclusiones de Git
│── src/ # Código fuente principal (crear aquí los componentes)
│── node_modules/ # Dependencias instaladas

```

---

## ⚙️ Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- [pnpm](https://pnpm.io/)

Instalar pnpm globalmente (si aún no lo tienes):

```bash
npm install -g pnpm
```

---

## 📥 Instalación

Clona este repositorio y entra en la carpeta:

```bash
git clone https://github.com/tu-usuario/tasklist.git
cd tasklist
pnpm install
```

---

## ▶️ Ejecución en desarrollo

```bash
pnpm run dev
```

Esto levantará un servidor en [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Scripts disponibles

- `pnpm run dev` → Inicia el servidor de desarrollo.
- `pnpm run build` → Genera la build de producción.
- `pnpm run preview` → Previsualiza la build.
- `pnpm run lint` → Ejecuta ESLint.

---

## 📦 Build de producción

Generar la build optimizada:

```bash
pnpm run build
```

Archivos de salida se guardarán en la carpeta `/dist`.

---

## 🧪 Testing

(⚠️ Aún no implementado, se puede integrar con Vitest o Playwright en el futuro).

---

## 👨‍💻 Autor

Proyecto creado por **\[Moises Sanchez Vasquez]**
📧 Contacto: [mcodex23@gmail.com](mailto:mcodex23@gmail.com)
