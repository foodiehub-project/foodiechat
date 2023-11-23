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
  where,
  serverTimestamp,
} from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom"
import swal from "sweetalert"
import axios from "axios";
import BASE_URL from "../BaseUrl";

export default function Group() {
    const navigate = useNavigate();
    const [groupMessages, setGroupMessages] = useState([]);
    const [message, setMessage] = useState("");
    const { groupId } = useParams()
    const scroll = useRef();

    useEffect(() => {
        let ignore = false;
        if(!ignore) [
            checkForGroup()
        ]
        const q = query(
          collection(db, "messages"),
          where("groupId", "==", +groupId),
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
        return () => unsubscribe();
    }, []);

    const checkForGroup = async () => {
        try {
            const selectedGroup = await axios({
                method: "get",
                url: `${BASE_URL}/groups/${groupId}`,
                headers: {
                    authorization: `Bearer ${localStorage.access_token}`
                }
            });

            let isInGroup = false;
            for(let i = 0; i < selectedGroup.data.UserGroups.length; i++) {
                if(selectedGroup.data.UserGroups[i].UserId === +localStorage.id) {
                    isInGroup = true;
                }
            }
            if(!selectedGroup.data || !selectedGroup.data.UserGroups || !isInGroup) {
                throw { name: "GroupNotFound" };
            }
        }
        catch(error) {
            if(error.name === "GroupNotFound") {
                swal({
                    text: "Data Not Found",
                    icon: "error"
                });
                navigate("/")
            }
            else {
                swal({
                    text: error.response.data.message,
                    icon: "error"
                });
            }
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(!message) {
                throw { name: "InvalidMessage" }
            }
            const { id, name } = localStorage;
            await addDoc(collection(db, "messages"), {
                text: message,
                name: name,
                createdAt: serverTimestamp(),
                groupId: +groupId,
                userId: id,
            });
            setMessage("");
            scroll.current.scrollIntoView({ behavior: "smooth" });
        }
        catch(error) {
            if(error.name === "InvalidMessage") {
                swal({
                    text: "Message cannot be empty",
                    icon: "error"
                });
            }
            else {
                swal({
                    text: error.response.data.message,
                    icon: "error"
                });
            }
        }
    }
    const handleChange = async (event) => {
        const { value } = event.target;
        setMessage(value);
    }
    return (
  <div className="chatContainer">
    <div className="groupNameContainer">
      <p className="groupName">Foodie-Hub</p>
    </div>
    <div className="containerChat">
      <UserList />
      {/* ChatBubble */}
      <div className="chatContext">
        <div className="chatBubbleContainer">
          <div className="message-container scrollBubble">
            {groupMessages.map((message, index) => {
                if(message.userId === localStorage.id) {
                    return (
                        <div key={index} className="rightBubble">
                        <div className="name-containerR rightName">
                            <p>{message.name}</p>
                        </div>
                        <p className="message-content rightMessage">
                            {message.text}
                        </p>
                        </div>
                    )
                } else if(message.userId !== localStorage.id) {
                    return (
                        <div key={index} className="leftBubble">
                        <div className="name-container">
                            <p>{message.name}</p>
                        </div>
                        <p className="message-content">
                            {message.text}
                        </p>
                        </div>
                    )
                }
            })}
            <span ref={scroll}></span>
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
            value={message}
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