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
