const UserData = { id: 1, name: "Elmahlawey" };
const TasksData = [
  { userId: 1, task: "Write code" },
  { userId: 1, task: "Review PRs" },
];
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error");
      } else {
        resolve(UserData);
      }
    }, 2000);
  });
}

function fetchUserTasks(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error");
      } else {
        const tasks = TasksData.filter((task) => task.userId === userId);
        resolve(tasks);
      }
    }, 2000);
  });
}

fetchUserData()
  .then((user) => {
    console.log("User:", user);
    return fetchUserTasks(user.id);
  })
  .then((tasks) => {
    console.log("Tasks:", tasks);
  })
  .catch((err) => {
    console.error(err);
  });
