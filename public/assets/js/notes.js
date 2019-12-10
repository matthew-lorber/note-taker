// This script handles the incoming clicks on notes.html and sends them to front and backend  
$("#saveNote").on("click", () => {
    const t = $("#note_title");
    const n = $("#note_text");

    // Below to add the date & time to the note, using the time as its id
    const date = new Date();
    const now = date.toLocaleString("en-US");
    const this_id = date.getTime();

    /* Try to store note in the database first. If err then user can try again without losing the note */
    $.ajax({ type: "POST", dataType: "json", url: "/new", data: { id: this_id, title: t.val(), note: n.val() }})
    .then(() => {
        const node = document.createElement("LI");

        // This is the note's html plus variable values from above
        node.innerHTML = "<li class='a_li'><span class='blue'>" + now + " " + "</span><span class='bold blue'>" + t.val() + "</span>: <span>" + n.val() + "<span class='deleteButton bold blue float-right' id='" + this_id + "'>&#11198;</span></span></li>";
        document.getElementById("note_group").prepend(node);
    
        // Resetting input fields to placeholders
        t.val("");
        n.val("");
    });
});

$("body").click(() => {
    if (event.target.classList.contains("deleteButton")) {
        const note_id = event.target.id;
        /* Try to delete note from the database first. If err then user can try again without losing the note */
        $.ajax({ method: "DELETE", dataType: "json", url: "/delete", data: { id: note_id }})
        .then(() => {
            document.getElementById(note_id).parentNode.parentNode.remove();
        });
    }
});

$("#viewAll").click(() => {
        $.ajax({ type: "GET", dataType: "json", url: "/view"})
    .then((res) => {console.log(res);
        for (let i=0; i<res.length; i++) {
            const note = res[i];
            // This is the note's html plus variable values from above
            const node = "<li class='a_li'><span class='blue'>" + Date(note.id).toLocaleString() + " " + "</span><span class='bold blue'>" + note.title + "</span>: <span>" + note.body + "<span class='deleteButton bold blue float-right' id='" + note.id + "'>&#11198;</span></span></li>";
            $("#note_group").append(node);
        }
    });
    
});