<!-- Component for edits -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Subscriber</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="subscriber.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="subscriber.email" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="subscriber.city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="subscriber.state" required>
                </div>
                
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="subscriber.address" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="subscriber.phone" required>
                </div>

                <div class="form-group">
                    <label>Subscription Type</label>
                    <select class = "form-control" v-model ="subscriber.subscription_type" required>
                        <option value = "monthly">Monthly</option>
                        <option value = "quarterly">Quarterly</option>
                        <option value = "biannually">Biannually</option>
                        <option value = "annually">Annually</option>
                    </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- Import for axios -->
<script>

import axios from "axios";

export default {
    data() {
        return {
            subscriber: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-subscriber/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.subscriber = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-subscriber/${this.$route.params.id}`;

            axios.post(apiURL, this.subscriber).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>