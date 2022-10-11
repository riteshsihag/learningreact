import './App.css';
import Card from './Component/card';
import { Component } from 'react';

class App extends Component {
  content = [
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Haling Cove"
    },
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "White Bridge"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Lockwood Village"
    },
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Daekrahm Village"
    },
    {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Warlington"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Azalea Village"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Bryxton Town"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Ark Ville"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Springfield"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Franklin"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Greenville"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Vietnam"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Bali"
    }, {
      link: "https://photo-cdn2.icons8.com/uHkQgT5W8vxMJk7RcDp5QOQKX9e37EAih938XhAcNs4/rs:fit:288:187/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi85YTRlYzQxNjA2/NTE0OTY0YWEwZTg1/OTkzZGJjMTVhNC5q/cGc.webp",
      heading: "Mauritius"
    }
  ]
 state = {searchInput: ""}

  onChangeSearch = event => {
    this.setState({
      searchInput : event.target.value
    })
 
  }
  render(){
    const {searchInput} = this.state;
    const searchResults = this.content.filter(item=>{
      return item.heading.toLowerCase().includes(searchInput.toLowerCase())
    })
  return(
      
  <div>
  <div className='header'>
      <h1>Destination Search</h1>
      <input value={searchInput} onChange={this.onChangeSearch} type="text" />
    </div>
    <div className='container'>
        {searchResults.map(item => {
          return(
            <Card url={item.link} name={item.heading} />)
        })}
      </div>
    </div>
  );
      }
}

export default App;
