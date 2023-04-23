import { Component } from 'react';
import { Audio } from 'react-loader-spinner';

class Loader extends Component{
    render() {
        return (
            <div><Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            /></div>
        );
    }
}
export default Loader;

// Компонент спінера відображається, доки відбувається 
// завантаження зображень.Використовуйте будь - який готовий
// компонент, наприклад react - loader - spinner або будь - який інший.