import React, { useState, useEffect } from 'react';
import { Launcher, TestArea } from 'popup-chat-react';
import { Grid, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";

const socket = io('http://localhost:3001');


export default function Demo() {

    const [messages, setMessages] = useState(""); 

    const [state, setState] = useState({
        messageList: [],
        newMessagesCount: 0,
        isOpen: false,
        fileUpload: true,
    });

      useEffect(() => {
        socket.on("notify", (msg) => {
            console.log(msg);
            if (msg && msg.data.text.length > 0) {
                const newMessagesCount = state.isOpen ? state.newMessagesCount : state.newMessagesCount + 1;
          
                setState(state => ({
                  ...state,
                  newMessagesCount: newMessagesCount,
                  messageList: [
                    ...state.messageList,
                    {
                      author: 'them',
                      type: 'text',
                      data: {text: msg.data.text} 
                    }
                  ]
                }));
              }
        
            });
      }, []);

  function onMessageWasSent(message) {
    setState(state => ({
      ...state,
      messageList: [...state.messageList, message]
    }));
    socket.emit("message", message);
  }

//   socket.on("notify", (msg) => {
//     console.log(msg);
//     if (msg && msg.data.text.length > 0) {
//         const newMessagesCount = state.isOpen ? state.newMessagesCount : state.newMessagesCount + 1;
  
//         setState(state => ({
//           ...state,
//           newMessagesCount: newMessagesCount,
//           messageList: [
//             ...state.messageList,
//             {
//               author: 'them',
//               type: 'text',
//               data: {text: msg.data.text} 
//             }
//           ]
//         }));
//       }

//     });

//   function onFilesSelected(fileList) {
//     const objectURL = window.URL.createObjectURL(fileList[0]);

//     setState(state => ({
//       ...state,
//       messageList: [
//         ...state.messageList,
//         {
//           type: 'file', author: 'me',
//           data: {
//             url: objectURL,
//             fileName: fileList[0].name,
//           }
//         }
//       ]
//     }));
//   }

//   function sendMessage() {
//     var  text = messages;
//     if (text.length > 0) {
//       const newMessagesCount = state.isOpen ? state.newMessagesCount : state.newMessagesCount + 1;

//       setState(state => ({
//         ...state,
//         newMessagesCount: newMessagesCount,
//         messageList: [
//           ...state.messageList,
//           {
//             author: 'them',
//             type: 'text',
//             data: { text }
//           }
//         ]
//       }));
//     }
//   }

  function onClick() {
    setState(state => ({
      ...state,
      isOpen: !state.isOpen,
      newMessagesCount: 0
    }));
  }

  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'popup-chat-react',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={onMessageWasSent}
        messageList={state.messageList}
        newMessagesCount={state.newMessagesCount}
        onClick={onClick}
        isOpen={state.isOpen}
        showEmoji
        pinMessage={{
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
          title: 'title',
          text: 'text'
        }}
        placeholder='placeholder'
      />

    </div>
  );
}