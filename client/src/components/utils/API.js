import axios from "axios";

export default {
    findAll: function() {
        return axios.get("/api/combos");
    },
    findBoxing: function() {
        return axios.get("/api/combos/boxing");
    },
    findKickboxing: function() {
        return axios.get("/api/combos/kickboxing");
    },
    findMuaythai: function() {
        return axios.get("/api/combos/muaythai");
    },
}