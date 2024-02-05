const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    database: 'student',
    password: '1DdFaFF5**6a363e4gC-61gBAbCB2563',
    port: '41262'
});

module.exports = pool;