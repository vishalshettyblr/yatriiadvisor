import {Prisma,PrismaClient} from "@prisma/client"
const client = new PrismaClient();
const getUser =() :Prisma.TouristCreateInput[]=>[
    {
        First_name:"vishal",
        Last_name:"shetty",
        Phone_number:8792304675,
        Mail_ID:"vishalshetty@gmail.com",
        Password:"legend003",
        City:"Bangalore",
        Address:"kudlu gate",
        Interest_Place:"Goa"
    },

    {
        First_name:"manu",
        Last_name:"kumar",
        Phone_number:9792304775,
        Mail_ID:"manu@gmail.com",
        Password:"manu123",
        City:"Bangalore",
        Address:"silk board",
        Interest_Place:"kerala"
    },



    {
        First_name:"richard",
        Last_name:"S",
        Phone_number:8794304905,
        Mail_ID:"richard@gmail.com",
        Password:"cool12#",
        City:"Bangalore",
        Address:"MG road",
        Interest_Place:"jamu and kashmir"
    },
    {
        First_name:"anand",
        Last_name:"v",
        Phone_number:8792307582,
        Mail_ID:"anandv@gmail.com",
        Password:"devilkin56",
        City:"Bangalore",
        Address:"krpuram",
        Interest_Place:"assam"
    }
]

const main = ()=>{
    return Promise.all(getUser() .map((touristinput)=>client.tourist.create({
        data:touristinput
    })))
}

main ().then(()=>{
    console.log("successfully seeded")
}).catch((e)=>{
    console.log(e)
})
