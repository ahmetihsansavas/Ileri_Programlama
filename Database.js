

function readData(file) {
    console.log("readData "+file);
    fetch(url+file)
        .then(r => r.text(), report)
        .then(addStudents, report);
}

class Student{
	constructor(id,name,gpa){
		this.id=id;
		this.name=name;
		this.gpa=gpa;
		this.courses=[];
	}
toString() { 
        return this.id +" " +this.name + "  "+this.gpa + this.courses ;
    }

}


class Course{
	constructor(name,time,date){
		this.name=name;
		this.time=time;
		this.date=date;
		this.rooms=[];

	}
	toString() { 
        return this.name +" " +this.time +" " + this.date ;
    }



}


