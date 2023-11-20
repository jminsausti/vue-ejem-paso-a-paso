import { ref } from 'vue';

class PostServicio{
    #_posts; //generamos una variable privada de clase
    constructor () {
        this.#_posts = ref([]);
    }
    get posts(){
        return this.#_posts;
    }


    async fetchAll (){
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url)
            const json = await response.json
            this.posts.value = await json

        }catch(error){
            console.log(error);
        }
    }
}
export { PostServicio }

