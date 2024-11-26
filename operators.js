let monthBirth = parseInt(prompt("Please enter the month of your birthday (For example: January = 1):"));
if (monthBirth == 12 || monthBirth == 1 || monthBirth == 2) {
    alert("You were born in Winter");
} else if (monthBirth >= 3 && monthBirth <= 5) {
    alert("You were born in Spring");
} else if (monthBirth >= 6 && monthBirth <= 8) {
    alert("You were born in Summer");
} else if (monthBirth >= 9 && monthBirth <= 11) {
    alert("You were born in Autumn");
} else {
    alert("Please enter a number between 1 and 12.");
}
