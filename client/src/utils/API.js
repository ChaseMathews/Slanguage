// frontend API calls
// these will be used in the VIEWS components
import axios from "axios";

export default {
    getPresData: async function() {
        return axios.get("/api/presentation");
    },
    getQuizQuestions: async function () {
        return axios.get("/api/quiz");
    },
    // // Gets the user with the given id upon logging in
    getUserData: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Finds user in db and sends back username and ID
    findUser: function (user) {
        return axios.post("/api/user/login", user);
    },
    // Deletes the user with the given id if user removes account
    deleteUser: function (id) {
        return axios.delete("/api/user/" + id);
    },
    // Saves a user to the database
    signUpUser: function (user) {
        return axios.post("/api/user/", user);
    },
    // Update user info
    //not sure if this is right, it's commented out...
    updateUser: function(id){
        // return axios.put("/api/user/", id)
    }
    
}