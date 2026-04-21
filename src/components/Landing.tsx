import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

function Landing() {
  return (
     <div className="text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 flex items-center justify-between">
        <LeftColumn />
        <RightColumn/>
      </div>
    </div>
  )
}

export default Landing