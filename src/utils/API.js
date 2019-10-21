import axios from "axios";

export default {
    // Gets all books
    createAccount: function (data) {
        return axios.post("http://localhost:3333/user/create", data);
    },

    loginAccount: function (data) {
        return axios.post("http://localhost:3333/user/login", data);
    },

    logoutAccount: function (data) {
        return axios.delete("http://localhost:3333/user/logout", data);
    },
   AuthorizeAccount: function (data) {
        return axios.get("http://localhost:3333/user/user", data);
    },

};
