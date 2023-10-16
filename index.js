const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const morgan=require("morgan")
const UserRoute=require("./routes/Auth.js")
const AutosRoute=require("./routes/CarAd.js")
const JobsRoute=require("./routes/JobsAd.js")
const PetsRoute=require("./routes/PetsAd.js")
const RealEstateRoute=require("./routes/RealEstateAd.js")
const ConversationRoute=require("./routes/conversation.js")
const MessageRoute=require("./routes/message.js")
const ServicesRoute=require("./routes/ServicesAd.js")
const cookieparser=require("cookie-parser")
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const cors=require("cors")
const {fileURLToPath}=require("url")
const path=require("path")
let users=[]
let targetUser=[]
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser());
app.use(morgan("common"));
app.use(express.json());
app.use("/api/auth", UserRoute);
app.use("/api/autos", AutosRoute);
app.use("/api/jobs", JobsRoute);
app.use("/api/conversation",ConversationRoute)
app.use("/api/message",MessageRoute)
app.use("/api/pets", PetsRoute);
app.use("/api/real-estate", RealEstateRoute);
app.use("/api/services", ServicesRoute);
app.use(express.static(path.join(__dirname, "./client/build")));

const io = socketIo(server, {
  cors: {
    origin: "https://buyandsell-m45c.onrender.com"
  },
});

const addUser=((userId,socketId)=>
{
    userId!==null && users.push({userId,socketId})
    !users.some((user)=>
        {
            return (user.userId===userId)
        })
})
const removeUser=(socketId=>
    {
        users=users.filter(user=>
            {
                return user.socketId!==socketId
            })
    })
    const getUser=(userId)=>
    {
        users.forEach(user=>
            {
                if(user.userId===userId)
                targetUser=user
            })
    }
io.on("connection",(socket)=>
{
    console.log("A user connected")
    socket.on("addUser",userId=>
    {
        addUser(userId,socket.id)
        io.emit("getUsers",users)
    })
    socket.on("sendMessage",({senderId,receiverId,text,conversationId})=>
    {
        getUser(senderId)
        io.to(targetUser.socketId).emit("getMessage",{senderId,text,receiverId,conversationId})
    })
    socket.on("disconnect",()=>
    {
        console.log("a user disconnected")
        removeUser(socket.id)
        io.emit("getUsers",users)
    })
})


app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

mongoose
  .connect(process.env.db, {   useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((e) => {
    console.log(`Error connecting to database: ${e}`);
  });
mongoose.set("strictQuery", false);
server.listen(process.env.PORT || 5534, () => {
  console.log(`Server is listening on port ${process.env.PORT || 5534}`);
});

