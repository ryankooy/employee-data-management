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

    $(SUBMIT).on('click', '', function() {

        
    event.preventDefault()

    var nameStart = $("#name").val().trim()
    var roleStart = $("#role").val().trim()
    var dateStart = $("#startDate").val().trim()
    var monthlyPayStart = $("#monthly").val().trim()

    console.log(nameStart, roleStart, dateStart, monthlyPayStart)

    var monthsPaid = moment(dateStart).diff(moment(), "month")

    var totalBilled = monthsPaid * monthlyPayStart

    console.log(totalBilled)
        
    });

});











// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCTIAppQqJZCBIsN3ok1UXGejv11Nfgzy8",
//     authDomain: "projectification-21972.firebaseapp.com",
//     databaseURL: "https://projectification-21972.firebaseio.com",
//     projectId: "projectification-21972",
//     storageBucket: "",
//     messagingSenderId: "649772529131",
//     appId: "1:649772529131:web:fbd2d6151a638a37"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>