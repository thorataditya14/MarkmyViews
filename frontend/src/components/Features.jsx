import './Features.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LayersIcon from '@mui/icons-material/Layers';


export default function Features() {
    return (

        <div className="features">
            <div className="features-wrapper">

                <div className="feature-card">
                    <CheckCircleIcon className='feature-icon'/>
                    <h3 class="feature-title">Easy to use</h3>
                    <p className='feature-desc'>Quickly get the perfect books you want.</p>
                </div>

                <div className="feature-card">
                    <LayersIcon className='feature-icon'/>
                    <h3 class="feature-title">Huge Collection</h3>
                    <p className='feature-desc'>The best books? We got them all here.</p>
                </div>

                <div className="feature-card">
                    <CheckCircleIcon className='feature-icon'/>
                    <h3 class="feature-title">Reviewed Books</h3>
                    <p className='feature-desc'>Find the book of your choice, reviewed.</p>
                </div>

            </div>
        </div>
    )
}