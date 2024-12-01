const UserData = { id: 1, name: "Elmahlawey" };
const TasksData = [
  { userId: 1, task: "Write code" },
  { userId: 1, task: "Review PRs" },
];

function fetchUserData(callback) {
  setTimeout(() => {
    const error = false;
    if (error) {
      callback("Error", null);
    } else {
      callback(null, UserData);
    }
  }, 1000);
}

function fetchUserTasks(userId, callback) {
  setTimeout(() => {
    const error = false;
    if (error) {
      callback("Error", null);
    } else {
      const tasks = TasksData.filter((task) => task.userId === userId);
      callback(null, tasks);
    }
  }, 1000);
}

fetchUserData((err, user) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("User:", user);
  fetchUserTasks(user.id, (err, tasks) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Tasks:", tasks);
  });
});
