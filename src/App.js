
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Card2 from './components/card2/Card2';


function App() {
  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    title : "",
    email : "",
    cell : "",
    city : "",
    country : "",
    age : "",
    registerDate : "",
    image : ""
  });

  const handleClick = () => {
    axios.get("https://randomuser.me/api/").then((res) => {

      const {name : {first}} = res.data.results[0];
      const {name : {title}} = res.data.results[0];
      const {name : {last}} = res.data.results[0];
      const {email} = res.data.results[0];
      const {cell} = res.data.results[0];
      const {location : {city} } = res.data.results[0];
      const {location : {country} } = res.data.results[0];
      const {dob : {age} } = res.data.results[0];
      let {registered : {date : registerDate } } = res.data.results[0];
      registerDate = registerDate.split("T")[0];
      const {picture : {medium : image } } = res.data.results[0];
      console.log(res)
      
      setData({
        firstName : first,  
        lastName : last,
        title : title,
        email : email,
        cell : cell,
        city : city,
        country : country,
        age : age,
        registerDate : registerDate,
        image : image
      })
    })
    }

    return (
      <main className='main' >
        {data.firstName == "" ? <Card2 /> : <Card data = {data} />}

        <Button handleClick = {handleClick} />
      </main>
    );
}

export default App;
