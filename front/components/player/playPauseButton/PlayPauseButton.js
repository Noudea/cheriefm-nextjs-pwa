import Image from "next/image"

function PlayPauseButton({radio,onClick}) {
  return(
    <div onClick={onClick}>
      {!radio ? 
        <Image 
          width={18}
          height={24}
          src='/icons/play.png'
        />
      : 
        <Image 
          width={16}
          height={24}
          src='/icons/pause.png'
        />
      }
    </div>
  )
}

export default PlayPauseButton