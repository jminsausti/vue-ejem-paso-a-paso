<script setup>
/**
 * NotificationsView.vue - Vista anidada de Notificaciones
 * 
 * Ruta: /dashboard/notifications
 * Path en router: 'notifications'
 * 
 * Ejemplo de vista anidada que muestra una lista de notificaciones
 */
import { ref } from 'vue'

// Estado reactivo con lista de notificaciones
const notifications = ref([
  {
    id: 1,
    title: 'Bienvenido al sistema',
    message: 'Tu cuenta ha sido creada exitosamente',
    time: 'Hace 2 horas',
    read: false,
    type: 'success'
  },
  {
    id: 2,
    title: 'Nueva actualización',
    message: 'Hemos añadido nuevas funcionalidades al dashboard',
    time: 'Hace 1 día',
    read: false,
    type: 'info'
  },
  {
    id: 3,
    title: 'Cambio de contraseña',
    message: 'Tu contraseña fue actualizada correctamente',
    time: 'Hace 3 días',
    read: true,
    type: 'warning'
  },
  {
    id: 4,
    title: 'Mensaje del equipo',
    message: 'Gracias por usar nuestra aplicación',
    time: 'Hace 1 semana',
    read: true,
    type: 'success'
  }
])

// Función para marcar notificación como leída
const markAsRead = (notification) => {
  notification.read = true
}

// Función para eliminar notificación
const deleteNotification = (id) => {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index !== -1) {
    notifications.value.splice(index, 1)
  }
}

// Contador de no leídas
const unreadCount = ref(notifications.value.filter(n => !n.read).length)
</script>

<template>
  <div class="notifications">
    <div class="notifications-header">
      <h3>🔔 Notificaciones</h3>
      <span class="badge" v-if="unreadCount > 0">
        {{ unreadCount }} nuevas
      </span>
    </div>
    
    <div class="notifications-list">
      <!-- Si no hay notificaciones -->
      <div v-if="notifications.length === 0" class="empty-state">
        <p>✅ No tienes notificaciones</p>
      </div>

      <!-- Lista de notificaciones -->
      <div 
        v-for="notification in notifications" 
        :key="notification.id"
        class="notification-item"
        :class="{ 'unread': !notification.read, [notification.type]: true }"
      >
        <div class="notification-icon">
          <span v-if="notification.type === 'success'">✅</span>
          <span v-else-if="notification.type === 'info'">ℹ️</span>
          <span v-else-if="notification.type === 'warning'">⚠️</span>
        </div>

        <div class="notification-content">
          <h4 class="notification-title">{{ notification.title }}</h4>
          <p class="notification-message">{{ notification.message }}</p>
          <span class="notification-time">{{ notification.time }}</span>
        </div>

        <div class="notification-actions">
          <button 
            v-if="!notification.read"
            @click="markAsRead(notification)"
            class="btn-read"
            title="Marcar como leída"
          >
            ✓
          </button>
          <button 
            @click="deleteNotification(notification.id)"
            class="btn-delete"
            title="Eliminar"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <div class="route-info">
      <h4>🔗 Vista anidada:</h4>
      <p><strong>Ruta:</strong> <code>/dashboard/notifications</code></p>
      <p>
        Este componente demuestra cómo manejar estado reactivo y eventos 
        dentro de una vista anidada usando Composition API.
      </p>
    </div>
  </div>
</template>

<style scoped>
.notifications {
  padding: 1rem;
}

.notifications-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

h3 {
  color: #667eea;
  font-size: 1.5rem;
}

h4 {
  color: #333;
  margin-bottom: 1rem;
}

.badge {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.notifications-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.empty-state {
  padding: 3rem;
  text-align: center;
  color: #666;
}

.notification-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  transition: background 0.2s ease;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-item:hover {
  background: #f8f9fa;
}

.notification-item.unread {
  background: #f0f4ff;
}

.notification-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.notification-content {
  flex: 1;
}

.notification-title {
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.notification-message {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.notification-time {
  color: #999;
  font-size: 0.85rem;
}

.notification-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.btn-read,
.btn-delete {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.btn-read {
  background: #667eea;
  color: white;
}

.btn-read:hover {
  background: #5568d3;
}

.btn-delete {
  background: #e9ecef;
  color: #666;
}

.btn-delete:hover {
  background: #dc3545;
  color: white;
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
