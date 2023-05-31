const sql = require('mssql');
const dbConfig = require('./dbConfig');

async function executeQuery(query) {
  try {
    await sql.connect(dbConfig);
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    console.error('Database query error:', error);
  } finally {
    sql.close();
  }
}

module.exports = {
  executeQuery,
};
