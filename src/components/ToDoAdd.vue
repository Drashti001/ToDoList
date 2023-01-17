<template>
    <div id="app">
    
        <h1>Add New Task Page</h1><br><br>
        <form>
            <h3>Add New Task</h3>
            <input type="text" placeholder="enter task" v-model="taskname" required /><br><br>
            <h3>Select Your Priority</h3>
            <input type="radio" id="high" value="High" v-model="priority">
            <label for="High">High</label><br>
              <input type="radio" id="medium" name="" value="Medium" v-model="priority">
            <label for="Medium">Medium</label><br>
            <input type="radio" id="Low" name="" value="Low" v-model="priority">
            <label for="Low">Low</label><br>
            <button type="submit" class="btn btn-primary mb-3" v-on:click="addItem()" @click.prevent="GoToHome()" >Add Task</button>&nbsp;<br>
            <a class="btn btn-primary" href="/" role="button">Back To Home</a>
        </form>
        <div v-if="submitted">
            <p>Data Submitted</p>
        </div>
    
    </div>
    </template>
    
    <script>
    import axios from "axios";
    export default {
        data() {
            return {
    
                // lists: [],
                taskname: "",
                priority: null,
                status: "undone",
                submitted: false
            }
    
        },
        methods: {
            async addItem() {
               const res=  await axios
                    .post(`http://localhost:3000/lists`, {
                        taskname: this.taskname,
                        priority: this.priority,
                        status: this.status
                    })
                    .then(function (data) {
                        console.log(data);
                        this.taskname = "";
                        this.priority = "";
                        this.status="";
                        this.submitted = true;
                        this.lists = [...this.lists, res.data];
                    });
            },
            GoToHome(){
                    this.$router.push('/');
            }
    
        },
    }
    </script>
    
    <style scoped>
    div {
        text-align: center;
        background-color: beige;
    }
    
    h1 {
        text-align: center;
    
    }
    </style>
    