let employee={name:"Breaks Johns",
    streetaddress:"kariobangi"
}


function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]:value
    }
}
let updatedEmployee = updateEmployeeWithKeyAndValue(employee,'streetAddress','Roysambu')

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
        employee[key] =value;
        return employee
    
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','Kinoo')

function deleteFromEmployeeByKey(employee,key){
    // copies all the content inside the employee into the new variable new employee
    let NeewEmployee={...employee}
    // deletes the key containig the key
    delete NeewEmployee[key]
        return NeewEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
       delete  employee[key]
        return employee 
}


