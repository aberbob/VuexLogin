const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { PORT, TOKEN_SECRET } = require('./config/dotenv');

const EquipmentInspectionsRouter = require('./routes/api/EquipmentInspectionsRouter');
const partsRouter = require('./routes/api/PartsRouter');
const PartCategoriesRouter = require('./routes/api/inventory/PartCategoriesRouter');
const PartSubcategoriesRouter = require('./routes/api/inventory/PartSubcategoriesRouter');
const InventoryLocationsRouter = require('./routes/api/inventory/InventoryLocationsRouter');
const OrdersRouter = require('./routes/api/OrdersRouter');
const TransfersRouter = require('./routes/api/TransfersRouter');
const usersRouter = require('./routes/api/usersRouter');
// const apiRouter = require('./routes/apiRouter');
const custOrganizationsRouter = require('./routes/api/organization/custOrganizationsRouter');
const custContactsRouter = require('./routes/api/custContacts/CustContactsRouter');
const CustContactStatusesRouter = require('./routes/api/custContacts/CustContactStatusesRouter');
const EquipmentProfilesRouter = require('./routes/api/EquipmentProfilesRouter');
const WorkOrdersRouter = require('./routes/api/workOrders/WorkOrdersRouter');
const WOStatusesRouter = require('./routes/api/workOrders/WOStatusesRouter');
const WOPrioritiesRouter = require('./routes/api/workOrders/WOPrioritiesRouter');
const WOCategoriesRouter = require('./routes/api/workOrders/WOCategoriesRouter');
const OrgAccountTypesRouter = require('./routes/api/organization/OrgAccountTypesRouter');
const OrgFarmTypesRouter = require('./routes/api/organization/OrgFarmTypesRouter');
const OrgInvoicingTypesRouter = require('./routes/api/organization/OrgInvoicingTypesRouter');
const OrgMarketsRouter = require('./routes/api/organization/OrgMarketsRouter');
const OrgServicePlanTypesRouter = require('./routes/api/organization/OrgServicePlanTypesRouter');
const OrgST101TypesRouter = require('./routes/api/organization/OrgST101TypesRouter');
const PlanterClosingWheelsRouter = require('./routes/api/planter/PlanterClosingWheelsRouter');
const PlanterDepthAdjustRouter = require('./routes/api/planter/PlanterDepthAdjustRouter');
const PlanterDownForceRouter = require('./routes/api/planter/PlanterDownForceRouter');
const PlanterDriveRouter = require('./routes/api/planter/PlanterDriveRouter');
const PlanterHarnessingRouter = require('./routes/api/planter/PlanterHarnessingRouter');
const PlanterInsecticideRouter = require('./routes/api/planter/PlanterInsecticideRouter');
const PlanterLiquidRouter = require('./routes/api/planter/PlanterLiquidRouter');
const PlanterMeterRouter = require('./routes/api/planter/PlanterMeterRouter');
const PlanterMonitorRouter = require('./routes/api/planter/PlanterMonitorRouter');
const PlanterSeedFirmersRouter = require('./routes/api/planter/PlanterSeedFirmersRouter');
const PlanterSeedTubesRouter = require('./routes/api/planter/PlanterSeedTubesRouter');
const CartDraftsRouter = require('./routes/api/CartDraftsRouter');
const InfoRouter = require('./routes/api/InfoRouter');
const AuthRouter = require('./routes/api/auth/index.js');
const MarketItemsRouter = require('./routes/api/market/MarketItemsRouter');

const app = express();
const volleyball = require('volleyball');
// const session = require('express-session');
require('./config/passport');

const middlwares = require('./routes/api/auth/middlewares')

const TWO_HOURS = 1000 * 60 * 60 * 4
// const {
//   SESS_ID = 'sid',
//   SESS_LIFETIME = TWO_HOURS,
// } = process.env

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
app.use(cookieParser())
app.use(volleyball);
// app.use(session({
//   name: SESS_ID,
//   resave: false,
//   saveUninitialized: false,
//   secret: TOKEN_SECRET,
//   cookie: {
//     maxAge: SESS_LIFETIME,
//     sameSite: true,
//     secure: false,
//   }
// }));
//app.use(middlwares.checkTokenSetUser);

//STATIC ROUTE
app.use('/', express.static(__dirname + '/public'));

//Auth Routes
app.use('/auth', AuthRouter);

//API routes
app.use('/api/marketitems', MarketItemsRouter);
app.use('/api/info', InfoRouter);
app.use('/api/parts', partsRouter);
app.use('/api/PartCategories', PartCategoriesRouter);
app.use('/api/PartSubcategories', PartSubcategoriesRouter);
app.use('/api/InventoryLocations', InventoryLocationsRouter);
// app.use('/api', apiRouter);
app.use('/api/organizations', custOrganizationsRouter);
app.use('/api/orders', OrdersRouter);
app.use('/api/transfers', TransfersRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/users', usersRouter);
app.use('/api/contacts', custContactsRouter);
app.use('/api/custcontactstatuses', CustContactStatusesRouter);
app.use('/api/equipmentprofiles', EquipmentProfilesRouter);
app.use('/api/WorkOrders', WorkOrdersRouter);
app.use('/api/WOStatuses', WOStatusesRouter);
app.use('/api/WOPriorities', WOPrioritiesRouter);
app.use('/api/WOCategories', WOCategoriesRouter);
app.use('/api/OrgAccountTypes', OrgAccountTypesRouter);
app.use('/api/OrgFarmTypes', OrgFarmTypesRouter);
app.use('/api/OrgInvoicingTypes', OrgInvoicingTypesRouter);
app.use('/api/OrgMarkets', OrgMarketsRouter);
app.use('/api/OrgServicePlanTypes', OrgServicePlanTypesRouter);
app.use('/api/OrgST101Types', OrgST101TypesRouter);
app.use('/api/PlanterClosingWheels', PlanterClosingWheelsRouter);
app.use('/api/PlanterDepthAdjust', PlanterDepthAdjustRouter);
app.use('/api/PlanterDownForce', PlanterDownForceRouter);
app.use('/api/PlanterDrive', PlanterDriveRouter);
app.use('/api/PlanterHarnessing', PlanterHarnessingRouter);
app.use('/api/PlanterInsecticide', PlanterInsecticideRouter);
app.use('/api/PlanterLiquid', PlanterLiquidRouter);
app.use('/api/PlanterMeter', PlanterMeterRouter);
app.use('/api/PlanterMonitor', PlanterMonitorRouter);
app.use('/api/PlanterSeedFirmers', PlanterSeedFirmersRouter);
app.use('/api/PlanterSeedTubes', PlanterSeedTubesRouter);
app.use('/api/CartDrafts', CartDraftsRouter);
app.use('/api/EquipmentInspections', EquipmentInspectionsRouter);

//Catch ALL
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));