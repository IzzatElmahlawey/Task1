const UserData = { id: 1, name: "Elmahlawey" };
const TasksData = [
  { userId: 1, task: "Write code" },
  { userId: 1, task: "Review PRs" },
];
async function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error");
      } else {
        resolve(UserData);
      }
    }, 1000);
  });
}

async function fetchUserTasks(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error");
      } else {
        const tasks = TasksData.filter((task) => task.userId === userId);
        resolve(tasks);
      }
    }, 1000);
  });
}

(async () => {
  try {
    const user = await fetchUserData();
    console.log("User:", user);
    const tasks = await fetchUserTasks(user.id);
    console.log("Tasks:", tasks);
  } catch (err) {
    console.error(err);
  }
})();
