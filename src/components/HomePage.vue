<template>
<div>
    <div class="container">
        <header>
            <h1 style="text-align:center; background-color:lightblue">Home Page</h1>
        </header>

        <section class="vh-100" style="background-color:beige">

            <div class="container py-5 ">
                <div class="row d-flex justify-content-center align-items-center">
                    <transition name="modal">
                        <div class="modal-mask" v-if="showModal">
                            <to-do-add @onclick="" @close="closeModal" />
                        </div>
                    </transition>
                    <div class="col-md-12 col-xl-10">

                        <div class="card">
                            <div class="card-header p-3">
                                <h4 style="font-size:larger; font-weight:500">To Do List Application <button type="button" style="float:right;" class="btn btn-info" @click="showModal = true">AddTask +</button>

                                </h4>

                            </div>
                            <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; ">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="font-size:20px">Status</th>
                                            <th scope="col" style="font-size:20px">Task</th>
                                            <th scope="col" style="font-size:20px">Priority</th>
                                            <th scope="col" style="font-size:20px">Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="fw-normal" v-for="list of lists " v-bind:key="list.id">
                                            <div class="form-check">
                                                <input v-on:click="ChkStatus(list)" class="form-check-input" type="checkbox" v-model="list.status" />
                                                <label class="form-check-label" for="flexCheckCheckedDisabled">
                                                    {{ list.status ? 'done' : 'undone' }}
                                                </label>
                                            </div>
                                            <td class="align-middle" v-bind:class="list.status ? 'isclicked' : '' ">{{ list.taskname }}</td>
                                            <td class="align-middle">
                                                <button type="button" class="btn btn-info">{{ list.priority }}</button>

                                            </td>
                                            <td class="align-middle">
                                                <router-link :to="'/edit/' + list.id" class="btn btn-primary">EDIT</router-link>&nbsp;

                                                <button id="delete" class="btn btn-secondary" v-on:click="removeTask(list.id)">DELETE</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</div>
</template>

<script>
import axios from "axios";
import TodoAdd from "@/components/ToDoAdd.vue";

export default {
    name: "HomePage",
    components: {
        'to-do-add': TodoAdd
    },
    data: function () {
        return {
            lists: [],
            showModal: false,
            taskname: "",
            priority: null,
            status: false

        }
    },
   
    methods: {
        addTask() {
        //alert('dwdsads');ˀ
        try {

            const res = await axios.get(`http://localhost:3000/lists/`);
            console.log(res);
            this.lists = res.data;
            console.log(this.lists);
        } catch (error) {
            console.log(error);
        }
    },
        closeModal() {
            this.showModal = false;
        },
        // async addItem() {
        //     // alert('sfdfdd');
        //     const res = await axios
        //         .post(`http://localhost:3000/lists`, {
        //             taskname: this.taskname,
        //             priority: this.priority,
        //             status: false,

        //         });
        //     console.log(res.data, 'api');
        //     console.log(this.lists, 'response data');
        //     // this.lists.push(res.data);
        //     // this.lists = [...this.lists, res.data];
        //     // console.log(this.lists);
        //     //  this.taskname = "";
        //     //  this.priority = "";

        // },

        ChkStatus: function (list) {
            console.log(list.id);
            if (list.status == false) {
                axios.put("http://localhost:3000/lists/" + list.id, {
                    taskname: list.taskname,
                    priority: list.priority,
                    status: true,
                    id: list.id,
                }).then(function () {
                    console.log(list.status);
                });

            } else {
                axios.put("http://localhost:3000/lists/" + list.id, {
                    taskname: list.taskname,
                    priority: list.priority,
                    status: false,
                    id: list.id,
                }).then(function () {});

            }
        },
        removeTask(id) {
            axios.delete(`http://localhost:3000/lists/${id}`);
            this.lists = this.lists.filter((list) => list.id !== id);
        },
    }
}
</script>

<style scoped>
.isclicked {
    text-decoration: line-through;
}
</style>
