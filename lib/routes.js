module.exports = function(app,pool){
    app.route('/hello').get((req,res)=>{
        res.send('Hello World')
    })
    // post result & equation to the database
    app.route('/equal').post(async(req,res)=>{
        try{
            const { display, equation } = req.body;
            // console.log(display)
            // console.log(equation)
            const insert = await pool.query("insert into calculator(result,equation) values($1,$2)",[display,equation])
            // // data limit set to no more than 6 entries
            // const deleteLast = await pool.query("delete from calculator where id > 6")
            res.redirect('/')
        }
        catch(err){
            console.log(err)
            res.redirect('/')
        }

    })
    // get the full history of results & equations (how to get the result) from database
    app.route('/equal').get(async(req,res)=>{
        try{
            const selectAll = await pool.query("select * from calculator order by id desc")
            const map =[...selectAll.rows].map((row=>{
                return {
                    id:row.id,
                    res: row.result,
                    equation:row.equation
                }
            }))
            console.log(map)
            res.json({data:map})
        }
        catch(err){
            console.log(err)
        }
    })
    app.route('/history/delete').get(async(req,res)=>{
        await pool.query("truncate calculator;alter sequence calculator_history_id_seq restart with 1")
        console.log('calculator values are deleted')
        res.redirect('/')
    })



}