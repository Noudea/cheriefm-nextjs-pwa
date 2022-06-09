import { useEffect, useState } from 'react'
import { getCheriefm } from '../../pages/api/getCheriefm'

function DetailSong () {
  const [datas, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const _datas = await getCheriefm()
      setData(_datas)
    }
    getData()
  })

  console.log(datas)

  return (
    <></>
  )
}

export default DetailSong
