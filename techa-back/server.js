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


app.get("/api/users", (req, res) => {
  res.json(lool)
  })


app.post("/api/user", (req, res) => {
  const user = req.body.user
  users.push(user)
  res.json("user addedd")
})

app.get("/api/betdata", (req, res) => {
  scrapeProduct().then((arr) => (matches = arr))
  console.log(`Sprawdzam czy dziś coś grają`)

  res.json("scraped")
})

app.get("/api/betdatas", (req, res) => {
  console.log(`Wyświetlanie wszystkich ${matches.length} rozgrywanych dzisiaj meczy`)
  res.json(matches)
})

app.post("/api/matchID", (req, res) => {
  const lastMatchID = req.body.currentID

  console.log(
    `POBRANO MECZ O ID = ${lastMatchID}, ZACZYNAM WYKONYWAC DALSZE POBIERANIE`
  )

  if (!scrapedMoreDetailed.includes(lastMatchID)) {
    winLose(lastMatchID)
    // seasonScore(lastMatchID)
    scrapedMoreDetailed.push(lastMatchID)
  } else {
    console.clear()
    console.log("To ID zostało już użyte")
  }
  res.json(matches)
})


app.get("/", (req, res) => {
  res.send("App Works !!!!")
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})
