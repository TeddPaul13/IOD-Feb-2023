import { useContext } from 'react'
import { EmojiContext } from '../EmojiContext'

export default function FinalDestination() {
    const {emoji, setEmoji} = useContext(EmojiContext);

    return (
        <div>
            <h2>Child level: {emoji}</h2>
            <button onClick={() => setEmoji("new Value")}>Update</button>
        </div>
    )
}