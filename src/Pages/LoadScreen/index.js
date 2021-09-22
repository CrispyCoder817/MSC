import './styles.css';
import Msc from '../../Branding/MSC.png'

function LoadScreen() {
    return (
        <div>
            <div className="wrapper">
      <header className="wrapper-header">
        <img src={Msc} className="wrapper-logo" alt="logo" />
        <p>
          Music Streaming Channel
        </p>
        </header>
        </div>
        </div>
    )
    
}

export default LoadScreen; 
