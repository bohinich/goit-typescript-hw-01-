type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  // update logic here
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
