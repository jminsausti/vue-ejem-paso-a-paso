<script setup>
/**
 * ProfileView.vue - Vista anidada de Perfil
 * 
 * Ruta: /dashboard/profile
 * Path en router: 'profile' (relativo al padre /dashboard)
 * 
 * Esta vista se renderiza dentro del <router-view> de DashboardView
 */
import { ref } from 'vue'

// Estado reactivo del usuario
const user = ref({
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
  role: 'Desarrollador',
  joined: '2024-01-15'
})
</script>

<template>
  <div class="profile">
    <h3>👤 Mi Perfil</h3>
    
    <div class="profile-card">
      <div class="avatar">{{ user.name.charAt(0) }}</div>
      
      <div class="profile-info">
        <div class="info-row">
          <span class="label">Nombre:</span>
          <span class="value">{{ user.name }}</span>
        </div>
        
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">{{ user.email }}</span>
        </div>
        
        <div class="info-row">
          <span class="label">Rol:</span>
          <span class="value">{{ user.role }}</span>
        </div>
        
        <div class="info-row">
          <span class="label">Miembro desde:</span>
          <span class="value">{{ user.joined }}</span>
        </div>
      </div>
    </div>

    <div class="route-info">
      <h4>🔗 Información de la ruta:</h4>
      <p><strong>Ruta completa:</strong> <code>/dashboard/profile</code></p>
      <p><strong>Ruta padre:</strong> <code>/dashboard</code> → DashboardView.vue</p>
      <p><strong>Ruta hija:</strong> <code>profile</code> → ProfileView.vue</p>
    </div>
  </div>
</template>

<style scoped>
.profile {
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

.profile-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
}

.info-row {
  display: flex;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;
}

.info-row:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #666;
  width: 150px;
}

.value {
  color: #333;
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
