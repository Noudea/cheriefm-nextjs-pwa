import DetailSong from './DetailSong'

function Player () {
  const FLUX_CHERIEFM = 'https://scdn.nrjaudio.fm/fr/30201/mp3_128.mp3?origine=fluxradios&cdn_path=adswizz_lbs11&access_token=00a1ff392ac74fdab1b0f411362b99f9'

  return (
    <>
      <style jsx>
        {
        `
        audio::-webkit-media-controls-current-time-display {
          display: none;
        }

        audio::-webkit-media-controls-time-remaining-display {
          display: none;
        }
        `
        }
      </style>
      <div className='player-content'>

        <audio className='player' src={FLUX_CHERIEFM} controls />
        <h4>Play</h4>
      </div>
    </>
  )
}

export default Player
