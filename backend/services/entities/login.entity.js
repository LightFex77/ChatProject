const { EntitySchema } = require("typeorm");

const Login = new EntitySchema({
  name: "Login",
  tableName: "login",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    username: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
  },
})

module.exports = Login