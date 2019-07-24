import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import TextArea from 'react-textarea-autosize';

class TrelloActionButton extends React.Component{

    state = {
        formOpen : false,
        text : ""
    };

    renderForm = () => {
        

        const list = this.props;

        const placeholder = list ? "Enter a title for this card..." : "Enter list title...";
        const buttonTitle = list ? "Add Card" : "Add List" ;

        return <div>
            <Card style = {{
                minHeight : 85,
                minWidth : 272,
                padding : "6px 8px 2px"
            }}>
                <TextArea
                placeholder = {placeholder}
                autoFocus
                onBlur = {this.closeForm}
                value = {this.state.text}
                onChange = {this.handleInputChange}
                style = {{
                    resize : "none",
                    width : 272,
                    overflow : "hidden",
                    outline : "none",
                    border : "none"
                }}> </TextArea>
            </Card>
            <div style = {styles.formButtonGroup}>
                <Button variant = "contained" style = {{color: "white", backgroundColor: "#5aac44"}}>
                {buttonTitle} </Button>
                <Icon style = {{ marginLeft: 8, cursor: "pointer"}}>close</Icon>
            </div>
        </div>
    };

    openForm = () => {
        this.setState({
            formOpen : true
        })
    };

    closeForm = e => {
        this.setState({
            formOpen : false
        })
    };

    handleInputChange = e => {
        this.setState({
            text : e.target.value
        })
    }

    renderAddButton = () => {
        const { list } = this.props

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5 ;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"; 
        

        return (
            <div onClick = {this.openForm}
            style = {{
                ...styles.openForButtonGroup,
                opacity : buttonTextOpacity,
                 color: buttonTextColor, 
                 background: buttonTextBackground
                 }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup : {
        display : "flex",
        alignItems : "center",
        cursor : "pointer",
        borderRadius : "3",
        height : 36,
        width : 272,
        paddingLeft : 10
    },
    formButtonGroup : {
        marginTop : 8,
        display : "flex",
        alignItems : "center"
    }
}

export default TrelloActionButton;