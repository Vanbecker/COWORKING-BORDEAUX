import Coworkingglobal from "./Coworkingglobal "

const AllCoworking = ({ coworkingsFromFakeApi }) => {
    return (
        <>
            {coworkingsFromFakeApi.map((element) => (
                <Coworkingglobal coworking={element} />

            ))}
        </>
    )
}

export default AllCoworking

