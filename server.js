const express = require('express')
const app = express();

app.set("view engine", "ejs")
app.use(express.static("views"));


app.get('/', (req, res) => {
    res.render('info');
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

