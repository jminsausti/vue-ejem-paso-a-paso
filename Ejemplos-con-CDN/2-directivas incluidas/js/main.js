//Vuejs 3
const app = {
	setup(){ // Composition API
		const conectado = Vue.ref(true)
		const edad = Vue.ref(35)
		return { conectado, edad }
	} 
}

Vue.createApp(app).mount('main');
