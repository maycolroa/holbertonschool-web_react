interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student ={
    firstName:'maycol',
    lastName: 'roa',
    age: 31,
    location: 'colombia',
}

let student2: Student ={
    firstName:'diana',
    lastName: 'vargas',
    age:28,
    location: 'colombia',
}

const studentsList: Student[] = [ student1, student2 ]

let table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(student => {
    let tb = table.insertRow();
    let tdName = tb.insertCell();
    let tdLocation = tb.insertCell();
    tdName.innerText = student.firstName;
    tdLocation.innerText = student.location;
});
