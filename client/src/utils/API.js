// frontend API calls
// these will be used in the VIEWS components
import axios from "axios";

export default {
    getNumPresData: function(lang) {
        return axios.get("/api/presentation/numbers/" + lang);
    },
    getSlangPresData: function(lang) {
        return axios.get("/api/presentation/slang/" + lang);
    },
    getNumQuizData: function (lang) {
        return axios.get("/api/quiz/numbers/" + lang);
    },
    getSlangQuizData: function (lang) {
        return axios.get("/api/quiz/slang/" + lang);
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
    // Update user info with scores and current language
    updateUser: function(id, data){
        return axios.put(`/api/user/${id}`, data)
    },
    updateUserScore: function(id, resultsLesson, data){
        return axios.put(`/api/user/${id}/${resultsLesson}`, data)
    }
    
}