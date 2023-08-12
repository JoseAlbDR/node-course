let i = 0;

const interval = setInterval(() => {
  console.log("hello world");
  i++;
  console.log(i);
  if (i === 5) clearInterval(interval);
}, 2000);

console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
