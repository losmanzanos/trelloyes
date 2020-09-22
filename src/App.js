import React from 'react';
import './App.css';
import List from './components/List.js';

function App(props) {
  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
    {props.lists.map(list => <List cards={list.cardIds.map(id => props.allCards[id])} header={list.header}/>)}
    </div>
    </main>
  )
}

export default App;