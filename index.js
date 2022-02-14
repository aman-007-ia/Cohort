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

var r_date = document.getElementById("r_date");


btn.addEventListener("click", fnc = () => {
    

    for (var i = 0; i < data.length; i++) {
        if (data[i].del_pune.d_date === d_date.value && data[i].del_pune.a_date === r_date.value) {

            addDom(data[i]);
            console.log(data[i]);
        }
    }

});

function addDom(e) {
    var container = document.createElement("div");
    var ruppee = document.createElement("div");
    var card = document.createElement("div");
    var firstcol = document.createElement("div");
    var secondcol = document.createElement("div");
    var thirdcol = document.createElement("div");
    var ai = document.createElement("div");
    var img = document.createElement("img");
    var book = document.createElement("div");
    var btn = document.createElement("button");

    ruppee.className="ruppee";
    ruppee.innerHTML=`<b>RS.${e.del_pune.rupee}</b>`;

    card.className="card";
    firstcol.className="first-col";
    secondcol.className="second-col";
    thirdcol.className="third-col";
    
    firstcol.innerHTML=`AI 202 <br>PNQ>DEL<br> Depart: ${e.del_pune.d_time} <br> Arrive: ${e.del_pune.a_time}`;

   
    secondcol.innerHTML=` AI 202<br>DEL>PNQ <br> Depart ${e.pune_del.d_time} <br> Arrive:${e.pune_del.a_time}`



    img.src="photo/istockphoto-155439315-170667a.jpg";
   img.width="120";
    book.className="book";
    btn.innerHTML="book this flight";
    book.appendChild(btn);
    thirdcol.appendChild(img);
    thirdcol.appendChild(book);
    card.appendChild(firstcol);
    card.appendChild(secondcol);
    card.appendChild(thirdcol);
    container.className="container-1";
    container.appendChild(ruppee);
    container.appendChild(card);    
    
   

    document.getElementById("fligths").appendChild(container);
}