import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';
import styled from "styled-components";



const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const TrelloCard = ({text, cardID, index}) => {
    return (
      <Draggable draggableId = {String(cardID)} index = {index}>
        {
          (provided) => (
            <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <Card>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent> 
            </Card>
            </CardContainer>
          )
        } 
      </Draggable>
      );
}

export default TrelloCard;