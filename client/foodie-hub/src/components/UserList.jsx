import { useEffect, useState } from "react";
import swal from "sweetalert";
import BASE_URL from "../BaseUrl";
import axios from "axios";

export default function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect((ignore) => {
        let ignore = false;

        fetchUsers(ignore)

        return () => (ignore = true);
    })

    const fetchUsers = async (ignore) => {
        try {
            const { data } = await axios({
                method: "get",
                url: `${BASE_URL}/users`,
                headers: {
                    authorization: "Bearer " + localStorage.token
                }
            });

            if(!ignore) {
                setLodgingsData(data);
            }
        }
        catch(error) {
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
          <p className="userByList">Andy</p>
        </div>
      </div>
    )
}