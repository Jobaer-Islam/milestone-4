const college = {
    name : 'vnc',
    class : ['11', '12'],
    events : ['science fair', 'bijoy dibos', '21 Feb'],
    unique : {
        color: 'blue',
        result : 5,
        merit : 'top'

    }
}

console.log(college.unique.result);
delete college.class;
console.log(college);

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
  };
  
  for (const prop in mobile) {
    console.log(prop);
  }
  