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
        type: Object,
    },

    financial:{
        type: Object,
    },

    comercial:{
        type: Object,
    },

    rankings: {
        financial: {Type: Number},
        social: {Type: Number},
        comercial: {Type: Number},
        // governança: {Type: Number},
        extra: {Type: Number},
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Company = mongoose.model("Company", companySchema);

export default Company;
