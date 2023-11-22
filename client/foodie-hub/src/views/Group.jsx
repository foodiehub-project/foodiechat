import UserList from "../components/UserList";
import { auth, db } from "../main";
import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  addDoc, 
  serverTimestamp,
} from "firebase/firestore";
import { useParams } from "react-router-dom"

export default function Group() {
    const [groupMessages, setGroupMessages] = useState([]);
    const [message, setMessage] = useState("");
    // const scroll = useRef();

    useEffect(() => {
        const q = query(
          collection(db, "messages"),
          orderBy("createdAt", "desc"),
          limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
          const fetchedMessages = [];
          QuerySnapshot.forEach((doc) => {
            fetchedMessages.push({ ...doc.data(), id: doc.id });
          });
          const sortedMessages = fetchedMessages.sort(
            (a, b) => a.createdAt - b.createdAt
          );
          setGroupMessages(sortedMessages);
        });
        console.log(groupMessages)
        return () => unsubscribe;
      }, []);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("HELLO")
            const { id, name } = localStorage;
            const { groupId } = useParams()
            await addDoc(collection(db, "messages"), {
                text: message,
                name: name,
                createdAt: serverTimestamp(),
                groupId,
                id,
            });
            setMessage("");
        }
        catch(error) {
            sweetAlert({
                text: "An Error Has Occured",
                icon: "error"
            });
        }
    }
    const handleChange = async (event) => {
        const { value } = event.target;
        setMessage(value);
    }
    return (
  <div className="chatContainer">
    <div className="groupNameContainer">
      <p className="groupName">Food Lovers</p>
    </div>
    <div className="containerChat">
      {/* UserList */}
      <div className="userContext">
        <p className="userList">Chat Participant's</p>
        <div className="containerUList">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
          <p className="userByList">Andy</p>
        </div>
        <div className="containerUList">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
          <p className="userByList">Lisa</p>
        </div>
        <div className="containerUList">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
          <p className="userByList">Ito</p>
        </div>
        <div className="containerUList">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
          <p className="userByList">Uvuweveosas</p>
        </div>
      </div>
      {/* UserList */}
      {/* ChatBubble */}
      <div className="chatContext">
        <div className="chatBubbleContainer">
          <div className="message-container scrollBubble">
            {groupMessages.map((message) => {
                <div className="leftBubble">
                <div className="name-container">
                    <p>{message.name}</p>
                </div>
                <p className="message-content">
                    {message.text}
                </p>
                </div>
            })}
          </div>
        </div>
      </div>
      {/* ChatBubble */}
    </div>
    {/* SendBar */}
    <div className="sendBar">
      <div className="card-footer">
        <form onSubmit={handleSubmit} className="input-group">
          <div className="input-group-append" />
          <textarea
            onChange={handleChange}
            name="message"
            className="form-control type_msg"
            placeholder="Type your message..."
            defaultValue={message}
          />
          <button type="submit" className="input-group-text send_btn">
              Send
              <i className="fas fa-location-arrow" />
          </button>
        </form>
      </div>
    </div>
    {/* SendBar */}
  </div>
    )
}