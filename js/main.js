document.getElementById('formEntry').addEventListener('submit', save);

function save(e) {
  var id = document.getElementById('idID').value;
  var name = document.getElementById('nameID').value;
  var sex = document.getElementById('sexID').value;
  var age = document.getElementById('ageID').value;
  var dob = document.getElementById('birthdateID').value;
  var weight = document.getElementById('weightID').value;
  var height = document.getElementById('heightID').value;
  var eye = document.getElementById('eyeID').value;
  var hair = document.getElementById('hairID').value;
  var birthplace = document.getElementById('birthplaceID').value;
  var cityorigin = document.getElementById('selectCity').value;
  var affiliation = document.getElementById('affiliationID').value;
  var activepost = document.getElementById('currentpostID').value;

  if (!validateForm(id, name, sex, age, dob, weight, height, eye, hair, birthplace, cityorigin, affiliation, activepost)) {
    return false;
  }
  var person = {
    idperson: id,
    nameperson: name,
    sexperson: sex,
    ageperson: age,
    dobperson: dob,
    weightperson: weight,
    heightperson: height,
    eyeperson: eye,
    hairperson: hair,
    birthplaceperson: birthplace,
    cityoriginperson: cityorigin,
    affiliationperson: affiliation,
    activepostperson: activepost
  }

  if (localStorage.getItem('ges') === null) {
    var ges = [];
    ges.push(person);
    localStorage.setItem('ges', JSON.stringify(ges));
  } else {
    var ges = JSON.parse(localStorage.getItem('ges'));
    ges.push(person);
    localStorage.setItem('ges', JSON.stringify(ges));
  }
  document.getElementById('formEntry').reset();
  fetchges();
  e.preventDefault();
}

function deleteprofile(id) {
  var ges = JSON.parse(localStorage.getItem('ges'));
  alert("Are you sure want to delete " + id + " ?");

  for (var i = 0; i < ges.length; i++) {
    if (ges[i].idperson == id) {
      ges.splice(i, 1);
    }
  }
  localStorage.setItem('ges', JSON.stringify(ges));
  fetchges();
}

function fetchges() {
  var ges = JSON.parse(localStorage.getItem('ges'));
  var profilelist = document.getElementById('resultProfile');

  profilelist.innerHTML = '';

  for (var i = 0; i < ges.length; i++) {

    var id = ges[i].idperson;
    var name = ges[i].nameperson;
    var sex = ges[i].sexperson;
    var age = ges[i].ageperson;
    var dob = ges[i].dobperson;
    var weight = ges[i].weightperson;
    var height = ges[i].heightperson;
    var eye = ges[i].eyeperson;
    var hair = ges[i].hairperson;
    var birthplace = ges[i].birthplaceperson;
    var cityorigin = ges[i].cityoriginperson;
    var affiliation = ges[i].affiliationperson;
    var activepost = ges[i].activepostperson;

    profilelist.innerHTML += '<div class="well">' +
      '<label class="control-label col-sm-3">ID : </label>' +
      '<h4>' + id + '</h4>' +
      '<label class="control-label col-sm-3">Name : </label>' +
      '<h4>' + name + '</h4>' +
      '<label class="control-label col-sm-3">Sex : </label>' +
      '<h4>' + sex + '</h4>' +
      '<label class="control-label col-sm-3">Age : </label>' +
      '<h4>' + age + '</h4>' +
      '<label class="control-label col-sm-3">Date of Birth : </label>' +
      '<h4>' + dob + '</h4>' +
      '<label class="control-label col-sm-3">Weight : </label>' +
      '<h4>' + weight + ' Kilograms </h4>' +
      '<label class="control-label col-sm-3">Weight : </label>' +
      '<h4>' + height + ' Meters </h4>' +
      '<label class="control-label col-sm-3">Eye Color : </label>' +
      '<h4>' + eye + '</h4>' +
      '<label class="control-label col-sm-3">Hair : </label>' +
      '<h4>' + hair + '</h4>' +
      '<label class="control-label col-sm-3">Origin : </label>' +
      '<h4>' + birthplace + '</h4>' +
      '<label class="control-label col-sm-3">Region : </label>' +
      '<h4>' + cityorigin + '</h4>' +
      '<label class="control-label col-sm-3">Official Affiliation : </label>' +
      '<h4>' + affiliation + '</h4>' +
      '<label class="control-label col-sm-4">Current Active Post : </label>' +
      '<h4>' + activepost + '</h4>' +
      '<a href="#" onclick="deleteprofile(\'' + id + '\')" class="btn btn-danger" style="margin-left:3%;">Delete</a>' +
      '</div>';

  }
}

function validateForm(id, name, sex, age, dob, weight, height, eye, hair, birthplace, cityorigin, affiliation, activepost) {

  if (!id || !name || !sex || !age || !dob ||
    !weight || !height || !eye || !hair || !birthplace ||
    !cityorigin || !affiliation || !activepost) {
    alert("Please complete the form first!");
    return false;
  }
  return true;
}
