import Image from 'next/image'
import iconCherie from '../../public/cherie_icon.png'
import hommeMature from '../../public/homme-mature_contenu.jpg'
import searchIcon from '../../public/export/noun-list-search-3039030.png'

function AppBar() {
  return(
    <>
    <style jsx> {
      `
      .appbar {
        display: flex;
        position: relative;
        margin: 15px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
      }
      .image-icon {
        margin: 0;
        padding: 0;
      }
      
      .image-icon button {
        border: none;
        background-color: white;
      }

      .profile-search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
      }

      .research {
        background-color: white;
        border: none;
      }

      .profile {
        border: solid 2px #ffa1a1;
        border-radius: 50%;
        background-color: white;
      }

      .image-homme {
        border-radius: 50%;
      }
      `
    }
    </style>
      <div className='appbar'>
        <div className='image-icon'>
          <button>   
            <Image src={iconCherie} width={93} height={38}>
            </Image>
          </button>
        </div>

        <div className='profile-search'>
          <div>
            <button className='research'>
              <Image src={searchIcon} width={27.2} height={19.43}></Image>
            </button>
          </div>

          <div>
            <button className='profile'>
              <Image className='image-homme' src={hommeMature} width={33.85} height={33.85}></Image>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppBar;