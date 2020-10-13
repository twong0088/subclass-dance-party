$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 500
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  //make all dancers line up in a line
  $('.lineUpDancers').on('click', function(event) {
    window.dancers.forEach(function(item) {
      item.lineUp();
    });
  });

  //groups all dancers by type
  $('.groupUpDancers').on('click', function(event) {
    window.dancers.forEach(function(item) {
      item.groupUp();
    });
  });

  //puts dancers back to random positions
  $('.randomizeDancers').on('click', function(event) {
    window.dancers.forEach(function(item) {
      item.randomize();
    });
  });

  //removes a dancer on click
  $(document).on('click', '.dancer', function(event) {
    $(this).remove();
  });
});

