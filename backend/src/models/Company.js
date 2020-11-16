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

    info:{
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
        reclameaqui:{
            type: String
        },
        ativo:{
            type: String
        },
    },

    financial:{
        type: Object,
    },

    social:{
        type: Object,
    },

    comercial:{
        type: Object,
    },

    rankings: {
        geral:{
            nota:{type: Number},
            rank:{type: Number}
        },
        financial: {
            value: {type: Number},
            variation: {type: Number},
        },
        social:{
            value: {type: Number},
            variation: {type: Number},
        }, 
        comercial: {
            value: {type: Number},
            variation: {type: Number},
        },
        // governança: {type: Number},
        // extra: {type: Number},
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Company = mongoose.model("Company", companySchema);

export default Company;
