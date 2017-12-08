var bebop = require('node-bebop');

var drone = bebop.createClient();
drone.connect(function() {

  setTimeout(function() {
  drone.takeOff();
  drone.stop();
  console.log('Took off');
  }, 2000);
 
 setTimeout(function() {
    drone.up(5);
  console.log('Up');
  }, 5000);

  setTimeout(function() {
    drone.stop();
  console.log('Stop Up');
  }, 3000);
  
  setTimeout(function() {
    drone.left(100);
  }, 4000);
  
  setTimeout(function() {
    drone.stop();
  console.log('Stop Up');
  }, 5000);
  
   setTimeout(function() {
    drone.front(100);
  }, 6000);
  
  setTimeout(function() {
    drone.stop();
  console.log('Stop Up');
  }, 7000);
  
   setTimeout(function() {
    drone.right(100);
  }, 8000);
  
  setTimeout(function() {
    drone.stop();
  console.log('Stop Up');
  }, 9000);
  
  setTimeout(function() {
    drone.back(100);
  }, 10000);
  
  setTimeout(function() {
    drone.stop();
  console.log('Stop Up');
  }, 11000);
  
  setTimeout(function() {
    drone.land();
  }, 12000);
});
  
  