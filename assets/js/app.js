//Initial Values
const key = config.API_KEY;

//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const InputElement = document.querySelector('#inputValue');

buttonElement.onclick = function(event) {
  console.log('Hello World, this button has been clicked');
}



$(document).ready(function() {
  $("#movieForm").submit(function(event)
  {
    event.preventDefault();

    $("#movieResults").empty();

    var movie = $("#inputValue").val();

    var urlMovieRequest = "http://www.omdbapi.com/?apikey="+key+"&s="+movie;

    $.ajax({
      method: 'GET',
      url:urlMovieRequest,
      success: function(data) {
        console.log(data);
        
        // $("#movieCard").find(".card-title").text(data.Title);
        // $("#movieCard").find(".card-img-top").attr('src',data.Poster);

        data.Search.forEach(function (movieObject) {

          var card = $("<div>")
          .attr("id", movieObject.imdbID)
          .addClass("card")
          .append(
            $("<img>")
            .addClass("card-img-top")
            .css({"width": "25%"})
            .attr("src", movieObject.Poster)
            .attr("alt", movieObject.Title)
          )
          .append(
            $("<div>")
            .addClass("card-body")
            .append(
              $("<h5>")
              .text(movieObject.Title)
            .append (
              $("<h5>")
              .text(movieObject.Year)
            )
            .append (
              $("<button>")
              .text("Read More")
              .click(function() {
                alert( "Synopsis" );
              })
            )
              
            )
          );

          $("#movieResults").append(card);
        })

      }
    })
  })
})



//$ objet jQuery
//.val méthode jQuery - récupère valeur de l'input
//.ajax méthode jQuery permet de faire des requêtes sur notre API
//&t - t est une variable
//success - propriété - si call API fonctionne 
//.find - selector du params parent