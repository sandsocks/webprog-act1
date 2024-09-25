import './App.css';
import Profile from './Profile';

function App() {
  return (
   <div className="ProfileCard">
    <style>

    </style>
    <Profile name=" Name: Maxi"/>
    <Profile Age="Age: 21" />
    <Profile Description="Rank: Iron"/>
    <Profile Location=" Location: Quezon City, Philippines"/>

    <div className='ProfileCard2'>
    <Profile name=" Name: Jay"/>
    <Profile Age="Age: 20" />
    <Profile Rank="Rank:  Bronze"/>
    <Profile Location=" Location: Pasig, Philippines"/>

    <div className='ProfileCard3'>
    <Profile name=" Name: Joseph"/>
    <Profile Age="Age: 20" />
    <Profile Rank="Rank: Challenger"/>
    <Profile Location=" Location: Los Angeles, USA"/>
    </div>
    </div>
   </div>
);
}

export default App;
