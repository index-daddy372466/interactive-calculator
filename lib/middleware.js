module.exports = function(app,cors,express,bodyParser){
        // middleware
        app.use(express.static('public'))
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())
        app.use(express.urlencoded({extended:true}))
        app.use(express.json())
        app.use(cors())
    }