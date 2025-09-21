let isAdult = 18;
let result = isAdult >= 18 ? 'you are a anult'  : "you are a tineigeer";



// calsswork 2


let day = 1;


switch (day) {
    case 1:
        console.log('ორშაბათი')
        break;
    case 2:
        console.log('სამშაბათი')
        break;
    case 3:
        console.log('ოთხშაბათი')
        break;
    case 4:
        console.log('ხუთშაბათი')
        break;
    case 5:
        console.log('პარასკევი')
        break;
    case 6:
        console.log('შაბათი')
        break;
    case 7:
        console.log('კვირაა')
        break;
    default:
        console.log("გთხოვთ შეიყვანოთ სწორი რიცხვი")
        break;
}


// classwork 3

function rectangleArea(width, height) {
  return width * height;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

rectangleArea(12, 5)
triangleArea(4, 7)