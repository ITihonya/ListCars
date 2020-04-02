import React from 'react';
import './Car.scss'
import classes from './Car.scss'
import widthClass from "../hoc/widthClass";
//import Radium from 'radium'

/*ЛУЧШЕ ВОТ ТАК ЧЕМ НИЖЕ!!!const Car = props =>{
    const inputClasses = ['input']

    if(this.props.name !== ''){
        inputClasses.push('green')
    }
    else {
        inputClasses.push('red')
    }
    if(this.props.name.length > 4){
        inputClasses.push('bold')
    }
    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0,.14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    }
    return (
        <div className="Car" style={style}>
            <h3>Car name: {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input
                type="text"
                onChange={this.props.onChangeName}
                value={this.props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
        </div>
    )
}*/
class Car extends React.Component{
    render (){

        const inputClasses = ['input']

        if(this.props.name !== ''){
            inputClasses.push('green')
        }
        else {
            inputClasses.push('red')
        }
        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}
//можно так!!!
// function car() {
//     return (
//         <div>This is car components</div>
//     )
// }

//Можно покороче!!!
// const car = () => {
//     return (
//         <div>This is car components</div>
//     )
// }

//А можно и вот так
//const car = () => <div>This is car components</div>

//а если возвращаем не один div а ещё что...то уже с круглыми скобками
// const car = () => (
//     <div>
//         This is car components
//         <strong>test</strong>
//     </div>
// )

//export default car

//а можно покороче
// export default () => (
//     <div>
//        This is car components
//        <strong>test</strong>
//      </div>
// )

//Продолжаем!!!Будем делать так!!!!!!!
/*если 1+1 не обернуть в фиг.скобки то это будет обычный
текст html,если же хотим динамики(т.е. преобразовать в js)
добавляем фиг.скобки*/
// export default () => (
//     <div>
//        <p>This is car components</p>
//         <p><strong>{1+1}</strong></p>
//         <p><strong>Number : {Math.round(Math.random() *100)}</strong></p>
//      </div>
// )

//11 Урок 2,6
/*если в стрелочной функции мы принимаем один параметр
например props то круглые скобки можно не писать*/
/*Если в компоненте нужно передать ещё какой нибудь контент например
цвет, то тогда в App.js указываем вот так:
    <Car name="Audi" year={2016}>
        <p style={{color:'red'}}>COLOR</p>
    </Car>
а здесь index.js обращаемся {props.children}
<div>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    {props.children}
</div>*/


export default widthClass(Car,classes.Car)




