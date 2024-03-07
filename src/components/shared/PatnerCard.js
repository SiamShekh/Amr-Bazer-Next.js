import Image from "next/image";

const PatnerCard = ({path}) => {
    return (
        <div>
            <Image src={path} width={151} height={112} alt={path}/>
        </div>
    );
};

export default PatnerCard;