<template>
  <!--
    Componente raíz de la aplicación.

    Aquí solo montamos un pequeño menú de navegación y
    el <RouterView />, que es donde se mostrará la vista
    asociada a la ruta actual.
  -->
  <div>
    <h1>Ejemplo de rutas con query</h1>

    <!--
      RouterLink genera enlaces que cambian la ruta sin recargar la página.
      Usamos el nombre de la ruta definido en el router ("home" y "lista").
    -->
    <nav>
      <RouterLink :to="{ name: 'home' }">Inicio</RouterLink>
      |
      <RouterLink :to="{ name: 'lista' }">Lista con filtros</RouterLink>
    </nav>

    <hr />

    <!--
      RouterView es el "hueco" donde se pintará el componente
      de la ruta actual (HomeView o ListaView).
    -->
    <RouterView />
  </div>
</template>

<script setup>
// En este componente no necesitamos lógica por ahora,
// solo actuamos como layout con el menú y el RouterView.
</script>
