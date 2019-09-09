const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const productsRouter = require('./routes/api/productsRouter');
const usersRouter = require('./routes/api/usersRouter');
const apiRouter = require('./routes/apiRouter');
const custOrganizationsRouter = require('./routes/api/custOrganizationsRouter');
const custContactsRouter = require('./routes/api/custContactsRouter');
const CustContactStatusesRouter = require('./routes/api/CustContactStatusesRouter');
const EquipmentProfilesRouter = require('./routes/api/EquipmentProfilesRouter');
const WorkOrdersRouter = require('./routes/api/WorkOrdersRouter');
const WOStatusesRouter = require('./routes/api/WOStatusesRouter');
const WOPrioritiesRouter = require('./routes/api/WOPrioritiesRouter');
const WOCategoriesRouter = require('./routes/api/WOCategoriesRouter');
const AuthRouter = require('./routes/api/auth/index.js');
const app = express();
const volleyball = require('volleyball');
const session = require('express-session');
require('./config/passport');

const middlwares = require('./routes/api/auth/middlewares')

const TWO_HOURS = 1000 * 60 * 60 * 2
const {
  PORT = 5000,
  SESS_ID = 'sid',
  SESS_LIFETIME = TWO_HOURS,
  SESS_SECRET = 'TESTING THIS OUT'
} = process.env

// Database
const db = require('./config/db');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error(`Unable to connect to the database:`, err));

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://sagelysown.owlinventory.com'
}));
app.use(volleyball);
app.use(session({
  name: SESS_ID,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: false,
  }
}));
//app.use(middlwares.checkTokenSetUser);

//STATIC ROUTE
app.use('/', express.static(__dirname + '/public'));

//Auth Routes
app.use('/auth', AuthRouter);

//API routes
app.use('/api/products', productsRouter);
app.use('/api', apiRouter);
app.use('/api/organizations', custOrganizationsRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/users', usersRouter);
app.use('/api/contacts', custContactsRouter);
app.use('/api/custcontactstatuses', CustContactStatusesRouter);
app.use('/api/equipmentprofiles', EquipmentProfilesRouter);
app.use('/api/WorkOrders', WorkOrdersRouter);
app.use('/api/WOStatuses', WOStatusesRouter);
app.use('/api/WOPriorities', WOPrioritiesRouter);
app.use('/api/WOCategories', WOCategoriesRouter);

//Catch ALL
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));