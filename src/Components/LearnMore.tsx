import { useNavigate } from 'react-router-dom';
import { ReactComponent as LINK } from '../Assets/link-round.svg'
function LearnMore({ navigation, appNavigate }: { navigation: string, appNavigate: boolean }) {

    const navigate = useNavigate()
    const handleOpenArticle = (url: string) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <button className="flex flex-row py-2 items-center gap-x-1 " onClick={() => {
            appNavigate ?
                navigate(navigation) :
                handleOpenArticle(navigation)
        }}>
            <span className=" border-b border-white text-white">Learn More</span><LINK stroke-width="0.2" className=" w-4 h-4" />
        </button>
    )
}

export default LearnMore