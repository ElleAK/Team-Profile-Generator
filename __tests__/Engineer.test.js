const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Patch001";
    const employeeInstance = new Engineer('Patrick', 27, 'patty@gmail', testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Patch001";
    const employeeInstance = new Engineer('Patrick', 27, 'patty@gmail', testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer('Patrick', 27, 'patty@gmail', 'Patch001');
    expect(employeeInstance.getRole()).toBe(returnValue);
});