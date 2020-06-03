// frontend API calls
// these will be used in the VIEWS components
import axios from "axios";

export default {

    // PRES DATA
    getNumPresData: function(lang) {
        return axios.get("/api/presentation/numbers/" + lang);
    },
    getSlangPresData: function(lang) {
        return axios.get("/api/presentation/slang/" + lang);
    },
    getBodyPres1Data: function(lang) {
        return axios.get("/api/presentation/body1/" + lang);
    },
    getBodyPres2Data: function(lang) {
        return axios.get("/api/presentation/body2/" + lang);
    },
    getBodyPres3Data: function(lang) {
        return axios.get("/api/presentation/body3/" + lang);
    },
    getBodyPres4Data: function(lang) {
        return axios.get("/api/presentation/body4/" + lang);
    },
    getCalendarPresData: function(lang) {
        return axios.get("/api/presentation/calendar/" + lang);
    },
    getColorsPresData: function(lang) {
        return axios.get("/api/presentation/colors/" + lang);
    },
    getDaysPresData: function(lang) {
        return axios.get("/api/presentation/days/" + lang);
    },
    getProfanityPresData: function(lang) {
        return axios.get("/api/presentation/profanity/" + lang);
    },
    getSeasonsPresData: function(lang) {
        return axios.get("/api/presentation/seasons/" + lang);
    },
    getTravelPres1Data: function(lang) {
        return axios.get("/api/presentation/travel1/" + lang);
    },
    getTravelPres2Data: function(lang) {
        return axios.get("/api/presentation/travel2/" + lang);
    },
    getTravelPres3Data: function(lang) {
        return axios.get("/api/presentation/travel3/" + lang);
    },


    //  QUIZ METHODS
    getNumQuizData: function (lang) {
        return axios.get("/api/quiz/numbers/" + lang);
    },
    getSlangQuizData: function (lang) {
        return axios.get("/api/quiz/slang/" + lang);
    },
    getProfanityQuizData: function (lang) {
        return axios.get("/api/quiz/profanity/" + lang);
    },
    getBodyQuiz1Data: function (lang) {
        return axios.get("/api/quiz/body1/" + lang);
    },
    
    
    // USER METHODS
    
    // // Gets the user with the given id
    getUserData: function (id) {
        return axios.get(`/api/user/${id}`);
    },
    // Finds user in db and sends back username and ID
    findUser: function (user) {
        return axios.post("/api/user/login", user);
    },
    // Deletes the user with the given id if user removes account
    deleteUser: function (id) {
        return axios.delete(`/api/user/${id}`);
    },
    // Saves a user to the database
    signUpUser: function (user) {
        return axios.post("/api/user/signup", user);
    },
    // Update user current language or existing lesson score
    updateUser: function(id, data){
        return axios.put(`/api/user/${id}`, data)
    },
    // Update user results (new language)
    updateUserResults: function(userId, results){
        return axios.put(`/api/user/results/${userId}`, results)
    },
    // Update user lesson (new lesson in existing language)
    updateUserLesson: function(resultId, lessonResult){
        // console.log('lessonResult', lessonResult)
        return axios.put(`/api/user/lesson/${resultId}`, lessonResult)
    },
    updateExistingUserLesson: function(userId, data){
        console.log('data', data)
        return axios.put(`/api/user/existingLesson/${userId}`, data)
    },
    userLogOut: function(){
        return axios.get(`/api/user/logout`)
    }
}