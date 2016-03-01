$(document).ready(function () {
  setInterval(function () {
    $.get("http://tm-vote.herokuapp.com/list", function (data) {
      for (var i = 0; i < data.projects.length; i++) {
        var project = data.projects[i];
        $("#project" + i + " .votes").html(project.votes);
        $("#project" + i + " .bar").css("width", project.votes * 3.5)
      }
      console.log('Load was performed.');
    });
  }, 2000);
});