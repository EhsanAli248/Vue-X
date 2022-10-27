<template>
    <div>
       <h3>First Component</h3> 
       {{$store.state.count}}
       {{$store.getters.doubleCount}}<br>
       {{$store.getters.personName}}<br>
       {{$store.getters.personAge}}
    </div>
</template>
<script>
    export default{
        name:"MyComp1"
        
    }
</script>