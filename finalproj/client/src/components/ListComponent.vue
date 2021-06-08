<!-- Component for viewing subscriber list -->
<template>
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center">Subscriber List</h3>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Subscription Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subscriber in Subscribers" :key="subscriber._id">
                        <td>{{ subscriber.name }}</td>
                        <td>{{ subscriber.email }}</td>
                        <td>{{ subscriber.city }}</td>
                        <td>{{ subscriber.state }}</td>
                        <td>{{ subscriber.address }}</td>
                        <td>{{ subscriber.phone }}</td>
                        <td>{{ subscriber.subscription_type }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: subscriber._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteSubscriber(subscriber._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Subscribers: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Subscribers = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteSubscriber(id){
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                let indexOfArrayItem = this.Subscribers.findIndex(i => i._id === id);

                if (window.confirm("Are you sure you want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Subscribers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>