import { ReactComponent as NotFoundSvg } from "../Assets/not-graded.svg";
function NothingFound(){
  
    return (
        <div className="flex flex-col items-center justify-center h-full py-6">
      <NotFoundSvg stroke = "white" className="w-6 h-6 animate-bounce" />
      <h2 className="mt-8 text-xl font-bold text-white">
        Oops! Nothing Found.
      </h2>
      <p className="mt-2 text-gray-500">
        We're sorry, we couldn't find what you're looking for.
      </p>
      <button className="text-white"onClick={()=>window.history.back()}>Go Back</button>
    </div>
    )
}
export default NothingFound