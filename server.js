const express = require('express')
const app = express();

app.set("view engine", "ejs")
app.use(express.static("views"));

const profileData = {
    // Provide the dynamic data for the profile here
    name: 'Rajvi',
    photo: 'Rajvi.jpg',
    about: 'Hello! I\'m Rajvi...',
    education: 'I graduated with a Bachelor\'s degree...',
    jobTitle: 'Marketing Manager',
    company: 'ABC Company',
    workExperience: 'I\'m currently working as a Marketing Manager...',
    email: 'email@example.com',
    linkedin: 'https://www.linkedin.com/[your-profile]',
    instagram: 'https://www.instagram.com/[your-profile]',
    facebook: 'https://www.facebook.com/[your-profile]',
    phoneNumber: '9624707485',
    whatsapp: 'https://wa.me/9624707485',
    year: '2023'
};

app.get('/', (req, res) => {
    res.render('info', { profile: profileData });
});

app.get("/page1", (req, res) => {
    res.render("page1", {
        "name": "rvcl_api",
        "devlopers": {
            "data": [
                {
                    "name": "ravindrasinh",
                    "surname": "medhat"
                },
                {
                    "name": "rajvi",
                    "surname": "mangukiya"
                }
            ]
        }
    })
})

app.listen(7485, () => {
    console.log("server is listing on 7485");
})

