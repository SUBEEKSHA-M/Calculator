function goToPage2() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Check if fields are filled
    if (!name || !email) {
        alert("Please fill in your name and email.");
        return;
    }

    // Show page 2 and hide page 1
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
}

// Calculator Functions
function add() {
    var a = f.cal.value;
    var last = a.charAt(a.length - 1);
    if (['+', '-', '*', '/'].includes(last)) {
        f.cal.value = a.slice(0, -1) + '+';
    } else {
        f.cal.value += '+';
    }
}

function sub() {
    var a = f.cal.value;
    var last = a.charAt(a.length - 1);
    if (['+', '-', '*', '/'].includes(last)) {
        f.cal.value = a.slice(0, -1) + '-';
    } else {
        f.cal.value += '-';
    }
}

function div() {
    var a = f.cal.value;
    var last = a.charAt(a.length - 1);
    if (['+', '-', '*', '/'].includes(last)) {
        f.cal.value = a.slice(0, -1) + '/';
    } else {
        f.cal.value += '/';
    }
}

function mul() {
    var a = f.cal.value;
    var last = a.charAt(a.length - 1);
    if (['+', '-', '*', '/'].includes(last)) {
        f.cal.value = a.slice(0, -1) + '*';
    } else {
        f.cal.value += '*';
    }
}
