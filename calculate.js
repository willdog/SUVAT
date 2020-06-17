document.getElementById("submit").addEventListener('click', calculate);
document.getElementById("reset").addEventListener('click', reset);

function reset() {
    document.getElementById("s").value = "";
    document.getElementById("u").value = "";
    document.getElementById("v").value = "";
    document.getElementById("a").value = "";
    document.getElementById("t").value = "";
}

function calculate() {
    let func = "";
    let s = document.getElementById("s").value;
    if (s !== "") {
        func = func + "s"
    }

    let u = document.getElementById("u").value;
    if (u !== "") {
        func = func + "u"
    }

    let v = document.getElementById("v").value;
    if (v !== "") {
        func = func + "v"
    }

    let a = document.getElementById("a").value;
    if (a !== "") {
        func = func + "a"
    }

    let t = document.getElementById("t").value;
    if (t !== "") {
        func = func + "t"
    }

    if (func.length !== 3) {
        alert("Please enter three variables.");
        return true
    }

    if (func.includes("suv")) {
        document.getElementById("a").value = (Math.pow(v, 2) - Math.pow(u, 2)) / (2 * s);
        document.getElementById("t").value = (2 * s) / (u + v);
        return true
    }
    if (func.includes("sua")) {
        document.getElementById("v").value = Math.sqrt(Math.pow(u, 2) + 2 * a * s);
        document.getElementById("t").value = (Math.sqrt(2 * a * s + Math.pow(u, 2)) - u) / a;
        return true
    }
    if (func.includes("sut")) {
        document.getElementById("v").value = ((2 * s) / t) - u;
        document.getElementById("a").value = (2 * (s - u * t)) / Math.pow(t, 2);
        return true
    }
    if (func.includes("sva")) {
        document.getElementById("u").value = Math.sqrt(2 * a * s - Math.pow(v, 2));
        document.getElementById("t").value = (v - Math.sqrt(Math.pow(v, 2) - 2 * a * s)) / a;
        return true
    }
    if (func.includes("svt")) {
        document.getElementById("u").value = ((2 * s) / t) + v;
        document.getElementById("a").value = (2 * (v * t - s)) / Math.pow(t, 2);
        return true
    }
    if (func.includes("sat")) {
        document.getElementById("u").value = (1 / t) * (s - 0.5 * a * Math.pow(t, 2));
        document.getElementById("v").value = (1 / t) * (s + 0.5 * a * Math.pow(t, 2));
        return true
    }

    if (func.includes("uva")) {
        document.getElementById("s").value = (Math.pow(v, 2) - Math.pow(u, 2)) / (2 * a);
        document.getElementById("t").value = (v - u) / a;
        return true
    }
    if (func.includes("uvt")) {
        document.getElementById("s").value = (t / 2) * (u + v);
        document.getElementById("a").value = (v - u) / t;
        return true
    }
    if (func.includes("uat")) {
        document.getElementById("s").value = (u * t) + 0.5 * a * Math.pow(t, 2);
        document.getElementById("v").value = u + a * t;
        return true
    }

    if (func.includes("vat")) {
        document.getElementById("s").value = (v * t) - 0.5 * a * Math.pow(t, 2);
        document.getElementById("u").value = v - a * t;
    }
}