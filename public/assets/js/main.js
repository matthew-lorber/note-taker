window.onload = function() {
    
    document.addEventListener("click", function(event) {
        
        if (event.target.matches("#saveNote")) {
            
            var title = document.getElementById("note_title");
            var body = document.getElementById("note_text");
            var node = document.createElement("LI");
            var date = new Date();
            var now = date.toLocaleString("en-US");
            var this_id = date.getTime();
            node.innerHTML = "<li class='a_li' id='" + this_id + "'><span class='bold gray'>" + now + " " + "</span><span class='bold blue'>" + title.value + "</span>: <span>" + body.value + "<span class='delete-button bold blue float-right' id='" + this_id + "'>&#11198;</span></span></li>";
            document.getElementById("note_group").appendChild(node);
            title.value = "";
            body.value = "";
        } else if (event.target.matches(".delete-button")) {
            console.log("deletenoteclicked");
            document.getElementById(event.target.id).remove();
        } else if (event.target.matches("#viewAll")) {
            console.log("viewallclicked");
        } else if (event.target.matches("deleteAll")) {
            alert("Confirm deletion of all notes from database");
        }

    });

  

}
