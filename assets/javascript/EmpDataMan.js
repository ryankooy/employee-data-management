$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyCTIAppQqJZCBIsN3ok1UXGejv11Nfgzy8",
        authDomain: "projectification-21972.firebaseapp.com",
        databaseURL: "https://projectification-21972.firebaseio.com",
        projectId: "projectification-21972",
        storageBucket: "",
        messagingSenderId: "649772529131",
        appId: "1:649772529131:web:fbd2d6151a638a37"
    };

    firebase.initializeApp(firebaseConfig);

    database = firebase.database();

    $('.btn').on('click', function(event) {

        event.preventDefault();

        var nameStart = $("#name").val().trim();
        var roleStart = $("#role").val().trim();
        var dateStart = $("#startDate").val().trim();
        var monthlyPayStart = $("#monthly").val().trim();

        console.log(nameStart, roleStart, dateStart, monthlyPayStart);

        var monthsPaid = moment(dateStart).diff(moment(), "month");

        var totalBilled = monthsPaid * monthlyPayStart;

        console.log(totalBilled);

        database.ref().push({

            name: nameStart,
            role: roleStart,
            date: dateStart,
            monthsWorked: monthsPaid,
            pay: monthlyPayStart,
            total: totalBilled

        });

    });

    database.ref().on('child_added', function(snapshot) {

        var s = snapshot.val();

        $('#employee_name').text(s.name);
        $('#role').text(s.role);
        $('#start_date').text(s.date);
        $('#months_worked').text(s.monthsWorked);
        $('#monthly_rate').text(s.pay);
        $('#total_billed').text(s.total);

    });
        
});