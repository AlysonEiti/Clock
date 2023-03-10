import './Line.css';

const Line = (props) => {
    return (
        <div className='line' style={{ transform: `rotate(${props.deg}deg)` }}>
            <div className='point'></div>
        </div>
    );
}

export default Line;