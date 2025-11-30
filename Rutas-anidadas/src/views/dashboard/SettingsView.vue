<script setup>
/**
 * SettingsView.vue - Vista anidada de Configuración
 * 
 * Ruta: /dashboard/settings
 * Path en router: 'settings'
 * 
 * Ejemplo de vista anidada con formulario interactivo
 */
import { ref } from 'vue'

// Estado reactivo de configuración
const settings = ref({
  notifications: true,
  darkMode: false,
  language: 'es',
  emailUpdates: true
})

// Función para guardar configuración
const saveSettings = () => {
  alert('✅ Configuración guardada correctamente')
  console.log('Configuración guardada:', settings.value)
}
</script>

<template>
  <div class="settings">
    <h3>⚙️ Configuración</h3>
    
    <div class="settings-card">
      <form @submit.prevent="saveSettings">
        <!-- Notificaciones -->
        <div class="setting-item">
          <label class="setting-label">
            <input type="checkbox" v-model="settings.notifications">
            <span>Activar notificaciones</span>
          </label>
          <p class="setting-description">
            Recibe notificaciones sobre actualizaciones y mensajes
          </p>
        </div>

        <!-- Modo Oscuro -->
        <div class="setting-item">
          <label class="setting-label">
            <input type="checkbox" v-model="settings.darkMode">
            <span>Modo oscuro</span>
          </label>
          <p class="setting-description">
            Cambia la apariencia de la interfaz a tema oscuro
          </p>
        </div>

        <!-- Idioma -->
        <div class="setting-item">
          <label class="setting-label">
            <span>Idioma</span>
          </label>
          <select v-model="settings.language" class="setting-select">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <!-- Actualizaciones por email -->
        <div class="setting-item">
          <label class="setting-label">
            <input type="checkbox" v-model="settings.emailUpdates">
            <span>Recibir actualizaciones por email</span>
          </label>
          <p class="setting-description">
            Te enviaremos un resumen semanal de actividades
          </p>
        </div>

        <!-- Botón guardar -->
        <button type="submit" class="btn-save">
          💾 Guardar Configuración
        </button>
      </form>
    </div>

    <div class="route-info">
      <h4>🔗 Ruta anidada:</h4>
      <p><strong>URL:</strong> <code>/dashboard/settings</code></p>
      <p>
        Esta vista comparte el layout de <code>DashboardView</code>, 
        manteniendo el sidebar visible mientras cambia el contenido principal.
      </p>
    </div>
  </div>
</template>

<style scoped>
.settings {
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
}

.settings-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.setting-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}

.setting-item:last-of-type {
  border-bottom: none;
}

.setting-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
}

.setting-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.setting-description {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
}

.setting-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
}

.setting-select:focus {
  outline: none;
  border-color: #667eea;
}

.btn-save {
  width: 100%;
  padding: 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.btn-save:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.route-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.route-info p {
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

strong {
  color: #667eea;
}
</style>
