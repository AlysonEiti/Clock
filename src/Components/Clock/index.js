import './Clock.css';
import Line from '../Line';
import Div from '../Div';

const Clock = (props) => {
    var line = [];
    for (var i = 0; i <= 330; i = i+30) {
        line.push(<Line deg={i} />)
    }

    const divList = [
        {class: 'p seconds'},
        {class: 'p minutes'},
        {class: 'p hours'},
        {class: 'fit'}
    ]

    return (
        <div className='clock'>
            <div className='lines'>
                {line}               
            </div>
            <div className='pointers'>
                {divList.map((item, key) =>
                    <Div key={key} class={item.class} />
                )} 
            </div>
        </div>
    );
}

export default Clock;