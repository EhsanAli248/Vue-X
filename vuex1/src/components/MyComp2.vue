<template>
    <div>
       <h3>Second Component</h3> 
       
       <button @click="incrementNum">Increment Number</button><br><br>
       <button @click="callPostApi">Get Post Data</button><br>
       {{$store.state.count}}
       {{$store.state.postData}}
       
    </div>
</template>
<script>

    export default{
        name:"MyComp2",
        data(){
            return{

            }
        },
        computed:{
           
            
        },    
        methods:{
            incrementNum(){
                console.log('wroking');
                
               this.$store.commit('increment');
                console.log(this.$store.state.count)
            }
        },
        callPostApi(){
            console.log("function is working");
            this.$store.dispatch('getpostApiCall');
        }
    }

    
    
</script>