Environnement
{
    name: "Prod", //unique
    api_base: "http://api.rcu/com",
    auth_user: "....",
    auth_pass: "..."
}
 
Workflow
{
    _id: "1354789321"
    name: "Workflow 1",//unique
    max_time : 180, // Alert lors du depassement du temps prevu
    commands: [
        {name:"collect", api_url: "", api_post_parameters: "", max_time: "", stop_on_error: true, auth?, retry_on_error: true, nb_try: 2},
        {name:"qualif", api_url: "", api_post_parameters: "", max_time: "", stop_on_error: false},
        {name:"export", api_url: "", api_post_parameters: "", max_time: "", stop_on_error: true}   
    ]
}
 
Programmation
{  
    launch_once: "2014-01-01 12:00:00",
    time: "02h00",//
    workflow_name: "Workflow 1",
    environnement: "Prod"
}
 
run
{
    started_at : "02h00",
    Programmation: 1,
    status: running, //OK,KO,
    author: "auto",
    workflow_log: [
        {name: collect, status: OK, try: 1, startedAt: 02h00, logs: "OK"},
        {name: qualif, status: KO, try: 1, startedAt: 02h30, log: "Error while reading ....."},
        {name: qualif, status: KO, try: 2, startedAt: 02h32, log: "Error while reading ....."},
        {name: qualif, status: OK, try: 3, startedAt: 02h35, log: "ok"},
        {name: export, status: sending/running, try: 1, startedAt: 05h00, log: ""}
    ]
}
