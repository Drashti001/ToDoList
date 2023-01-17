<template>
<div id="app">
    <div class="container">
        <h1>Home Page</h1>
        <section class="vh-100" style="background-color: #eee;">
            <div class="container py-5 ">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-md-12 col-xl-10">

                        <div class="card">

                            <div class="card-header p-3">
                                <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>To-do List Application</h5>
                           
                           
                                <button type="button" class="btn btn-outline-primary" style="float: right ">
                                    <router-link to="/add">Add Task</router-link>
                                </button>
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
                                                <input @click="
                                                ChkStatus(list.id,list.status,list.taskname,list.priority)" class="form-check-input" type="checkbox" :value="upstatus" v-model="list.status" true-value="done" false-value="undone" />
                                                <label class="form-check-label" for="flexCheckCheckedDisabled">
                                                    {{ list.status }}
                                                </label>
                                            </div>

                                            <td class="align-middle">{{ list.taskname }}</td>
                                            <td class="align-middle">
                                                <h6 class="mb-0"><span>{{ list.priority }}</span></h6>
                                            </td>

                                            <td class="align-middle">
                                             <router-link :to="'/edit/'+list.id" class="btn btn-primary">EDIT</router-link>&nbsp;

                                                <button id="delete" class="btn btn-secondary" v-on:click="removeItem(list.id)">DELETE</button>
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
            upstatus: "",
        }
    },

    async created() {

        try {
            const res = await axios.get(`http://localhost:3000/lists/`);
            this.lists = res.data;
            console.log(this.lists);
        } catch (error) {
            console.log(error);
        }

    },
    methods: {
        removeItem(id) {
            axios.delete(`http://localhost:3000/lists/${id}`);
            this.lists = this.lists.filter((list) => list.id !== id);
        },
        async ChkStatus(id, status, taskname, priority) {
            if (status == "undone") {
                try {
                    const user = await axios.put("http://localhost:3000/lists/" + id, {

                        taskname: taskname,
                        priority: priority,
                        status: "done",
                    });
                    this.upstatus = user.data.status;
                    // console.log(this.upstatus);
                    alert("User updated successfully!");
                    // location.reload();
                } catch (e) {
                    console.log(e);
                }
            } else {
                try {
                    const user = await axios.put("http://localhost:3000/lists/" + id, {
                        taskname: taskname,
                        priority: priority,
                        status: "undone",
                    });
                    this.upstatus = user.data.status;
                    // console.log(this.upstatus);
                    alert("User updated succesfully!");
                    // location.reload();
                } catch (e) {
                    console.log(e);
                }
            }
        },
        moveToEdit(){
            this.$router.push('/edit');
        }
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

}
</script>

<style scoped>

</style>
