import { createStore } from "vuex";
import axios from 'axios'
const store=createStore({
state(){
    return{
        count:5,
        person:{
            name:"Ehsan",
            age:27
        },
        postData:{},
    }

},
mutations:{
    increment(state){
        state.count++;
    },
    updatePostData(state,postData){
        state.postData=postData;

    }
    
},
actions:{
   async getpostApiCall({commit}){
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const data=response.data;
        commit('updatePostData',data)
    }

},
getters:{
    personName(state){
        return state.person.name;
    },
    personAge(state){
        return state.person.age;
    },
    doubleCount(state){
        return state.count*2;
    }

},

});
export default store;