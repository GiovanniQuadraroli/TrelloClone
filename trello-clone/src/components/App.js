import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from "../actions";
import styled from "styled-components";


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
          <ListsContainer>
            {lists.map(list => <TrelloList listID = {list.id} key = {list.id} title = {list.title} cards = {list.cards} />)}
          <TrelloActionButton list></TrelloActionButton>
          </ListsContainer>
        </div>
        }
      </DragDropContext>
    )
  };


  onDragEnd = (result) => {
    const { draggableId ,destination, source } = result;
    if (destination){
      this.props.dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      ))
    }
  };

  }

  const mapStateToProps = state => ({
    lists : state.lists
  });

  const ListsContainer = styled.div`
  display: flex;
  flexDirection: row;
  marginRight : 8px ;
`;
  

export default connect(mapStateToProps)(App);
