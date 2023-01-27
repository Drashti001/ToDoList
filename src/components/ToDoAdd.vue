<template>
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            Add New Task
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="title">Enter Task </label>
                <input type="text" id="title" class="form-control" v-model="taskname" required />
            </div>
            <div class="form-group">
                <!-- <label for="body">Select Priority</label>
                <textarea rows="5" id="body" class="form-control" v-model="dataObj.body" /> -->
                <label>Select Your Priority</label><br>
                <input type="radio" id="high" value="High" v-model="priority">
                <label for="High" style="font-size:20px">High</label><br>
                <input type="radio" id="medium" name="" value="Medium" v-model="priority">
                <label for="Medium" style="font-size:20px">Medium</label><br>
                <input type="radio" id="Low" name="" value="Low" v-model="priority">
                <label for="Low" style="font-size:20px">Low</label><br>
                <!-- <button type="submit" class="btn btn-primary mb-3">Add Task</button>&nbsp;<br>
                <a class="btn btn-primary" href="/" role="button">Back To Home</a> -->
            </div>

        </div>

        <div class="modal-footer">

            <button class="btn btn-success" @click="handleSave" v-on:click="onclick()">

                Save

            </button>

            <button class="btn btn-secondary" @click="handleClose">

                Close

            </button>

        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "TodoAdd",
    data() {
        return {
            lists: [],
            taskname: "",
            priority: null
            // dataObj: {
            //     title: '',
            //     body: ''
            // }
        }
    },
    
    methods: {
       async onclick() {
            const res = await axios
                .post(`http://localhost:3000/lists`, {
                    taskname: this.taskname,
                    priority: this.priority,
                    status: false,
                });

            //this.lists = [...this.lists, res.data];
            this.taskname = "";
            this.priority = "";
            //console.log(this.lists);
            console.log(res.data, 'api');
            this.lists.push(res.data);
            console.log(this.lists, 'response data');
           // this.$emit('onclick', this.lists);

        },
        handleSave() {
            console.log(this.lists);
            this.handleClose();
        },
        handleClose() {
            this.$emit('close');
        },
        GoToHome() {
            this.$router.push('/');
        }

    }
}
</script>

<style>
</style>
