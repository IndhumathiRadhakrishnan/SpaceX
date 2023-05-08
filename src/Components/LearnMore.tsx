import { ReactComponent as LINK } from '../Assets/link-round-1109-svgrepo-com.svg'
function LearnMore({navigation}:{navigation: string}){
    const handleOpenArticle = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
    
    return (
        <div className="flex flex-row py-2 items-center gap-x-1 " onClick={() => handleOpenArticle(navigation)}>
            <span className=" border-b border-white">Learn More</span><LINK stroke-width="0.2" className=" w-4 h-4"/>
        </div>
    )
}
export default LearnMore