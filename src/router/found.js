export default{
    name:"found",
    path:'/found',
    component:()=>import("@/views/Found"),
    children:[
        {path:"activity",component:()=>import("@/views/Found/Activity"),name:"activity"},
        {path:"infor",component:()=>import("@/views/Found/Infor"),name:"infor"},
        {path:"mall",component:()=>import("@/views/Found/Mall"),name:"mall"},
        {path:"yticket",component:()=>import("@/views/Found/Ticket"),name:"yticket"},
        {path:"topic",component:()=>import("@/views/Found/Topic"),name:"topic"},

    ]
    
}