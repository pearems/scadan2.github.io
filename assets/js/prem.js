//current energy consumption update picture
function update_member(id,status) {
    $("#"+id).text(String(status));
}

$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
        apiKey: "AIzaSyDGQ36ZE2nTGHHHsd9kT0xlg2bFLsjvm4Q",
        authDomain: "python-training-6b3d2.firebaseapp.com",
        databaseURL: "https://python-training-6b3d2.firebaseio.com",
        projectId: "python-training-6b3d2",
        storageBucket: "python-training-6b3d2.appspot.com",
        messagingSenderId: "945887583845"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref("vspp/0");

    /*
    ref.on("value", function(snapshot) {
        console.log(snapshot.val().test);
        x = snapshot.val().test;
    }, function (error) {
        console.log("Error: " + error.code);
    });
    */
    // ref.child(0).on("value", function(snapshot) {
    //     console.log("There are "+snapshot.numChildren()+" messages");
    // })
    // total_load_activePower = 0;
    ref.on("child_changed",function(data){
        console.log(data.key);
        console.log(data.val());
    });
    
    // console.log(ref.val());
    // var vspp_Ref = ref.child();
    // console.log(vspp_Ref.key);
    // if (vspp.key == "1") {
    //     child_vspp = vspp.child();
    //     console.log(child_vspp.key);
    //     // console.log(child_vspp.val())
    // }

    // memeber_profitRef.on("child_changed", function(data) {
    //     console.log(data.key);
        // console.log(data.child(data.key).key);
        // update_member(data.key,data.val());
        // if(data.key == "1PV221445K1200100") {
        //     total_load_activePower  = data.val().load_activePower;
        // } else if (data.key == 'node1') {
        //     update_member(parseInt(data.val()));
        // } else {
        //     console.log("need to parse this key " + data.key)
        // }
    // });

});