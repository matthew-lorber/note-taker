
//var app = require("../../../");

document.addEventListener("click", function(event) {
    
    if (event.target.matches("#saveNote")) {console.log("here");
        
        const title = document.getElementById("note_title");
        const body = document.getElementById("note_text");
        const node = document.createElement("LI");

        // Below to add the date & time to the note, using the time as itsconst
        const date = new Date();
        const now = date.toLocaleString("en-US");
        const this_id = date.getTime();

        // This is the note's html plus variable values from above
        node.innerHTML = "<li class='a_li' id='" + 
        this_id + "'><span class='blue'>" + now + " " + "</span><span class='bold blue'>" + title.value + "</span>: <span>" + body.value + "<span class='delete-button bold blue float-right' id='" + this_id + "'>&#11198;</span></span></li>";
        document.getElementById("note_group").appendChild(node);

        // Resetting input fields to placeholders
        title.value = "";
        body.value = "";
        // $.post("/new",data,callback);
        app.post("/new",data);
    } 
    
    else if (event.target.matches(".delete-button")) {
        console.log("deletenoteclicked");
        document.getElementById(event.target.id).remove();
    } 
    
    else if (event.target.matches("#viewAll")) {
        console.log("viewallclicked");
        app.get("/notes", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            });
    } 

});

  


