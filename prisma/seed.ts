import { Prisma, PrismaClient } from "@prisma/client"
const client = new PrismaClient();
const gettourist = (): Prisma.TouristCreateInput[] => [
    {
        First_name: "vishal",
        Last_name: "shetty",
        Phone_number: 8792304675,
        Mail_ID: "vishalshetty@gmail.com",
        Password: "legend003",
        City: "Bangalore",
        Address: "kudlu gate",
        Interest_Place: "Goa"
    },

    {
        First_name: "manu",
        Last_name: "kumar",
        Phone_number: 9792304775,
        Mail_ID: "manu@gmail.com",
        Password: "manu123",
        City: "Bangalore",
        Address: "silk board",
        Interest_Place: "kerala"
    },



    {
        First_name: "richard",
        Last_name: "S",
        Phone_number: 8794304905,
        Mail_ID: "richard@gmail.com",
        Password: "cool12#",
        City: "Bangalore",
        Address: "MG road",
        Interest_Place: "jamu and kashmir"
    },
    {
        First_name: "anand",
        Last_name: "v",
        Phone_number: 8792307582,
        Mail_ID: "anandv@gmail.com",
        Password: "devilkin56",
        City: "Bangalore",
        Address: "krpuram",
        Interest_Place: "assam"
    }

]

const main = () => {
    return Promise.all(gettourist().map((touristinput) => client.tourist.create({
        data: touristinput
    })))
}

main().then(() => {
    console.log("successfully seeded")
}).catch((e) => {
    console.log(e)
})

const getreview = (touristId: Prisma.TouristWhereUniqueInput): Prisma.ReviewCreateInput[] => [
    {
        Rating: 5,
        Review: "excellent",
        Destination: "goa",
        Tourist: {
            connect: touristId
        }
    },

    {
        Rating: 3,
        Review: "best",
        Destination: "mumbhai",
        Tourist: {
            connect: touristId
        }
    },

    {
        Rating: 4,
        Review: "good",
        Destination: "assam",
        Tourist: {
            connect: touristId
        }
    }
]

const main = async() => {
    
};

main().then(() => {
    console.log("successfully seeded")
}).catch((e) => {
    console.log(e)
})

const getdestination = (): Prisma.DestinationCreateInput[] => [
    {
        Name:"bangalore",
        Best_time:"10:30 AM",
        Best_season:"winter",
        Hotels:"taj",
    },

    {
        Name:"kerala",
        Best_time:"6:00 AM",
        Best_season:"summer",
        Hotels:"MS mess",
    },

    {
        Name:"assam",
        Best_time:"6:45 AM",
        Best_season:"raniny",
        Hotels:"raja",
    }
]

const getplace = (destinationid: Prisma.DestinationWhereUniqueInput): Prisma.PlacesCreateInput[] => [
    {
        Place_Name:"lag bag",
        Image:"image.jpeg",
        Destination:{
            connect:destinationid
        }
    },

    {
        Place_Name:"tea gardens",
        Image:"image.jpeg",
        Destination:{
            connect:destinationid
        }
    },

    {
        Place_Name:"guwahati",
        Image:"image.jpeg",
        Destination:{
            connect:destinationid
        }
    }
    
]

const gethistory = (
    destinationid: Prisma.DestinationWhereUniqueInput,
    touristId: Prisma.TouristWhereUniqueInput): 
    Prisma.historyCreateInput[] => [
        {
            Trip_status:true,
            Tourist:{
                connect:touristId
            },
            Destination:{
                connect:destinationid
            }
        },

        {
            Trip_status:false,
            Tourist:{
                connect:touristId
            },
            Destination:{
                connect:destinationid
            }
        },

        {
            Trip_status:true,
            Tourist:{
                connect:touristId
            },
            Destination:{
                connect:destinationid
            }
        }
]

const getweather =(
    placeid: Prisma.PlacesCreateInput): 
    Prisma.WeatherCreateInput[] => [
        {
            Temperature:"30 degree C",
            Humidity:26,
            Date:"28/04/2023",
            Day:"friday",
            Places:{
                connect:placeid
            }

        },

        {
            Temperature:"35 degree C",
            Humidity:30,
            Date:"25/04/2023",
            Day:"tuesday",
            Places:{
                connect:placeid
            }

        },

        {
            Temperature:"25 degree C",
            Humidity:20,
            Date:"27/04/2023",
            Day:"thurday",
            Places:{
                connect:placeid
            }

        }
        
]







