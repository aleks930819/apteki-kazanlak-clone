import bcrypt from 'bcryptjs';

const admins = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    role: 2995,
  },
];

export default admins;
