
var options = {};

var pgp = require('pg-promise')(options);

const configDash = {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_NAME ||'edca',
    user: process.env.POSTGRES_USER || 'cotai_dashboard',
    password: process.env.POSTGRES_PASSWORD || 'Road1979'
};

var connectionDashboard = pgp(configDash);
////////////////////////////////


module.exports = {
    dashboard: connectionDashboard
};
