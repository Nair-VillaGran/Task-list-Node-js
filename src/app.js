import express from "express";
// import exphbs from 'express-handlebars'
import { create } from "express-handlebars";
import indexRouter from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

const exphbs = create({

    extname      :'.hbs',
    layoutsDir   : path.join(app.get("views"), "layouts"),
    partialsDir   : path.join(app.get("views"), "partials"),
    defaultLayout: 'main'

});

app.engine(".hbs", exphbs.engine);
app.set('view engine', '.hbs');

// app.engine('handlebars', exphbs({
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     defaultLayout: 'main',
//     extname: ".hbs"
// }));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(indexRouter);

//static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;