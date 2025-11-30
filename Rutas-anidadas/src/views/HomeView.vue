<script setup>
/**
 * HomeView.vue - Vista de inicio
 * Vista simple que explica el concepto de rutas anidadas
 */
</script>

<template>
  <div class="home">
    <h2>🏠 Página de Inicio</h2>
    <div class="info-box">
      <h3>¿Qué son las rutas anidadas?</h3>
      <p>
        Las <strong>rutas anidadas</strong> permiten crear estructuras de navegación jerárquicas
        donde una vista padre contiene un <code>&lt;router-view&gt;</code> que renderiza vistas hijas.
      </p>
      
      <h4>Características principales:</h4>
      <ul>
        <li>📁 Estructura jerárquica de rutas (padre → hijos)</li>
        <li>🔄 Múltiples niveles de <code>&lt;router-view&gt;</code></li>
        <li>🎯 URLs semánticas: <code>/dashboard/profile</code></li>
        <li>♻️ Reutilización del layout del componente padre</li>
      </ul>

      <div class="example">
        <h4>Ejemplo práctico:</h4>
        <p>Haz clic en <strong>Dashboard</strong> para ver un ejemplo de rutas anidadas.</p>
        <p>Dentro del Dashboard podrás navegar entre secciones (Perfil, Configuración, Notificaciones)
           sin recargar el layout principal.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 1rem;
}

h2 {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.info-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

h3 {
  color: #333;
  margin-bottom: 1rem;
}

h4 {
  color: #555;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

p {
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

code {
  background: #e9ecef;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #d63384;
  font-family: 'Courier New', monospace;
}

ul {
  margin-left: 1.5rem;
  line-height: 2;
  color: #666;
}

.example {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  border: 1px solid #dee2e6;
}

.example p {
  margin-bottom: 0.5rem;
}

strong {
  color: #667eea;
}
</style>
