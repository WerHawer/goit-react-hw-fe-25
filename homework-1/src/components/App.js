import React from "react";
import Profile from "./Profile/Profile";
import Statisctic from "./Statistic/Statistic";
import FriendList from "./FriendList/FriendList";
import Transactions from "./Transactions/Transactions";
import { Global } from "../GlobalStyle";
import user from "../data/user.json";
import stats from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

const App = () => (
  <div>
    <Global />
    <Profile user={user} />
    <Statisctic statistics={stats} title="Upload stats" />
    <FriendList friends={friends} />
    <Transactions transactions={transactions} />
  </div>
);

export default App;
