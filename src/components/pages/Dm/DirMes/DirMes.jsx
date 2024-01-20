import React, { useState, useEffect } from 'react';
import "./DirMes.css";
import { useParams } from 'react-router-dom';
import list from "../../../../list/list";
import Dm from '../DmList';

const DirMes = () => {
    const id = useParams().id; //rename

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setMessages(Object.values(list)[id].msg)

        const sendMessageInp = document.querySelector(".sendMessageInp"); // :) useRef()

        const sendMessage = () => {
            const newMessage = {
                date: `${new Date().getHours()}:${new Date().getMinutes()}`,
                author: "Aboba",
                text: inputValue,
                id: messages.length > 0 ? messages[messages.length - 1].id + 1 : 1,
            };

            setMessages([...messages, newMessage]);
            setInputValue("");
            list[id].msg.push(newMessage)
        }

        const handleKeyDown = event => {
            if (event.code === "Enter") {
                sendMessage();
            }
        };

        sendMessageInp.addEventListener("keydown", handleKeyDown);

        return () => {
            sendMessageInp.removeEventListener("keydown", handleKeyDown);
        };
    }, [inputValue, messages, id]);

    return (
        <div className='DirMes flex'>

            <Dm />

            <div>
                {messages.map(el => (
                    <div className='message' key={el.id}>
                        <span className='message_date'>{el.date}</span>
                        <span className='message_author'>{el.author}</span>
                        <span className="message_text">{el.text}</span>
                    </div>
                ))}
                <div className='sendMessage'>
                    <input
                        className="sendMessageInp"
                        type="text"
                        placeholder='Ваше сообщение'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default DirMes;
