class Student {
    constructor (id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }


    static getPasswordByEmail (email) {
        var connection = require('../db/Connect');
    
        var sql = 'SELECT student.password, student.name, student.id FROM student WHERE email='+connection.escape(email);

        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result);
            });
        });
    }

    static getAllDirections () {
        var connection = require('../db/Connect');
    
        var sql = 'SELECT * FROM direction ';

        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result);
            });
        });
    }

    addDirection(directions) {
        var connection = require('../db/Connect');
        var values= '';

        for (let i = 0; i < directions.length; i++) {
            if (i == 0) {
                values = '(' + directions[i].toString() + ',' + this.id + ')';
            } else {
                values += ', (' + directions[i].toString() + ',' + this.id + ')';
            }
        }

        var sql = 'INSERT INTO studentDirection (idDir, idStud) VALUES '+ values;
    
        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result);
            });
        });
    }

    getSubjectResults () {
        var connection = require('../db/Connect');
    
        var sql = 'SELECT results.value, subject.name FROM results INNER JOIN subject ON results.idSub=subject.id INNER JOIN student ON results.idStud=student.id WHERE student.id='+connection.escape(this.id);

        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result);
            });
        });
    }

    getFacOfferDirection () {
        var connection = require('../db/Connect');

        var sql = 'SELECT faculties.name FROM faculties INNER JOIN studentDirection ON faculties.idDir = studentDirection.idDir WHERE studentDirection.idStud = '+connection.escape(this.id) + ' GROUP BY faculties.name';

        return new Promise ((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result);
            });
        });

    }
}

module.exports = Student;
