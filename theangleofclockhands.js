//Define the angle of clock hands
function theangleofClockHands(hour, min){
	// There are a total of 12 hours in a clock. Each hour is 30 degrees (360/12);
	// There are a total of 60 minutes in a clock. Each minute is (360/60) = 6, 6 degrees.
	var angleofHour = (hour * 30 + min*0.5);
	var angleofMinute = min * 6;
	// Here is the tricky part.
	// The hour hand will not always be at its exact hour. Depending on its minutes hand, the hour hand are going to be located in between the hours.
	// When a minute hand moves to big 6 number aka 30 minutes, an hour hand moves at 15 degrees
	// When a minute hand moves, an hour hand moves as well, which is 0.5 * minute hand.
	// So make sure to add min*0.5 within angleofHour
	var angleofClockHands = Math.abs(angleofHour - angleofMinute);

	return angleofClockHands;
}