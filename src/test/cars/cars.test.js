// const user_email =
// const user_password =

// describe("Logging in user (department head & PG)", () => {
//     //
//     test("loginUser() - must have a email and password. Account doesn't exists.", async () => {
//       const email = "dummy@gmail.com";
//       const password = "dummy";
//       const data = await app.loginUser(email, password);
//       expect(data).toBe("Error");
//     });
//     //
//     test("loginUser() - no email entered, just password.", async () => {
//       const email = "";
//       const password = admin_password;
//       const data = await app.loginUser(email, password);
//       expect(data).toBe("Error");
//     });
//     //
//     test("loginUser() - no password entered, just email.", async () => {
//       const email = admin_email;
//       const password = "";
//       const data = await app.loginUser(email, password);
//       expect(data).toBe("Error");
//     });
//     //
//     test("loginUser() - must have a email and password. Account exists.", async () => {
//       const email = admin_email;
//       const password = admin_password;
//       const data = await app.loginUser(email, password);
//       const result = data.patched;

//       expect(result).not.toBe(0);
//     });
//   });

// Sample test for clean architecture


// const makePosition = require('../../../src/entities/positions/app')
// describe('Add position', () => {
//    it('must not be able to add without a position name', () => {

//       let position = {
//          name: undefined,
//          teams_id: 1,
//          description: "Test",
//          is_office_staff: 'f',
//          is_vacant: 't',
//          is_active: 'active'
//       }

//       expect(() => makePosition(position)).toThrow('Please enter position name.')
//    })

//    it('must have a team', () => {

//       let position = {
//          name: 'DevOps',
//          teams_id: undefined,
//          description: "Test",
//          is_office_staff: 'f',
//          is_vacant: 't',
//          is_active: 'active'
//       }

//       expect(() => makePosition(position)).toThrow('Please enter which team the position belongs.')
//    })

//    it('must have a boolean value for is_office_staff', () => {

//       let position = {
//          name: 'DevOps',
//          teams_id: 1,
//          description: "Test",
//          is_office_staff: undefined,
//          is_vacant: 't',
//          is_active: 'active'
//       }

//       expect(() => makePosition(position)).toThrow('Please enter if position is office staff or not.')
//    })
// })
