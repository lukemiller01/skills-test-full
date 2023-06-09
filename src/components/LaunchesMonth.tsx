import Link from "next/link"
import './launch.css'

interface BarProps {
  number: number
  max: number
  index: number
  year: number
}

const LaunchesMonth = ({number, max, year, index}: BarProps) => {
  return (
    <div className=' h-60 px-1 flex items-end' style={{width: `${1/12*100}%`}}>
      <Link href={`/launches/${year}/${index+1}`} style={{height: `${number/max*100}%`}} className=' bg-white w-full launch__bar flex items-center justify-center'>
        <p className="hint__view">{index+1}/{year}</p>
      </Link>
    </div>
  )
}

export default LaunchesMonth