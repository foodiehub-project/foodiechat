import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useParams } from "react-router-dom"
import axios from "axios"
import BASE_URL from "../BaseUrl";

export default function UserList() {
    const { groupId } = useParams()
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        let ignore = false;

        fetchUsers(ignore)
        console.log()
        return () => (ignore = true);
    })

    const fetchUsers = async (ignore) => {
        try {
            const { data } = axios({
                    method: "get",
                    url: `${"http://localhost:3000"}/groups/${groupId}`,
                    headers: {
                        authorization: `Bearer ${localStorage.access_token}`
                    }
                })

            if(!ignore) {
                setUsers(data.UserGroups);
            }
        }
        catch(error) {
            console.log(error)
            swal({
                text: error.response.data.message,
                icon: "error"
            })
        }
    }
    return (
        <div className="userContext">
        <p className="userList">Chat Participant's</p>
        <div className="containerUList">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
          <p className="userByList"></p>
        </div>
      </div>
    )
}