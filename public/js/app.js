// Random Quote Generator
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {
  $('blockquote').text(data.quoteText);
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $('.speaker').text(data.quoteAuthor);

  // Put the Quote In An Array
  var quote = data.quoteText;
  quote = quote.split(' ');
  quote = quote.map(function (i) {
    return i + '%20';
  });
  // console.log(quote);
  quote = quote.join(' ');

  // Set the URL For Share Button
  var urlStart = "https://twitter.com/intent/tweet/?text=";
  $('.small-button').attr('href', urlStart + quote + '%0A' + '- ' + data.quoteAuthor);
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

// Needs to Reload the page, or just call the database again.
$('.new-quote-button').on('click', function () {
  window.location.reload();
});
