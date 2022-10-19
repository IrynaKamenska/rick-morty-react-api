import './CharacterCard.css'
export default function CharacterCard(props: { name: string, image: string, origin: string }) {
    return <>
        <section>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}></img>
            <h4>{props.origin}</h4>
        </section>

    </>
}
