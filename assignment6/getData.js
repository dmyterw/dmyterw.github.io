const txt = '{"number": 10, "people": [{"craft": "ISS", "name": "Mark Vande Hei"}, {"craft": "ISS", "name": "Pyotr Dubrov"}, {"craft": "ISS", "name": "Thomas Pesquet"}, {"craft": "ISS", "name": "Megan McArthur"}, {"craft": "ISS", "name": "Shane Kimbrough"}, {"craft": "ISS", "name": "Akihiko Hoshide"}, {"craft": "ISS", "name": "Anton Shkaplerov"}, {"craft": "Shenzhou 13", "name": "Zhai Zhigang"}, {"craft": "Shenzhou 13", "name": "Wang Yaping"}, {"craft": "Shenzhou 13", "name": "Ye Guangfu"}], "message": "success"}'
    const data = JSON.parse(txt);

const iss = data['people'].filter(obj => {
    return obj.craft === "ISS"
})

const shen = data['people'].filter(obj => {
    return obj.craft === "Shenzhou 13"
})

$(function() {
    $("#numPeople").text(data.number);
    iss.forEach( (d) => { 
        $("#issName").append('<li>' + d['name'] + '</li>')
    });
$(function() {
    $("#numPeople").text(data.number);
    shen.forEach( (d) => { 
        $("#shenName").append('<li>' + d['name'] + '</li>');
    });
});
})
