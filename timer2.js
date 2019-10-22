const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  let keyCode = key <= 9 && key >= 1;
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "\u0062") {
    process.stdout.write("\x07");
  } else if (keyCode) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key.substr(-1) * 1000);
    console.log(`setting timer for ${key} seconds`);
  }
});

console.log("after callback");
