$(function(){
  $('#reloadFrame').click(hashchange)
  window.onhashchange = hashchange;
  hashchange();
});

function hashchange(){
  var hash = window.location.hash;
  if (hash.length < 2) return false;
  document.getElementById('frame').src = hash.substr(1);
  return false;
}
