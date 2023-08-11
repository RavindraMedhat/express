const express = require('express')
const app = express();

app.set("view engine", "ejs")
app.use(express.static("views"));

const rajviProfileData = {
    // Provide the dynamic data for the profile here
    name: 'Rajvi',
    photo: 'Rajvi.jpg',
    about: 'Hello! I\'m Rajvi...',
    education: 'I graduated with a Bsc IT from J.P.Dawer institute of Information Science and Technology (VNSGU)',
    // jobTitle: 'Marketing Manager',
    // company: 'ABC Company',
    // workExperience: 'I\'m currently working as a Marketing Manager...',
    email: 'rajvimangukiya17@gmail.com',
    // linkedin: 'https://www.linkedin.com/in/ravindrasinh-medhat-06823b223',
    instagram: 'https://www.instagram.com/_rajvi_mangukia_',
    // facebook: 'https://www.facebook.com/[your-profile]',
    phoneNumber: '9624707485',
    whatsapp: 'https://wa.me/9624707485',
    year: '2023',
    emergencyContacts: [{
        name: "Ravindra medhat",
        phoneNumber: "+91 9624707485"
    }]


};
const vandanaProfileData = {
    // Provide the dynamic data for the profile here
    name: 'Vandana',
    photo: 'Vandana.jpg',
    about: 'Hello! I\'m Vandana...',
    education: 'I graduated with a Bachelor\'s degree...',
    jobTitle: 'Marketing Manager',
    company: 'ABC Company',
    workExperience: 'I\'m currently working as a Marketing Manager...',
    email: 'vandanamedhat@gmail.com',
    // linkedin: 'https://www.linkedin.com/in/ravindrasinh-medhat-06823b223',
    instagram: 'https://www.instagram.com/vandanamedhat',
    // facebook: 'https://www.facebook.com/[your-profile]',
    // phoneNumber: '9624707485',
    // whatsapp: 'https://wa.me/9624707485',
    year: '2023',
    emergencyContacts: [
        {
            name: "Prashant chawada",
            phoneNumber: "+91 9624707485"
        },
        {
            name: "Ravindra medhat",
            phoneNumber: "+91 9624707485"
        }
    ]
};

app.get('/rajvi', (req, res) => {
    res.render('info', { profile: rajviProfileData });
}); app.get('/vandana', (req, res) => {
    res.render('info', { profile: vandanaProfileData });
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

