const express = require('express')
const app = express();

app.set("view engine", "ejs")
// app.set('views', __dirname + '/views');

// app.set("views","")

const sistersData = [
  { name: 'Rajvi', study: 'Computer Science', socialMedia: 'https://example.com/rajvi' },
  { name: 'Sister2', study: 'Art History', socialMedia: 'https://example.com/sister2' },
];

app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  const sister = sistersData.find((sister) => sister.name === name);
  res.render('index', { name, sister });
});

app.get("/", (req, res) => {
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

