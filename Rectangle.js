class Rectangle{
    constructor(width,high) {
        this.width = width;
        this.high = high;
    }
    getArea(){
        return this.high * this.width;
    }
    getPeri(){
        return (this.width+this.high)*2;
    }
    setWidth(Width){
        this.width = Width;
    }
    setHigh(High){
        this.high = High;
    }
}
let rect = new Rectangle(100,50);
function creatRect(){
    let c = document.getElementById('canvas').getContext("2d");
    c.beginPath();
    c.rect(20,20,rect.width,rect.high);
    c.stroke();
}
creatRect();
document.getElementById('output').innerHTML = `S: ${rect.getArea()}, P: ${rect.getPeri()} <br>`;

rect.setHigh(100);
rect.setWidth(200);
creatRect();
document.getElementById('output').innerHTML += `S: ${rect.getArea()}, P: ${rect.getPeri()}`;


