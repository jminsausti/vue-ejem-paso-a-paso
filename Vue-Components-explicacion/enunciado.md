# Práctica Vue 3 – Componentes + Composition API + API externa

## Historia: Explorador de personajes de Rick & Morty

Vas a construir, paso a paso, una pequeña aplicación que muestra personajes de la serie *Rick & Morty* usando la API pública:

- URL base: `https://rickandmortyapi.com/api/character`

Trabajaremos en **tres pasos**. En cada paso irás refactorizando y añadiendo componentes.

---

## Paso 1 – Componente básico con petición a la API

### Objetivo

Crear un componente que haga una petición a la API de Rick & Morty y muestre una lista sencilla de personajes, usando la Composition API.

### Requisitos

1. Crea un proyecto/base de Vue 3 (o usa el ya preparado por el profesor) y un componente `CharacterList.vue`.
2. Dentro de `CharacterList`, usa la Composition API (`<script setup>` o `setup()`) para:
   - Definir un estado reactivo para:
     - `characters`: lista de personajes.
     - `isLoading`: indicador de carga.
     - `error`: mensaje de error si falla la petición.
   - En el ciclo de vida `onMounted`, realiza una petición `fetch` a `https://rickandmortyapi.com/api/character`.
3. Mientras se está cargando, muestra el texto **"Cargando personajes..."**.
4. Si hay error en la petición, muestra un mensaje de error en pantalla.
5. Si la petición tiene éxito, muestra en la vista una lista con:
   - El **nombre** de cada personaje.
   - La **imagen** de cada personaje.

### Resultado esperado

Una página sencilla donde se ve un listado de personajes con su nombre e imagen, cargados desde la API al montar el componente.

---

## Paso 2 – Separar en componentes y usar props

### Objetivo

Refactorizar la vista para que cada personaje se muestre en un componente reutilizable, usando `props`.

### Requisitos

1. Mantén el componente `CharacterList.vue` como responsable de:
   - Hacer la petición a la API.
   - Guardar el array de personajes en un estado reactivo.
2. Crea un nuevo componente `CharacterCard.vue` que reciba **un personaje** mediante `props`.
3. En `CharacterCard.vue`, muestra al menos:
   - El **nombre** del personaje.
   - La **imagen**.
   - El **estado** (vivo, muerto, desconocido).
   - La **especie**.
4. En `CharacterList.vue`, usa `v-for` para recorrer la lista de personajes y, por cada uno, renderiza un componente `CharacterCard`, pasándole el personaje como `prop`.
5. Asegúrate de usar una `key` adecuada en el `v-for` (por ejemplo, el `id` del personaje).

### Resultado esperado

La funcionalidad sigue siendo la misma que en el Paso 1, pero ahora la interfaz está compuesta por:

- Un componente padre `CharacterList` que gestiona datos y la petición.
- Un componente hijo `CharacterCard` que se encarga de mostrar la tarjeta de cada personaje a partir de las `props`.

---

## Paso 3 – Nuevo componente con interacción (filtro de búsqueda)

### Objetivo

Añadir un componente nuevo que permita **filtrar personajes por nombre**, usando eventos personalizados o `v-model` con componentes.

### Requisitos

1. Mantén los componentes anteriores (`CharacterList` y `CharacterCard`).
2. Crea un nuevo componente `CharacterFilter.vue` que contenga:
   - Un campo de texto (`input`) para escribir un término de búsqueda (nombre del personaje).
3. El componente `CharacterFilter` debe comunicar el término de búsqueda al componente padre (`CharacterList`):
   - Opción A: Emitiendo un evento personalizado (por ejemplo, `update:search` o `search-change`).
   - Opción B: Implementando un `v-model` personalizado para el valor de búsqueda.
4. En `CharacterList`, guarda el término de búsqueda en un estado reactivo (`searchTerm`).
5. Usa `searchTerm` para **filtrar** los personajes que se muestran:
   - O bien haciendo una nueva petición a la API con `?name=...`.
   - O bien filtrando en el cliente los personajes ya cargados (según indique el profesor).
6. Muestra solo los personajes que coincidan con el término de búsqueda.

### Resultado esperado

La aplicación ahora permite:

- Ver la lista de personajes.
- Mostrar cada personaje con un componente `CharacterCard`.
- Filtrar los personajes por nombre desde un componente `CharacterFilter` que se comunica con el componente padre.

---

## Resumen de componentes por paso

- **Paso 1**: `CharacterList` (todo en uno: petición + renderizado).
- **Paso 2**: `CharacterList` (datos + petición) y `CharacterCard` (presentación de cada personaje vía `props`).
- **Paso 3**: `CharacterList` (datos + lógica), `CharacterCard` (presentación) y `CharacterFilter` (búsqueda + eventos/`v-model`).

El profesor proporcionará la estructura de carpetas y los ficheros base para cada paso dentro del proyecto `Vue-Components-explicacion`.
