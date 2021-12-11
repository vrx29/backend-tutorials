//Data
let account = [
    {
      username: "alex@gmail.com",
      password: "alex",
      transactions: [
        {
          tid: "T1001",
          amount: 5000,
          type: "paying bill",
        },
        {
          tid: "T1003",
          amount: 1000,
          type: "buy coupons",
        },
      ],
    },
    {
      username: "johndoe@gmail.com",
      password: "johndoe",
      transactions: [
        {
          tid: "T1002",
          amount: 3000,
          type: "paying bill",
        },
      ],
    },
    {
      username: "mercy@gmail.com",
      password: "mercy",
      transactions: [],
    },
  ];
  let dataLayer = {};
  dataLayer.LoginUser = (username, password) => {
    for (user of account) {
      if (user.username == username && user.password == password) {
        return username;
      }
    }
  };
  dataLayer.retrieveUsersTransactions = (username) => {
    for (user of account) {
      if (user.username == username) {
        return user.transactions;
      }
    }
  };
  module.exports = dataLayer;
  