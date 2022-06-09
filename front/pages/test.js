import Image from "next/image"
import Player from "../components/player/Player"

function test() {
  return(
    <div className='testpage'>
      <style jsx>
        {
        `
          .testpage {
            height:100%;
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
          }

          imageContainer {
            border-radius:50%;
          }

          .imageContainer {
            position: absolute;
            height: 90px;
            width:90px;
            border-radius: 50%;
          }

        `
        }
      </style>
        {/* <Player></Player> */}
    </div>
  )
}

export default test