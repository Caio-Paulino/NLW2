//servidor
const express = require('express')
const server = express()
//const bodyParser = require('body-parser')

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSuccess
} = require('./pages')

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//.use(bodyParser.urlencoded({ extended: true }))
//confugurar arquivos estáticos
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)    
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start no servidor
.listen(5500)

