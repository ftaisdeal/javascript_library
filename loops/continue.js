// Example 1
for (let i = 1; i < 10; i++) {
  if (i == 5) { // skip 5
    continue;
  }
  console.log(i);
}


// Example 2: Skip odd numbers
for (let i = 1; i < 10; i++) {
  if (i % 2 != 0) { // skip odd numbers
    continue;
  }
  console.log(i);
}


// Example 3: Skip 2 and 3
for (let i = 1; i < 10; i++) {
  if (i == 2 || i == 3) { // skip 2 and 3
    continue;
  }
  console.log(i);
}