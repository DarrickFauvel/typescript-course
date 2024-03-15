export default function challenge32TypeAlias() {
  type Employee = {
    id: number
    name: string
    department: string
  }

  type Manager = {
    id: number
    name: string
    employees: Employee[]
  }

  type Staff = Employee | Manager

  function printStaffDetails(staff: Staff): void {
    if ("employees" in staff) {
      console.log(
        `${staff.name} is a manager of ${staff.employees.length} employees`
      )
    } else {
      console.log(
        `${staff.name} is an employee in the ${staff.department} department`
      )
    }
  }

  const alice = {
    id: 1,
    name: "Alice",
    department: "Fulfillment",
  }
  const steve = {
    id: 2,
    name: "Steve",
    department: "Market",
  }
  const bob = {
    id: 3,
    name: "Bob",
    employees: [alice, steve],
  }
  console.log(printStaffDetails(alice))
  console.log(printStaffDetails(steve))
  console.log(printStaffDetails(bob))
}
