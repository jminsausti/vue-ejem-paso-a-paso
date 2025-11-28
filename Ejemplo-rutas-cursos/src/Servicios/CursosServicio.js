export const cursos = [
    {
        id: 1,
        titulo: "Introducción a Vue.js",
        descripcion: "Aprende los fundamentos de Vue.js y cómo crear aplicaciones web interactivas.",
        autor: "Juan Pérez",
        fecha: "2024-06-01"
    },
    {
        id: 2,
        titulo: "Vue.js Avanzado",
        descripcion: "Profundiza en Vue.js con Vuex, Vue Router y buenas prácticas.",
        autor: "María López",
        fecha: "2024-06-10"
    },
    {
        id: 3,
        titulo: "Desarrollo Fullstack con Vue y Node.js",
        descripcion: "Construye aplicaciones completas usando Vue en el frontend y Node.js en el backend.",
        autor: "Carlos García",
        fecha: "2024-06-15"
    }
];

// Simula una llamada asíncrona para obtener los cursos
export function obtenerCursos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cursos);
        }, 500);
    });
}

// Simula una llamada asíncrona para obtener un curso por ID
export function obtenerCursoPorId(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const curso = cursos.find(c => c.id === parseInt(id));
            resolve(curso);
        }, 500);
    });
}   