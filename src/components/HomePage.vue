<template>
<div id="app" style="background-color:antiquewhite">
    <div class="container">
        <header>
            <h1 style="text-align:center;">Home Page</h1>
        </header>
        <section class="vh-100" style="background-color: #eee;">
            <div class="container py-5 ">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-md-12 col-xl-10">

                        <div class="card">

                            <div class="card-header p-3">
                                <h5 style=" margin-top: 0.67em;font-weight: bold;">To-do List Application <button type="button" class="btn btn-light" style="float: right;  ">
                                    <router-link to="/add">Add Task</router-link>
                                </button></h5>

                                
                            </div>
                            <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; ">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Status</th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Actions</th>

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
                                               <!-- <h6 class="mb-0"><span>{{ list.priority }}</span></h6>-->
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
export default {
    name: "App",
    data() {
        return {
            lists: [],
            //upstatus: "",
        };
    },

    async created() {

        try {
            const res = await axios.get(`http://localhost:3000/lists/`);
            this.lists = res.data;
           // console.log(this.lists);
        } catch (error) {
            console.log(error);
        }

    },
    methods: {
        removeTask(id) {
            axios.delete(`http://localhost:3000/lists/${id}`);
            this.lists = this.lists.filter((list) => list.id !== id);
        },
        ChkStatus: function (list) {
           // console.log(list.id);
            if (list.status == false) {
                
                axios.put("http://localhost:3000/lists/" + list.id, {
                    
                    taskname: list.taskname,
                    priority: list.priority,
                    status: true,
                    id: list.id,
                }).then(function () {
                    console.log(list.status);
                });
                //this.upstatus = lists.data.status;
                // console.log(this.upstatus);
                //alert("User updated successfully!");
                // location.reload();
            } else {

                axios.put("http://localhost:3000/lists/" + list.id, {
                    taskname: list.taskname,
                    priority: list.priority,
                    status: false,
                    id: list.id,
                }).then(function () {

                });
                //this.upstatus = lists.data.status;
                // console.log(this.upstatus);
                //alert("User updated succesfully!");
                // location.reload();
            }
        }
    },
    // moveToEdit() {
    // this.$router.push('/edit');
    // }
}

//alert("qqqqqq");
//console.log( this.$http);
/* this.$http.get('http://localhost:3000/lists').then(function (data) {
      console.log(data);
      // this.blog = data.body;
      return data.json();
  }).then(function () {
      //taskname = this.taskname;
      //priority = this.priority;
      //status=this.status;

  })*/
</script>

<style scoped>
.isclicked {
    text-decoration: line-through;
}
</style>
