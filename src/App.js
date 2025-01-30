
import './App.css';
import {Header} from './Components/Header/header';

import { Subheader } from './Components/Subheader/subheader';
import { Lisitems } from './Components/ListItems/ListItems';


const items =[
  {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }, {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }, {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }, {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }, {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }, {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }, {
    discountedprice: 400,
    price: 500,
    title: "Casio-Rose Gold",
    thumbnail: 'watch.png', // Thumbnail is 'watch.png' initially
  },
  {
    discountedprice: 100,
    price: 200,
    title: "Casio-Rose Pink",
    thumbnail: 'watch.png', // Same for this one
  }
]
function App() {
  
  return (
   
    <div className="App">
      <Header/>
      <Subheader/>
      
      <div className="list">
        {items.map((item) => (
          <Lisitems data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
