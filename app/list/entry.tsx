export default function Entry(props: any) {
    return (
        <div className="flex items-center justify-center my-4">
            <div className='px-2'>{props.id}</div>
            <div className='px-2'>{props.userid}</div>
            <div className='px-2'>{props.task}</div>
            <div className='px-2'>{props.urgency}</div>
            <button className="mx-3">del</button>
        </div>
    )
}