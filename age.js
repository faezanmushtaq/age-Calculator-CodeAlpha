function calculateAge() {
  // Get user's date of birth
  var dob = document.getElementById("dob").value;

  // Create Date objects for birth date and today's date
  var birthDate = new Date(dob);
  var today = new Date();

  // Calculate the difference in milliseconds
  var timeDiff = Math.abs(today - birthDate);

  // Convert milliseconds to years, months, and days
  var years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

  // Display the age
  document.getElementById("result").innerHTML = "You are " + years + " years, " + months + " months, and " + days + " days old!";
}
