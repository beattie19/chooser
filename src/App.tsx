import React, { useState } from 'react';
import './App.css';
import OptionList from './components/OptionList'
import InputForm from './components/InputForm';

type itemArray = string[]

const App: React.FC = () => {
  const [items, setItems] = useState<itemArray>([]);

  const addItem = (item: string) => {
    setItems([item, ...items]);
  }

  const deleteItem = (itemText: string) => {
    const filteredItems = items.filter((item) => {
      return item !== itemText;
    })

    setItems(filteredItems);
  }

  return (
    <div className="App">
      <InputForm addItem={addItem}/>
      <OptionList items={items} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
