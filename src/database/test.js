const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados 
    
    proffyValue = {
        name: "Caio Henrique",
        avatar: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/48377752_589436968193917_7171683141856264192_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=TBn39ya-JioAX_yv8Tu&_nc_ht=scontent.fcgh2-1.fna&oh=620793c3150853eaefbfb4cb267ed465&oe=5F56E45A",
        whatsapp: "40028922",
        bio: "Instrutor de Educação Física",
        
    }

    classValue = {
        subject: 1,
        cost: "20",
        //o proffy virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues}) 

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys") 
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id =1;
    `)
    //console.log(selectClassesAndProffys)
    
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima 
    //WHERE class_schedule.class_id = 3
    //AND class_schedule.weekday = "1" 
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
           
    `)


    console.log(selectClassesSchedules)

})