// CHALLENGE: Functions - Using Objects as Function Parameters
export default function challenge29Functions2() {
  function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
  ) {
    if (typeof input === "number") {
      return input * input
    } else {
      return config.reverse
        ? input.toUpperCase().split("").reverse().join("")
        : input.toUpperCase()
    }
  }

  console.log(processData(20))
  console.log(processData("hello"))
  console.log(processData("hello", { reverse: true }))
}
