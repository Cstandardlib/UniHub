<template>
    <div class="formarea">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-position="top">
            <FormItem label="Username" prop="username">
                <Input v-model="formValidate.username" placeholder="Enter your username"></Input>
            </FormItem>
            <FormItem label="E-mail" prop="email">
                <Input v-model="formValidate.email" placeholder="Enter your email"></Input>
            </FormItem>
            <FormItem label="Password" prop="passwd">
                <Input type="password" v-model="formValidate.passwd" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem label="Confirm" prop="passwdCheck">
                <Input type="password" v-model="formValidate.passwdCheck" placeholder="Enter your password again"></Input>
            </FormItem>
            <FormItem>
                <div class="btn-container">
                    <Button class="btn" type="primary" @click="handleSubmit">Submit</Button>
                </div>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3005' // 端口号和域名为后端地址
});
export default {
    data() {
        const validatePasswdCheck = (rule, value, callback)=> {
            if (value === '') {
                callback(new Error('Please enter your password again'));
            } else if (value !== this.formValidate.passwd) {
                callback(new Error('The two input passwords do not match'));
            } else {
                callback();
            }
        };

        return {
            formValidate: {
                username: '',
                email: '',
                passwd: '',
                passwdCheck: ''
            },
            ruleValidate: {
                username: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                passwd: [
                    { required: true, message: 'Password cannot be enpty', trigger: 'blur' }
                ],
                passwdCheck: [
                    { required: true, validator: validatePasswdCheck, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        async handleSubmit () {
            try {
                const reponse = await axiosInstance.post('api/register', {
                    username: this.username,
                    email: this.email,
                    passwd: this.passwd, 
                });

                if (reponse.status === 200) {
                    this.showSucessModal = true;

                    setTimeout(() => {
                        window.location.href = '/#/home/login';
                    }, 300);
                } else {
                    this.registrationMessage = 'registration failed, please try again later';
                }
            } catch (error) {
                console.error('registration failed', error);
                this.registrationMessage = 'registration failed, please try again later';
            }
        }
    }
}
</script>
<style>
.formarea {
    width: 25%;
    margin-top: 10%;
    margin-left: 20%;
}

.btn-container {
    margin-top: 5%;
}

.btn {
    margin-right: 5%;
}
</style>