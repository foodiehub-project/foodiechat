import { useEffect, useState } from "react";
import swal from "sweetalert";


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