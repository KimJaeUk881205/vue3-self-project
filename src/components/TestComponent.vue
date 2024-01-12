<template>
  <div>
    <h2>Test Component</h2>
    Test Page
  </div>
</template>

<script>
import { ref, onMounted, inject } from 'vue' 

export default {
    name: "TestComponent",
    setup(){
        const axios = inject('axios');
        const testdata = ref(null);

        onMounted(()=>{
            axios.get('test')
                .then(response => {
                    alert(1);
                })
                .catch(error => {
                    alert(2);
                })
                .then(() => {
                    console.log("finally");
                });
        });

        return {testdata};
    }
  
}
</script>

<style scoped>

</style>