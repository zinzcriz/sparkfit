var dbPathHR = 'UsersData/vvl86CGF9rV10mURH5CTeeSBT8s2/readings/heartrate';
var dbPathSP = 'UsersData/vvl86CGF9rV10mURH5CTeeSBT8s2/readings/spO2';
var dbPathTemp = 'UsersData/vvl86CGF9rV10mURH5CTeeSBT8s2/readings/temperature';
var dbPathVOL = 'UsersData/vvl86CGF9rV10mURH5CTeeSBT8s2/readings/voltageLevel';


var dbRefHR = firebase.database().ref(dbPathHR);
var dbRefSP = firebase.database().ref().child(dbPathSP);
var dbRefTemp = firebase.database().ref().child(dbPathTemp);
var dbRefVOL = firebase.database().ref().child(dbPathVOL);

dbRefHR.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("hr").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

dbRefSP.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("sp").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

dbRefTemp.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("temp").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

dbRefVOL.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("vol").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});
