export default function Text({addEmoji}){
    const text = 'I am javascript';
    return <div>{addEmoji? addEmoji(text,'*'): text}</div>
}