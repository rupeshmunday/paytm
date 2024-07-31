export function ButtonComponent(props){
    return <div>
        <div className="text-center mx-2">
            <button type={props.type} className="w-full bg-slate-900 text-slate-50 rounded h-10 my-2 cursor-pointer">{props.title}</button>
        </div>
    </div>
}