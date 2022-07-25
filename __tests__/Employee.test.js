const Employee = require("../lib/Employee");

test("create an new employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name", () => {
    const name = "Finnigan";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID", () => {
    const id = 3;
    const employeeInstance = new Employee("Finnigan", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email", () => {
    const email = "FinnDiesel@gmail.com";
    const employeeInstance = new Employee("Finnigan", 3, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method", () => {
    const testName = "Finnigan";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method", () => {
    const testID = 3;
    const employeeInstance = new Employee("Finnigan", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method", () => {
    const testEmail = "FinnDiesel@gmail.com";
    const employeeInstance = new Employee("Finnigan", 3, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Finnigan", 3, "FinnDiesel@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})