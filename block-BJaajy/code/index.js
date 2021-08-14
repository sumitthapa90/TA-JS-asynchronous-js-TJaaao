let userInfo = [
  "gifty",
  "gaearon",
  "AArnott",
  "subtleGradient",
  "piranha",
  "sophiebits",
];

const userPromise = Promise.all(
  userInfo.map((user) =>
    fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
  )
).then((users) => console.log(users));

// userInfo.forEach((user) => {
// fetch(`https://api.github.com/users/${user}`);
//     .then((res) => res.json())
//     .then((info) => console.log(info));
// });

// const five = Promise.resolve(10);
// const hello = Promise.resolve("hello");
// const superman = Promise.resolve("superman");
// const error = Promise.resolve("error");

// let all = Promise.all([five, hello, superman])
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
