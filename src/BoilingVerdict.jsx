export default function BoilingVerdict({clecius=0}){
    if (clecius>= 100){
        return <p>The water would boiling</p>
    }
    return <p>Water Would not Boiled</p>
}