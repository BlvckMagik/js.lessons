const getMessage = (userName, email, tasksCount) => {
  return `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`;
};

console.log(getMessage('user', 'i@g.com', 2));
console.log(getMessage('user1', 'd@c.com', 4));
