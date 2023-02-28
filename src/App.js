import { Container } from 'react-bootstrap';
import Menu from './components/Menu';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';


function App() {

  const [itemsData, setItemsData] = useState(items);

  // get all categories
  const Allcategories = ['جميع الوجبات', ...new Set(items.map(i => i.category))];
  //console.log(Allcategories);
  // filter by category 
  const filterByCategory = (cat) => {

    if (cat === 'جميع الوجبات') {
      setItemsData(items);
    } else {
      const filteredItems = items.filter(item => item.category === cat);
      setItemsData(filteredItems);
    }

  }

  // filter by serch
  const filterBySearch = (word) => {

    if (word !== '') {
      const filterSearch = items.filter((item) => item.title === word);
      //console.log(filterSearch);
      setItemsData(filterSearch);
    }

  }




  return (
    <div className="color-body font">
      <Menu filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} Allcategories={Allcategories} />
        <ItemsList itemsData={itemsData} />
      </Container>

    </div>
  );


}

export default App;
