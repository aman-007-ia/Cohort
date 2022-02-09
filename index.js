var data = [{
        "del_pune": {
            "rupee": 9500,
            "d_time": "10:00 AM",
            "a_time": "11:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "PNQ > DEL",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        },
        "pune_del": {
            "rupee": 9500,
            "d_time": "8:00 PM",
            "a_time": "11:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "DEL > PNQ",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        }


    },
    {
        "del_pune": {
            "rupee": 10500,
            "d_time": "11:00 AM",
            "a_time": "1:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "PNQ > DEL",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        },
        "pune_del": {
            "rupee": 10500,
            "d_time": "9:00 PM",
            "a_time": "12:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "DEL > PNQ",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        }


    },
    {
        "del_pune": {
            "rupee": 11500,
            "d_time": "8:00 AM",
            "a_time": "11:00 AM",
            "from": "Delhi",
            "to": "Pune",
            "head": "PNQ > DEL",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        },
        "pune_del": {
            "rupee": 9500,
            "d_time": "11:00 PM",
            "a_time": "2:00 AM",
            "from": "Delhi",
            "to": "Pune",
            "head": "DEL > PNQ",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        }


    },
    {
        "del_pune": {
            "rupee": 15000,
            "d_time": "10:00 AM",
            "a_time": "12:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "PNQ > DEL",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        },
        "pune_del": {
            "rupee": 15000,
            "d_time": "8:00 PM",
            "a_time": "11:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "DEL > PNQ",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        }


    },
    {
        "del_pune": {
            "rupee": 14500,
            "d_time": "10:00 AM",
            "a_time": "12:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "PNQ > DEL",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        },
        "pune_del": {
            "rupee": 14500,
            "d_time": "8:00 PM",
            "a_time": "11:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "DEL > PNQ",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        }
    },
    {
        "del_pune": {
            "rupee": 14500,
            "d_time": "10:00 AM",
            "a_time": "12:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "PNQ > DEL",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        },
        "pune_del": {
            "rupee": 14500,
            "d_time": "8:00 PM",
            "a_time": "11:00 PM",
            "from": "Delhi",
            "to": "Pune",
            "head": "DEL > PNQ",
            "d_date": "2021-01-10",
            "a_date": "2021-02-10",
        }



    }


]
var btn = document.getElementById("btn");

var d_date = document.getElementById("d_date");
var fligth = document.getElementById("fligths");
var r_date = document.getElementById("r_date");
var range = document.getElementById("range-bar");
var text = document.getElementById("text-right");
var origin = document.getElementById("origin");
var dest = document.getElementById("dest");
var city = document.getElementById("text-left");


btn.addEventListener("click", fnc = () => {
    city.className = "text-left";
    city.innerHTML = ` <b> ${origin.value} > ${dest.value} > ${origin.value}</b>`;
    text.className = "text-right";
    text.innerHTML = `Depart : ${d_date.value}<br> Return : ${r_date.value}`;


    for (var i = 0; i < data.length; i++) {
        if (data[i].del_pune.d_date === d_date.value && data[i].del_pune.a_date === r_date.value) {

            addDom(data[i]);
        }
    }

});

function addDom(e) {
    var card = document.createElement("div");
    var ruppee = document.createElement("div");
    var details = document.createElement("div");
    var detleft = document.createElement("div");
    var detright = document.createElement("div");
    var ai = document.createElement("div");
    var br = document.createElement("br");
    ruppee.className = "ruppee";
    ruppee.innerHTML = e.del_pune.rupee;
    card.appendChild(ruppee);


    detright.className = "det-right";
    detleft.className = "det-left";

    detright.innerHTML = `AI 202 <br> <b> PNQ>DEL </b><br>Depart: ${e.del_pune.d_time}<br>Arrive ${e.del_pune.a_time} `;

    detleft.innerHTML = `AI 203 <br><b> DEL>PNQ </b> <br>Depart: ${e.pune_del.d_time}<br> Arrive: ${e.del_pune.a_time}`;
    details.appendChild(detleft);
    details.appendChild(detright);
    card.className = "card";

    card.appendChild(details);




    document.getElementById("fligths").appendChild(card);
}