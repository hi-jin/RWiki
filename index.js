const express = require('express');
const mysql = require('mysql');
const addTabTemplate = require('./template/addTabTemplate');
const bodyParser = require('body-parser');
const urlencode = require('urlencode'); 

const template = require('./template/template');

const app = express();
const port = 80;

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'express',
    password: '1284',
    database: 'rwiki'
});

conn.connect();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.redirect('/docs/rwiki');
});

app.get('/addTab', (req, res) => {
    res.send(addTabTemplate.html(req.query['title'], req.query['pageName']));
});

app.get('/docs/*', (req, res) => {
    let arr = req.path.split('/');
    let tableName = arr[arr.length - 1];

    conn.query(`select * from ${tableName}`, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(template.html('러지위키', tableName, rows));
    });
});

app.get('/findDoc/*', (req, res) => {
    let arr = req.path.split('/');
    let docName = arr[arr.length - 1];
    docName = urlencode.decode(docName);

    query = `select table_name from INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'rwiki'`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        var existSet = new Set();
        for (var i = 0; i < rows.length; i++) {
            conn.query(`SELECT * FROM ${rows[i]['TABLE_NAME']} WHERE title LIKE %${docName}%`, (err, rows) => {
                if(err) {
                    console.log(err);
                    return;
                }
                if (rows.length > 0) {
                    existSet.add(i);
                }
            });
        }
        for (var i = 0; i < rows.length; i++) {
            conn.query(`SELECT * FROM ${rows[i]['TABLE_NAME']} WHERE body LIKE '${docName}'`, (err, rows) => {
                if(err) {
                    console.log(err);
                    return;
                }
                if (rows.length > 0) {
                    existSet.add(i);
                }
            });
        }

        console.log(existSet);
    });
});

app.post('/docs/*', (req, res) => {
    let arr = req.path.split('/');
    let tableName = arr[arr.length - 1];

    conn.query(`insert into ${tableName}(title, body) values('${req.body.title}', '${req.body.body}')`, (err) => {
        res.redirect(`/docs/${tableName}`);
        if (err) {
            console.log(err);
            return;
        }
    })
});


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})