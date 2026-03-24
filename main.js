function compute_area() {

    // get values
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;

    // convert to number
    base = Number(base);
    height = Number(height);

    // compute area
    var area = (base * height) / 2;

    // display result
    document.getElementById("output").innerHTML =
        "The area of the triangle is " + area;
}