var student = [
    {
        firstName:"Tirth",
        lastName:"shah", 
        age:23
    }, 
    {
        firstName:"Abhishek", 
        lastName:"pathak", 
        age:25
    }, 
    {
        firstName:"Riya", 
        lastName:"patel", 
        age:24
    }, 
    {
        firstName:"Bhala", 
        lastName:"batuk", 
        age:18
    },
    {
        firstName:"Khalnayak", 
        lastName:"Kalia", 
        age:24
    }];

    
    for (var i = 0; i < student.length; i++) 
    {
        var fullname = student[i].firstName + " " + student[i].lastName;
        if(student[i].age >= 24)
        {
            document.write(fullname );
            document.write("<br/>");
        } 
        
    }

