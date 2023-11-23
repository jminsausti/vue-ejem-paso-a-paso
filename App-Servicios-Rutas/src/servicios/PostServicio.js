import { ref } from 'vue';

class PostServicio{
    #posts; //generamos una variable privada de clase
    #post; //App-Seevicios-Rutas=>generamos una variable para el post en particular 
    constructor () {
        this.#posts = ref([]); //de esta manera conseguimos que esta variable sea reactiva y la podamos usar en el template
        this.#post = ref({}); //App-Servicios-Rutas => construimos un objeto para el post
    }
    get posts(){
        return this.#posts;
    }

    get post(){
        return this.#post // //App-Servicios-Rutas => creamos el getter
    }

    //función que me recoge todos los posts
    async fetchAll (){
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const json = await response.json();
            this.#posts.value = await json //recordad que ponemos el value porque es un elemento reactivo

        }catch(error){
            console.log(error);
        }
    }

    //funcion que me recoge el post indicado por el id
    async fetchById(id){
        try{
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            this.#post.value = await json;
        }catch(error){
            console.log(error);
        }
    }
}
export { PostServicio }

