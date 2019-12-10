// This script handles the incoming clicks on notes.html and sends them to front and backend  
$("#saveNote").on("click", () => {
    const t = $("#note_title");
    const n = $("#note_text");
    /* Try to store note in the database first. If err then user can try again without losing the note */
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/new",
        data: {
            title: t.val(),
            note: n.val()
        }
    }).then(() => {
        const node = document.createElement("LI");

        // Below to add the date & time to the note, using the time as its id
        const date = new Date();
        const now = date.toLocaleString("en-US");
        const this_id = date.getTime();
    
        // This is the note's html plus variable values from above
        node.innerHTML = "<li class='a_li' id='" + 
        this_id + "'><span class='blue'>" + now + " " + "</span><span class='bold blue'>" + t.val() + "</span>: <span>" + n.val() + "<span class='delete-button bold blue float-right' id='" + this_id + "'>&#11198;</span></span></li>";
        document.getElementById("note_group").appendChild(node);
    
        // Resetting input fields to placeholders
        t.value = "";
        n.value = "";
    });
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

    router.get("/notes", function(req, res) {console.log("hit read all notes route");
    connection.query("SELECT * FROM notes", function(err, dbnewNote) {
        if (err) throw err;

        res.json(dbnewNote);
     });
    });
});