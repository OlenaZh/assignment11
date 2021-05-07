async function fetchEnployeesJSON() {
    const response = await fetch('./employees.json');
    const employees = await response.json();
    return employees;
}

fetchEnployeesJSON().then(employees => console.log(employees));