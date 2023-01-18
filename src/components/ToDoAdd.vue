<template>
    <div id="app">
    
        <h1>Add Task Page</h1><br><br>
        <form>
            <h4>Add New Task <input type="text" placeholder="enter your task" v-model="taskname" required /></h4><br>
            
            <h4>Select Your Priority</h4><br>
            <input type="radio" id="high" value="High" v-model="priority">
            <label for="High" style="font-size:20px">High</label><br>
              <input type="radio" id="medium" name="" value="Medium" v-model="priority">
            <label for="Medium" style="font-size:20px">Medium</label><br>
            <input type="radio" id="Low" name="" value="Low" v-model="priority">
            <label for="Low" style="font-size:20px">Low</label><br>
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
    
                 lists: [],
                //taskname: "",
               // priority: null,
               // status: "undone",
                submitted: false
            }
    
        },
        methods: {
            async addItem() {
               const res=  await axios
                    .post(`http://localhost:3000/lists`, {
                        taskname: this.taskname,
                        priority: this.priority,
                        status: false,
                    });
                    this.lists = [...this.lists, res.data];
                    this.taskname = "";
                    this.priority = "";
                    
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
        background-color:antiquewhite;
    }
    
    h1 {

        text-align: center;
    
    }
 
    </style>
    