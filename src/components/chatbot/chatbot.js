import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './chatbot.css';

const Chatbot = () => {

    const theme = {
        background: 'white',
        headerBgColor: '#f05f7e',
        headerFontColor: '#fff',
        headerFontSize: '24px',
        botBubbleColor: '#546182',
        botFontColor: '#fff',
        userBubbleColor: 'white',
        userFontColor: '#363f55',
    }
    const steps = [
        {
            id: '1',
            message: 'Welcome to Charter Healthcare Group! 👋🏼',
            trigger: '2',
        },
        {
            id: '2',
            message: "I'm the CharterBot and I'm here to assist you today. ✌🏼 To start, what's your name?",
            trigger: '3',
        },
        {
            id: '3',
            user: true,
            trigger: '4',
        },
        {
            id: '4',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
        },
    ]
    const buttonStyles = {
        background: 'linear-gradient(66.41deg, #FF6687 34.32%, #FF6AB2 51.86%, #FFCE94 85.46%, #F71414 99.5%)',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.4)',
        width: '60px',
        height: '60px'
    }
    const inputStyles = {
        background: 'white',
        color: '#363f55',
        margin: '0 0'
    }

    // const [isHovered, setIsHovered] = useState(false);
    // const handleHover = () => {
    //     setIsHovered(true);
    // }

    return (
        <div className="Chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={steps}
                    headerTitle="CharterBot"
                    floating='true'
                    floatingStyle={buttonStyles}
                    inputStyle={inputStyles}
                    placeholder='Type your message here...'
                />
            </ThemeProvider>

            {/* <div className={`notification ${isHovered ? 'hide' : ''}`}>
                Chat with us →
            </div> */}
        </div>
    );
}

export default Chatbot;