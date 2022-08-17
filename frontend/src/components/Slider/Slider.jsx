import './Slider.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { topbooks } from '../../data';


export default function Slider() {

    var len = topbooks.length;

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : len - 1);
        }
        else {
            setSlideIndex(slideIndex < 9 ? slideIndex + 1 : 0);
        }
    };

    const styles = { 
        transform: `translate(${slideIndex * -100}vw , 0px)`
    };

    return (
        <div className='slider'>

            <div className='slider-arrow-left' direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </div>

            <div className="slider-wrapper"
                style={styles}
            >
                {topbooks.map((item) => (
                    <div className="slide">
                        <div className="slide-img-container">
                            <img className="slide-img" src={item.img} alt={item.title} />
                        </div>
                        <div className="slide-info-container">
                            <h1 className="slide-title">The Diary of a Young Girl</h1>
                            <div className="slide-author">
                                by Anne Frank, Eleanor Roosevelt (Introduction), Γιάννης Θωμόπουλος (Translator), Barbara Mooyaart-Doubleday (Translator), Otto H. Frank, Mirjam Pressler (Editor), Susan Massotty (Translator)
                            </div>
                            <div className="slide-desc">
                                Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.
                                <br/>
                                In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.
                            </div>
                        </div>
                    </div>
                ))}
            </div>

{/*
            <div className="slider-left">
                <div className="slider-img">This is image</div>
            </div>
            <div className="slider-right">
                <h1 className="slider-title">The Diary of a Young Girl</h1>
                <div className="slider-author">
                    by Anne Frank, Eleanor Roosevelt (Introduction), Γιάννης Θωμόπουλος (Translator), Barbara Mooyaart-Doubleday (Translator), Otto H. Frank, Mirjam Pressler (Editor), Susan Massotty (Translator)
                </div>
                <div className="slider-description">
                    Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.
                    <br/>
                    In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.
                </div>
            </div>
*/}
            <div className='slider-arrow-right' direction="left" onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </div>
        </div>
    )
}