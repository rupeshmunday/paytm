import { useNavigate } from "react-router-dom"
// import './../../../index.css'; // Ensure Tailwind CSS is imported

export function BottomWarning(props){
    const navigate = useNavigate();
    return <div className="text-center font-medium text-sm ">
        {props.text} <a onClick={()=>{
            navigate('/signin')
        }} className="underline hover:cursor-pointer cursor-pointer text-blue-500">{props.link}</a>
    </div>
}