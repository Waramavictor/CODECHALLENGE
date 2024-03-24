const speed = 80
const speedlimit =70
const points =Math.abs((speed - sppedlimit)/5)
if(speed <=70){
    console.log("speed is good")
}
else if(points >=12){
    console.log("lisence is apprehended")
}

else if(speed >70){
    console.log("pointss" + points)
}