const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        img: {
            type: String
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: true
        },
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        profession: {
            type: String,
            required: true,
        },
        about: {
            type: String,
            required: true,
        },
        studies: [
            {
                name: {
                    type: String,
                    required: true,
                },
                degree: {
                    type: String,
                    required: true,
                },
                stateDate: {
                    type: String,
                    required: true,
                },
                endDate: {
                    type: String,
                    required: true,
                },
                marks: {
                    type: String,
                    required: true,
                },
            },
        ],

        experience: [
            {
                companyName: {
                    type: String,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                start: {
                    type: String,
                    required: true,
                },
                end: {
                    type: String,
                },
                summary: {
                    type: String,
                },
            },
        ],
        projects: [
            {
                projectTitle: {
                    type: String,

                },
                start: {
                    type: String,

                },
                end: {
                    type: String,

                },
                summary: {
                    type: String,

                },
            }
        ],
        skills: [
            {
                skill: {
                    type: String,

                }
            }
        ],
        languages: { type: Array },
        interest: { type: Array },
        linkedin: {
            type: String,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        github: {
            type: String,
        },
        website: {
            type: String,
        },
        awards: {
            type: String,
        },
        coverLetter: {
            type: Boolean
        },
        coverLetterDetails: {
            type: String
        },
        template: {
            type: Number
        }
    },
    { timestamps: true }
);

module.exports = Resume = mongoose.model("Resume", resumeSchema);
