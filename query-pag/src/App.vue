<template>
  <div id="app">
    <header>
      <h1>Vue 3 - JSONPlaceholder Demo</h1>
      <nav>
        <router-link to="/pagination">Paginación</router-link>
        <router-link to="/filters">Filtros</router-link>
        <router-link to="/search">Búsqueda</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
}

header {
  background: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  font-size: 24px;
  margin-bottom: 15px;
}

nav {
  display: flex;
  gap: 15px;
}

nav a {
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s;
}

nav a:hover {
  background: #f0f0f0;
}

nav a.router-link-active {
  background: #333;
  color: white;
  border-color: #333;
}

main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #333;
  background: white;
  font-size: 14px;
  border-radius: 4px;
}

button:hover:not(:disabled) {
  background: #333;
  color: white;
}

button:disabled {
  opacity: 0.3;
  cursor: default;
}

input, select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 13px;
}
</style>
