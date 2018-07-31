var quotes = ['“Nobody ever figures out what life is all about, and it doesn\'t matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.”','Physics is like sex: sure, it may give some practical results, but that\'s not why we do it.','You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It\'s their mistake, not my failing.','Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn\'t matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to on the things you like to do the best. Don\'t think about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so that society doesn\'t stop you from doing anything at all.'];
$( document ).ready(function(){
    var p = document.createElement('p');
    p.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    $('#here').append(p);
});
