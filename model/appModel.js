const sql = require('../db/connection');

var Task = function(task) {
    this.task = task.task;
    this.status = task.status;
};

Task.createTask = function (newTask, result) {
    sql.query("INSERT INTO notes set ?", newNote, function (err, res) {
        if (err) {
            console.log("error", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
