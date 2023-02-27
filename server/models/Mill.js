const mongoose = require("mongoose")



const MillSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: String, required: true },
        weight: { type: Number, required: true },
        price: { type: Number, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },

    },
    { timestamps: true }

);

module.exports = mongoose.model("Mill", MillSchema);
