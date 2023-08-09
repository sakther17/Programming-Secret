/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/*document.getElementById('buyButton').addEventListener('click', function() {
 alert('Thank you for purchasing "The Hunger Games"!');
 
 })*/
document.getElementById('buyButton').addEventListener('click', function () {
  // Assuming you have a payment page named "payment.html," redirect the user to that page.
  window.location.href = 'web-payment.html';
});

document.getElementById('viewMore').addEventListener('click', function () {
  // Assuming you have a payment page named "payment.html," redirect the user to that page.
  window.location.href = 'web-view-more.html';
});

document.getElementById('back').addEventListener('click', function () {
  // Assuming you have a payment page named "payment.html," redirect the user to that page.
  window.location.href = 'index.html';
});

document.getElementById('continue').addEventListener('click', function () {
  alert('Thank you for purchasing "The Hunger Games"!');
  // Here, you can implement the logic for actual purchase actions, like redirecting to a payment page.
});
