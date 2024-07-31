import { useNavigate } from "react-router-dom";

export const Users = () => {
    const users = ['Harkirat Singh', 'Rupesh Kumar']
    return <div>
        <div className="font-bold text-lg">Users</div>
        <div>
            <input type="text" className="w-full px-2 py-1 border rounded border-slate-200" placeholder="Search Users"/>
        </div>
        <div>
            {users.map((user)=>{
                console.log(user);
                return <User key={user} name={user}></User>
            })}
        </div>
    </div>
}

function User(props) {
    const navigate = useNavigate();
    return <div className="flex justify-between mt-1">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {props.name[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {props.name}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full w-52">
            <button className="w-full bg-slate-900 text-slate-50 rounded h-10" onClick={()=>{
                // const navigate = useNavigate();
                navigate('/send')
            }}>Send Money</button>
        </div>
    </div>
}