import express from 'express'
import morgan from 'morgan'

const app = express();


app.set("port", process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api',require('./routes/index'))


export default app;




