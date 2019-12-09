import { express } from "../../../server";

// This script handles the incoming clicks on notes.html and sends them to front and backend  
$("#saveNote").on("click", () => {
    
    /* Try to store note in the database first. If err then user can try again without losing the note */
    const t = document.getElementById("note_title");
    const b = document.getElementById("note_text");
    const note = {
        title: t.value,
        body: b.value
    };

    express.Router().post("/new", function(req, res) {console.log("hit add new note route");
    connection.query("INSERT INTO notes SET ?", [note], function(err, result) {
        if (err) throw err;

        res.json(result);
        });
    }).then(cb => {
        if (cb) {
            console.log("good save to db");
            writeToScreen(t, b);
        } else {
            alert("Something went wrong while saving this note");
        }
    });

    writeToScreen = (t, b) => {

    const node = document.createElement("LI");

    // Below to add the date & time to the note, using the time as itsconst
    const date = new Date();
    const now = date.toLocaleString("en-US");
    const this_id = date.getTime();

    // This is the note's html plus variable values from above
    node.innerHTML = "<li class='a_li' id='" + 
    this_id + "'><span class='blue'>" + now + " " + "</span><span class='bold blue'>" + t.value + "</span>: <span>" + b.value + "<span class='delete-button bold blue float-right' id='" + this_id + "'>&#11198;</span></span></li>";
    document.getElementById("note_group").appendChild(node);

    // Resetting input fields to placeholders
    title.value = "";
    body.value = "";

    }

    
});

$(".delete-button").on("click", event => {
    console.log("deletenoteclicked");
    //document.getElementById(event.target.id).remove();
});

$("#viewAll").on("click", () => {
    console.log("viewallclicked");
    // app.get("/notes", function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    //     });
});