import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from "../actions";

class App extends Component{

  render () {
    const { lists } = this.props;

    return (
      <DragDropContext
      onDragEnd = {this.onDragEnd}
      >
        {
          <div className="App">
          <h2> Prova </h2>
          <div style = {this.styles.listsContainer}>
          { lists.map(list => (<TrelloList listID = {list.id} key = {list.id} title = {list.title} cards = {list.cards} />))}
          <TrelloActionButton list></TrelloActionButton>
          </div>
        </div>
        }
      </DragDropContext>
    )
  };


  onDragEnd = (result) => {
    const { destination, source, draggableID } = result;
    if ( !destination ){return};
    if (destination){
      this.props.dispatch(sort(
        source.droppableID,
        destination.droppableID,
        source.index,
        destination.index,
        draggableID
      ))
    }
  };

  styles = {
    listsContainer: {
      display: "flex",
      flexDirection : "row",
      marginRight : 8
    }
  };


  }

  const mapStateToProps = state => ({
    lists : state.lists
  });
  

export default connect(mapStateToProps)(App);
