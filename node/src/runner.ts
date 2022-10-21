function run(count = 1000) {
  const temp: number[] = []
  for (let i = 0; i < count; ++i) {
    temp.push(i * 69)
  }

  return temp
}

export default run
