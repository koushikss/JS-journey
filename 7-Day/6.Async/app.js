// Promise -> An object that manages asynchronous operations
//            new Promise((resolve, reject) => {asynchronous code})

function walktheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkeddog = true;
      if (walkeddog) {
        resolve("You walked the dog");
      } else {
        reject("You didnt walked the dog");
      }
    }, 1000);
  });
}

function cleanTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedTrash = true;
      if (cleanedTrash) {
        resolve("you cleaned the trash");
      } else {
        reject("you didnt cleaned the trash");
      }
    }, 2000);
  });
}

async function resultChores() {
  const walkedDog = await walktheDog();
  console.log(walkedDog);

  const cleanedTrash = await cleanTrash();
  console.log(cleanedTrash);
}
resultChores();
