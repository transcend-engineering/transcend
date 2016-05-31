var handler = StripeCheckout.configure({
    key: 'pk_live_yijbiChHJfBMpi5iWVaibAf1',
    image: '/img/transcend_square.png',
    locale: 'auto',
    token: function(token) {
      console.log(token);
      console.log(token.id);
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
    }
  });

$('#stripe_button').on('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'Madison Entrepreneurship',
    description: '1 Spot on the Map',
    amount: 1000
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
$(window).on('popstate', function() {
  handler.close();
});