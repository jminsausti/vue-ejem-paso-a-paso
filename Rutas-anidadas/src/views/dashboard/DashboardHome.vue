<script setup>
/**
 * DashboardHome.vue - Vista anidada por defecto del Dashboard
 * 
 * Esta vista se muestra cuando accedes a /dashboard (path: '')
 * Es la ruta hija por defecto dentro de DashboardView
 */
</script>

<template>
  <div class="dashboard-home">
    <h3>🏠 Bienvenido al Dashboard</h3>
    
    <div class="welcome-card">
      <p>Esta es la vista por defecto del Dashboard.</p>
      <p>Utiliza el menú lateral para navegar entre las diferentes secciones.</p>
    </div>

    <div class="info-section">
      <h4>💡 Concepto de Rutas Anidadas:</h4>
      <div class="concept-box">
        <p><strong>Ruta actual:</strong> <code>/dashboard</code></p>
        <p><strong>Path en el router:</strong> <code>path: ''</code></p>
        <p>
          El path vacío significa que esta vista se renderiza cuando estás 
          exactamente en la ruta padre (<code>/dashboard</code>).
        </p>
      </div>

      <div class="structure">
        <h4>📁 Estructura de renderizado:</h4>
        <pre><code>App.vue
  └─ &lt;router-view&gt; → DashboardView.vue
      └─ &lt;router-view&gt; → <strong>DashboardHome.vue</strong> (estás aquí)</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-home {
  padding: 1rem;
}

h3 {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.welcome-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.welcome-card p {
  line-height: 1.8;
  color: #666;
  margin-bottom: 0.5rem;
}

.info-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.concept-box {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.concept-box p {
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #666;
}

code {
  background: #e9ecef;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #d63384;
  font-family: 'Courier New', monospace;
}

.structure {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
}

pre {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 0.5rem;
}

pre code {
  background: none;
  padding: 0;
  color: #333;
  line-height: 1.8;
}

strong {
  color: #667eea;
}
</style>
