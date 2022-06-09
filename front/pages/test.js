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
        `
        }
      </style>
        <Player></Player>
    </div>
  )
}

export default test