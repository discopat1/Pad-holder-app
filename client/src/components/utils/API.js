import axios from "axios";

export default {
    findAll: function() {
        return axios.get("/api/combos");
    },
    findBoxing: function() {
        return axios.get("/api/combos/boxing");
    }
}