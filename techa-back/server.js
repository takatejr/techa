const express = require("express")
const app = express(),
  bodyParser = require("body-parser")
port = 3080;


app.use(bodyParser.json())
const lool = [{
    logo: "Scali",
    title: "Tuple dumle inne lakocie",
    author: "Person aka Takate",
    content: "string", 
    autograph: "string"
    },{
      logo: "JS/TS",
      title: "TYPY DZIPY TIPY",
      author: "Person aka Takate",
      content: "string", 
      autograph: "string"
      },{
        logo: "string1",
        title: "string2",
        author: "string",
        content: "string", 
        autograph: "string"
        }];

let ee = 9;
app.get("/api/users", (req, res) => {
  ee++
  lool.push({
    logo: "string1",
    title: `${ee}`,
    author: "string",
    content: "Lorem ipsum", 
    autograph: ""
    })
  res.json(lool)
  })


app.post("/api/user", (req, res) => {
  const user = req.body.user
  users.push(user)
  res.json("user addedd")
})

app.get("/api/betdata", (req, res) => {
  scrapeProduct().then((arr) => (matches = arr))

  res.json("scraped")
})

app.get("/api/betdatas", (req, res) => {
  console.log(`Wyświetlanie wszystkich ${matches.length} rozgrywanych dzisiaj meczy`)
  res.json(matches)
})

app.post("/api/matchID", (req, res) => {
  const lastMatchID = req.body.currentID
  res.json(matches)
})


app.get("/", (req, res) => {
  res.send("App Works !!!!")
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})
