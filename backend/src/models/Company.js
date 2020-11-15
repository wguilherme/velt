import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    social:{
        type: Object,
    },

    financial:{
        type: Object,
    },

    comercial:{
        type: Object,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Company = mongoose.model("Company", companySchema);

export default Company;
