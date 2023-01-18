

export default function Joke (props) {
    return (
    <div>
        <p><b>{props.setup}</b></p>
        <p>{props.punchline}</p>
        <hr />
    </div>
    )
}