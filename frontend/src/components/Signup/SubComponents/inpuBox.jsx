export function InputBox(props){
    return <div>
        <label className="text-left ml-2 font-bold">{props.heading}</label><br />
        <div className="text-center mx-2">
            <input type={props.type} placeholder={props.title} className='border-2 border-gray-300 indent-0.5 w-full rounded h-10'/>
        </div>
    </div>
}