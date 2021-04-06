<template>
    <section>
        <div class="block">
            <b-radio v-model="radio"
                name="name"
                native-value="Flint">
                Flint
            </b-radio>
            <b-radio v-model="radio"
                name="name"
                native-value="Silver">
                Silver
            </b-radio>
            <b-radio v-model="radio"
                name="name"
                native-value="Jack">
                Jack
            </b-radio>
           
        </div>
        <p class="content">
            <b>Selection:</b>
            {{ radio }}
        </p>
    </section>
</template>

<script>
import Vue from 'vue';
import {Radio} from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Radio);
    export default {
        data() {
            return {
                radio: 'Jack'
            }
        }
    }
</script>
</script>

<style>

</style>