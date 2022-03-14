import Star from '../Star/Star';
import './StarRating.scss';

export default function StarRating({
                                       totalStars,
                                       selectedStars,
                                       onRate = f => f
                                   }) {
    //создает массив и заполняет значениями
    function createArr(totalStars) {
        return [...Array(totalStars).keys()];
    }

    return (
        <>
            <div className={'stars__container'}>
                {createArr(totalStars).map((item, index) => (
                    <Star
                        key={index}
                        selected={selectedStars > index}
                        onSelect={() => onRate(index + 1)}/>
                ))}
            </div>
            <p> {selectedStars} of {totalStars} </p>
        </>
    );
}

StarRating.propTypes = {};

