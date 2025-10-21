const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

function addEmployee(employee){
    const tr = document.createElement("tr");
    for(let key in employee){
        const td =document.createElement("td");
        td.innerText = employee[key]
        tr.appendChild(td);
        }


        // <td><button>delete</button></td>

        const options = document.createElement("td");
       let deletebutton =document.createElement("button");
       deletebutton.innerText = "delete";
       options.appendChild(deletebutton);
       tr.appendChild(options);
       tbody.appendChild(tr);


}

function onSubmitForm(event){
    event.preventDefault();
    let employeeData = {
        name: form["name"].value,
        companyName:form["companyName"].value,
        salary:form["salary"].value,
        gender:form["gender"].value,
        role:form["role"].value,
        email:form["email"].value


    }
    addEmployee(employeeData);
    form.reset();

}
form.addEventListener("submit",onSubmitForm);

















// addEmployee({
//     name:"aravind",
//     email:"prasannakutcharlapati@gmail.com",
//     salary:"10",
//     companyNmae:"acciojob",
//     role:"SDE",
//     gender:"Male"

// });

