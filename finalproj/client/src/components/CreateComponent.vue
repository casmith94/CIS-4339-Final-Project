<!-- Component for create -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Sign-Up</h3>
            <form @submit.prevent="handleSubmitForm">
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
                    <button class="btn btn-danger btn-block">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- Axios import -->
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                subscriber: {
                   name: '',
                   email: '',
                   city: '',
                   state: '',
                   address: '',
                   phone: '',
                   subscription_type: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-subscriber';
                
                axios.post(apiURL, this.subscriber).then(() => {
                  this.$router.push('/view')
                  this.subscriber = {
                    name: '',
                   email: '',
                   city: '',
                   state: '',
                   address: '',
                   phone: '',
                   subscription_type: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>