// Question: What does this code do?
$("#submit").on("click", function (event) {
    event.preventDefault();
    var newCustomer = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        unique: $("#unique").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/customers", newCustomer)
        .then(function (data) {
            console.log("html/resrevations.html", data);
            alert("Adding customer...");
        });
});









var customersAtTables = [];
var customersWaiting = [];

$.get("/api/tables", function (data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const element = array[i];

        if (data) {
            let person = $("<div class='well id='tableWell-0" + i + ">");
            let personnumb = $('<h3><span class="label label-primary">' + i + '</span>' + data[i].unique + '</h3>')

            personnumb.appendTo(person);
            person.appendTo("#reserved");

        }
    }
});


$.get("/api/waitlist", function (data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const element = array[i];

        if (data) {
            let person = $("<div class='well id='tableWell-0" + i + ">");
            let personnumb = $('<h3><span class="label label-primary">' + i + '</span>' + data[i].unique + '</h3>')

            personnumb.appendTo(person);
            person.appendTo("#waiting");

        }
    }
});


