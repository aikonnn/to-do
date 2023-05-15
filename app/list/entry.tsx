export default function Entry(props: any) {
    async function deleteEntry(){
        console.log("called delte function");
        const data = await (
            await fetch(
              "api/task/" + props.id, 
              {
                method: 'DELETE'
              }
            )
          ).json();
    }

    return (
        <div className="flex items-center justify-center my-4">
            <div className='px-2'>{props.id}</div>
            <div className='px-2'>{props.userid}</div>
            <div className='px-2'>{props.task}</div>
            <div className='px-2'>{props.urgency}</div>
            <button className="mx-3" onClick={e => props.handleChange(deleteEntry)}>del</button>
        </div>
    )
}