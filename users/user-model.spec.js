const Users = require('./user-model');
const db = require('../data/db-config');

let userList = [];

beforeEach(() => {
  return db('user').truncate();
});

describe('user-model', () => {
  describe('insert user', () => {
    it('should insert users', async () => {
      await Users.add({
        "username": "admin",
        "password": "admin",
        "department": "finances"
      })
      userList = await db('user');
      expect(userList).toHaveLength(1)
    })
  });
  describe('delete user', () => {
    it('should delete users', async () => {
      await Users.add({
        "username": "admin",
        "password": "admin",
        "department": "finances"
      })
      userList = await db('user');
      expect(userList).toHaveLength(1)
      await Users.remove(userList[0].id);
      userList = await db('user');
      expect(userList).toHaveLength(0);
    })
  });
});