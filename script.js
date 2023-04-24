var guestList = [];

function capitalizeFirstLetter(input) {
  var firstLetter = input.slice(0, 1);
  var upperCaseFirstLetter = firstLetter.toUpperCase();
  var restOfName = input.slice(1, input.length);
  var lowerRestOfName = restOfName.toLowerCase();
  var name = upperCaseFirstLetter + lowerRestOfName;
  return name;
}

function addToGuestList() {
  var firstName = document.getElementById("firstnameAdd").value;
  var lastName = document.getElementById("lastnameAdd").value;
  var name =
    capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName);
  guestList.push(name);
  document.querySelector("ol").innerHTML +=
    "<li class= 'list-group-item'> " + name + "</li>";
  document.getElementById("firstnameAdd").value = null;
  document.getElementById("lastnameAdd").value = null;
}

function checkInGuestList() {
  var firstName = document.getElementById("firstnameCheck").value;
  var lastName = document.getElementById("lastnameCheck").value;
  var name =
    capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName);
  var test = guestList.includes(name);

  if (test === true) {
    document.getElementById("verifyResult").innerHTML =
      "✅ " + name + " is in the guest List";
    document.getElementById("verifyResult").style.color = "green";
  } else {
    document.getElementById("verifyResult").innerHTML =
      "❌ " + name + " is <strong>not</strong> in the guest List";
    document.getElementById("verifyResult").style.color = "red";
  }
}
