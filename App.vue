
<template>
    <div class="main">
        <h3>Employee List</h3>
        <form class="form">
            <input class="input" v-model="name" type="text" name="name" placeholder="Employee name..." />
            <br />
            <input class="input" v-model="phoneNumber" type="text" name="phone-number" placeholder="Phone number..." />
            <br />
            <input class="input" v-model="email" type="email" name="email" placeholder="example: employee@mail.com" />
            <br />
            <button class="submit-button" @click="addEmployee">Submit</button>
        </form>
        <div class="Employees-container">
            <ul>
                <li v-for="(Employee, i) in Employees" :key="Employee._id">
                    <div class="Employee">
                        <span class="Employee-name">{{ Employee.name }}</span>
                        <span class="Employee-description">{{ Employee.phoneNumber }}</span>
                        <span class="Employee-description">{{ Employee.email}}</span>
                    </div>
                    <button class="delete-btn" @click="removeEmployee(Employee, i)">DELETE TODO</button>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            Employees: [],
            name: "",
            phoneNumber: "",
            email: "",
        };
    },
    async mounted() {
        const response = await axios.get("api/Employeelist");
        this.Employees = response.data;
    },
    methods: {
        async addTodo(e) {
            e.preventDefault();
            const response = await axios.post("api/Employeelist", {
                name: this.name,
                phoneNumber: this.phoneNumber,
                email: this.email
            });
            this.Employees.push(response.data);
            this.name = "";
            this.phoneNumber = "";
            this.email = "";
            console.log(this.Employees)
        },
        async removeEmployee(item, i) {
            await axios.delete("api/Employeelist/" + item._id);
            this.Employees.splice(i, 1);
        },
    }
}
</script>

<style>
.main {
    margin: auto;
    margin-top: 3rem;
    max-width: 400px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

.input {
    width: 100%;
    padding: 10px;
}

.submit-button {
    width: 400px;
    padding: 10px;
    background-color: #1976d2;
    color: white;
    cursor: pointer;
}

.Employees-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Employees-container ul {
    width: 100%;
    list-style: none;
    padding: 0;
}

.Employees-container ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
}

.Employee {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    max-width: 250px;
}

.Employee-name {
    font-size: 18px;
    font-weight: bold;
}

.Employee-description {
    max-width: 70%;
    font-size: 14px;
}

.delete-btn {
    background-color: #f44336;
    color: white;
    padding: 10px;
    cursor: pointer;
    border: none;
}
</style>
