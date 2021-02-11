
var options = {};

var pgp = require('pg-promise')(options);

const config = {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_NAME ||'edca',
    user: process.env.POSTGRES_USER || 'cotai_captura',
    password: process.env.POSTGRES_PASSWORD || 'Metro2033'
};

var edca_db = pgp(config);

console.log('DB Config -> ', JSON.stringify(config));

const configDash = {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_NAME ||'edca',
    user: process.env.POSTGRES_USER || 'cotai_dashboard',
    password: process.env.POSTGRES_PASSWORD || 'Road1979'
};

var connectionDashboard = pgp(configDash);
var dash_user = configDash.user;


module.exports = {
    pgp: pgp,
    edca_db : edca_db,
    dashboard: connectionDashboard,
    dash_user: dash_user
};
