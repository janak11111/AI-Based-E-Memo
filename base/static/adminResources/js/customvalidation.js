function addArea() {
    if ($('#areaname').val().trim() === '') {
        $('#areaname').focus();
        showErrorToast('Please Enter Area Name');
        return false;
    } else if ($('#areaname').val().length < 3) {
        $('#areaname').focus();
        showErrorToast('Please Enter Valid Area Name');
        return false;
    } else if ($('#areapincode').val().trim() === '') {
        $('#areapincode').focus();
        showErrorToast('Please Enter Picode');
        return false;
    } else if (($('#areapincode').val().length <= 5)) {
        $('#areapincode').focus();
        showErrorToast('Please Enter 6-Digit Pincode');
        return false;
    }
    else {
        return true;
    }
}

function resetPassword() {
    if ($('#newpassword').val().trim() === '') {
        $('#newpassword').focus();
        showErrorToast('Please Enter New Password');
        return false;
    } else if ($('#newpassword').val().length < 8) {
        $('#newpassword').focus();
        showErrorToast('Please Enter 8-Char New Password');
        return false;
    } else if ($('#confirmpassword').val().trim() === '') {
        $('#confirmpassword').focus();
        showErrorToast('Please Enter Confirm Password');
        return false;
    } else if (($('#confirmpassword').val().length < 8)) {
        $('#confirmpassword').focus();
        showErrorToast('Please Enter 8-Char Confirm Password');
        return false;
    }
    else {
        return true;
    }
}

function login() {
    if ($('#username').val().trim() === '') {
        $('#username').focus();
        showErrorToast('Please Enter Username');
        return false;
    } else if ($('#password').val().trim() === '') {
        $('#password').focus();
        showErrorToast('Please Enter Password');
        return false;
    } else if ($('#password').val().length < 8) {
        $('#password').focus();
        showErrorToast('Please Enter 8-Character Password');
        return false;
    } else {
        return true;
    }
}


function validateOtp() {
    if ($('#Otp').val().trim() === '') {
        $('#Otp').focus();
        showErrorToast('Please Enter otp');
        return false;
    }  else {
        return true;
    }
}

function forgotPassword() {
    if ($('#email').val().trim() === '') {
        $('#email').focus();
        showErrorToast('Please Enter Email');
        return false;
    } else {
        return true;
    }
}


function addComplain() {

    if ($('#complainsubject').val().trim() === '') {
        $('#complainsubject').focus();
        showErrorToast('Please Enter Complain Subject');
        return false;
    } else if ($('#complainsubject').val().trim().length < 3) {
        $('#complainsubject').focus();
        showErrorToast('Please Enter Valid Complain Subject');
        return false;
    } else if ($('#complaindescription').val().trim().length < 3) {
        $('#complaindescription').focus();
        showErrorToast('Please Enter Complain Description');
        return false;
    } else if ($('#complaindescription').val().trim().length < 3) {
        $('#complaindescription').focus();
        showErrorToast('Please Enter Valid Complain Description');
        return false;
    }
    else {
        return true;
    }
}

function addFeedback() {

    if ($('#feedbackdescription').val().trim() === '') {
        $('#feedbackdescription').focus();
        showErrorToast('Please Enter Feedback Description');
        return false;
    } else if ($('#feedbackdescription').val().trim().length < 3) {
        $('#feedbackdescription').focus();
        showErrorToast('Please Enter Valid Feedback Description');
        return false;
    } else {
        return true;
    }
}

function replyComplain() {

    if ($('#complainreplydescription').val().trim() === '') {
        $('#complainreplydescription').focus();
        showErrorToast('Please Enter Reply of Complain');
        return false;
    } else if ($('#complainreplydescription').val().trim().length < 3) {
        $('#complainreplydescription').focus();
        showErrorToast('Please Enter Valid Reply of Complain');
        return false;
    } else {
        return true;
    }
}

function addCrossroad() {

    if ($('#areaname').val() === 'Select Area') {
        $('#areaname').focus();
        showErrorToast('Please Select area name');
        return false;
    } else if ($('#crossroadname').val().trim() === '') {
        $('#crossroadname').focus();
        showErrorToast('Please Enter Crossroad Name');
        return false;
    } else if ($('#crossroadname').val().length < 3) {
        $('#crossroadname').focus();
        showErrorToast('Please Enter Valid Crossroad Name');
        return false;
    }
    else {
        return true;
    }
}


function editCrossroad() {

    if ($('#areaname').val() === 'Select Area') {
        $('#areaname').focus();
        showErrorToast('Please Select area name');
        return false;
    } else if ($('#crossroadname').val().trim() === '') {
        $('#crossroadname').focus();
        showErrorToast('Please Enter Crossroad Name');
        return false;
    } else if ($('#crossroadname').val().length < 3) {
        $('#crossroadname').focus();
        showErrorToast('Please Enter Valid Crossroad Name');
        return false;
    }
    else {
        return true;
    }
}

function addUser() {


    if ($('#trafficpolicestationname').val() === '') {
        $('#trafficpolicestationname').focus();
        showErrorToast('Please Enter  Police Station Name');
        return false;
    } else if ($('#trafficpolicestationname').val().length < 3) {
        $('#trafficpolicestationname').focus();
        showErrorToast('Please Enter Valid Police Station Name');
        return false;
    } else if ($('#areaname').val() === 'Select Area') {
        $('#areaname').focus();
        showErrorToast('Please Select area name');
        return false;
    } else if ($('#trafficpoliceheadname').val().trim() === '') {
        $('#trafficpoliceheadname').focus();
        showErrorToast('Please Enter Police Head Name');
        return false;
    } else if ($('#trafficpoliceheadname').val().length < 3) {
        $('#trafficpoliceheadname').focus();
        showErrorToast('Please Enter Valid Police Head Name');
        return false;
    } else if ($('#trafficpoliceheadcontact').val().trim() === '') {
        $('#trafficpoliceheadcontact').focus();
        showErrorToast('Please Enter Traffic Police Head Contact');
        return false;
    } else if ($('#trafficpoliceheadcontact').val().length < 9) {
        $('#trafficpoliceheadcontact').focus();
        showErrorToast('Please Enter 10-Digit Traffic Police Head Contact');
        return false;
    } else if ($('#username').val().trim() === '') {
        $('#username').focus();
        showErrorToast('Please Enter Traffic Police Head Username');
        return false;
    } else {
        return true;
    }
}