import  express  from 'express';
const app = express()
import pg from 'pg'; 
import  cors  from 'cors';

const pool = new pg.Pool({
  user: "postgres",
  password: "vh2004r44",
  host: "localhost", //PostgreSQL
  port: 5432,
  database: "bank_app",
});

app.set('port', process.env.PORT || 5000);
console.log("++++++++++++++++" + app.get("port"));
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  }),
);
app.use(express.static('./client/build'));


app.get('/api', (req, res) => {
    res.json('hi there')
})
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  console.log(res);
});



app.listen(5000,() => {console.log(`Server is now going on port 5000`);})