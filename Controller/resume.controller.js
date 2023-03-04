const { to, ReE, ReS } = require("../Common/utils")
const Resume = require('../Models/resume.model')

exports.create = (req, res) => {
    var body = req.body;

    const resume = new Resume({
        firstName: body.firstName,
        lastName: body.lastName,
        img: body.img,
        phone: body.phone,
        email: body.email,
        country: body.country,
        city: body.city,
        address: body.address,
        dob: body.dob,
        profession: body.profession,
        about: body.about,
        studies: body.studies,
        experience: body.experience,
        projects: body.projects,
        skills: body.skills,
        languages: body.languages,
        interest: body.interest,
        linkedin: body.linkedin,
        facebook: body.facebook,
        instagram: body.instagram,
        github: body.github,
        website: body.website,
        awards: body.awards,
        coverLetter: body.coverLetter,
        coverLetterDetails: body.coverLetterDetails,
        template: body.template
    });

    resume.save()
        .then(() => {
            ReS(res, { message: "success full created" });
        })
        .catch(err => {
            ReE(res, err);
        });
}

exports.getResume = (req, res) => {
    var body = req.params

    Resume.findOne({ email: body.email })
        .then((user) => {
            if (!user) {
                ReS(res, { message: `Not Exist ${body.email}` })
            }
            ReS(res, { user })
        }).catch((err) => {
            ReE(res, err)
        })
}

exports.update = (req, res) => {
    var params = req.params.id
    Resume.findByIdAndUpdate(params.id, req.body, { new: true })
        .then((user) => {
            if (!user) {
                Res(res, { message: "No Resume Found" })
            }
            ReS(res)
        }).catch((err) => {
            ReE(res, err)
        })
}

exports.delete = (req, res) => {
    var id = req.params.id
    Resume.deleteOne({ _id: id }).then((user) => {
        ReS(res, { message: "Deleted " })
    }).catch((err) => {
        ReE(res, err)
    })
}