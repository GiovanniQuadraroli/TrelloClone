import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const TrelloList = ({ title, cards , listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {
                (provided) => (
                    <ListContainer 
                    ref = { provided.innerRef }
                    {...provided.droppableProps}>
                        <h4>{title}</h4>
                            <div>
                            { 
                                cards.map((card,index) => 
                                <TrelloCard 
                                key = { card.id }
                                cardID = {card.id} 
                                text = {card.text}
                                index = {index} ></TrelloCard>)
                            }
                            <TrelloActionButton listID = { listID }></TrelloActionButton>
                            </div>
                            {provided.placeholder}

                    </ListContainer>
                )
            }
        
        </Droppable>
    )
};

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;



export default TrelloList;