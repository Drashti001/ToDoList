<template>
<div id="app">

    <h1>Edit Task Page</h1><br><br>
    <form>
        <h3>Edit Your Task</h3>
        <input type="text" value="lists.taskname" v-model="lists.taskname" required /><br><br>
        <h3>Select Your Priority</h3>
        <input type="radio" id="high" value="High" v-model="lists.priority">
        <label for="High">High</label><br>
        <input type="radio" id="medium" name="" value="Medium" v-model="lists.priority">
        <label for="Medium">Medium</label><br>
        <input type="radio" id="Low" name="" value="Low" v-model="lists.priority">
        <label for="Low">Low</label><br>
        <button type="submit" class="btn btn-primary mb-3" v-on:click="editTask" @click.prevent="GoToHome()">Edit Task</button>&nbsp;<br>
        <a class="btn btn-primary" href="/" role="button">Back To Home</a>
    </form>
    <div v-if="submitted">
        <p>Data Submitted</p>
    </div>

</div>
</template>
<!--<template>
    <div class="input-group mb-3">
        <router-link to="/" tag="button" class="btn btn-warning">home</router-link>
        <input type="text" class="form-control" value="task.taskname" v-model="lists.taskname" />
        <button v-on:click="editTask">Add Task</button>
        <div>Selected:{{ lists.priority }}</div>
        <select class="form-select" v-model="lists.priority">
            <option disabled value="">Please select one</option>
            <option class="badge bg-success">Low</option>
            <option class="badge bg-warning">Medium</option>
            <option class="badge bg-danger">High</option>
        </select>
    </div>
</template>-->

<script>
import axios from 'axios';
export default {
    data() {
        return {

            lists: [],
            id: this.$route.params.id,
            //taskname: "",
            //priority: "",
            //status: "undone",
            //submitted: false
        }
    },

    async created() {

        try {
            const res = await axios.get(`http://localhost:3000/lists/`+this.$route.params.id);
            this.lists = res.data;
            console.log(this.lists);
        } catch (error) {
            console.log(error);
        }

    },

    methods: {
        GoToHome() {
            this.$router.push('/');
        },
        editTask: function () {
            axios.put('http://localhost:3000/lists/' + this.$route.params.id, {
                taskname: this.lists.taskname,
                priority: this.lists.priority,
                status:this.lists.status
                // taskname:"", 
                // priority:""
            }, );
        },
    }
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    background-color: beige;
}

h1 {
    text-align: center;

}
</style>
