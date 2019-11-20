window.onload = function() {

    document.getElementById("saveNote").addEventListener("click", function() {
        
        var title = document.getElementById("note_title");
        var body = document.getElementById("note_text");
        var node = document.createElement("LI");
        var date = new Date();
        var now = date.toLocaleString("en-US");
        var this_id = date.getTime();
        node.innerHTML = "<li class='a_li' id='" + this_id + "'><span class='bold gray'>" + now + " " + "</span><span class='bold blue'>" + title.value + "</span>: <span>" + body.value + "<span class='delete-button bold blue float-right'>&#11198;</span></span></li>";
        document.getElementById("note_group").appendChild(node);
        document.getElementById(this_id).addEventListener("click", delete_li(), false);
        title.value = "";
        body.value = "";

    });

    function delete_li() {
        var this_li = this.id; console.log(this_li)
        //this_li.remove();
    }

}
