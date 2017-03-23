$(document).ready(function() {
 var age = parseInt(prompt("Please enter your age"));

    if (age >= 18) {
      $("#canVote").show();
      } else if (age === 18){
          $("#canVote").show();
      } else {
        $("#cantVote").show();
      }
});
