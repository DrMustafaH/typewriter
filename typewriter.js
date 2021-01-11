const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  if (i < sentence.length) {
    setTimeout(() => {
      process.stdout.write(char)
      if (i === sentence.length - 1) process.stdout.write("\n")
    }, i * 50)
  }
};