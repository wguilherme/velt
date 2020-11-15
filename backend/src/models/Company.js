import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    cnpj: {
        type: Number,
        required: true
    },

    socios: {
        type: Object,
        required: true
    },

    ramo: {
        type: String,
        enum: ['e-commerce','finantials'],
        required: true
    },

    social:{
        facebook:{
            type: String
        },
        instagram:{
            type: String
        },
        twitter:{
            type: String
        },
        youtube:{
            type: String
        },
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
