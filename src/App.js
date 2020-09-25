import React from 'react';
import './App.css';
import List from './components/List.js';

function App(props) {
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
    {props.lists.map(list => <List cards={list.cardIds.map(id => props.allCards[id])} header={list.header} key={list.id}/>)}
    
    </div>
    </main>
  )
}

export default App;