function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        window.alert("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        window.alert("Points:"+ demeritPoints);
        
        if (demeritPoints > 12) {
            window.alert("License is apprehended");
        }
    }
}

function main() {
    let input = prompt("Enter the speed of the car:");
    let speed = parseInt(input);
    
    if (!isNaN(speed)) {
        calculateDemeritPoints(speed);
    } else {
        window.alert("Invalid input! Please retry and enter a valid speed.");
    }
}

main();