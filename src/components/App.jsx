import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

import Profile from './Profile'
import Statistics from './Statistics'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'

import css from './App.module.css'


export default function App() {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
      items={transactions}
      />
    </div>
   
  )}
