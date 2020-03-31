//import React from 'react';
import './App.scss';
import Car from './Car/index'
import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        console.log('App constructor')
        super(props);
        this.state={
            cars: [
                {name :'BMW', year : 2018},
                {name :'Audi', year : 2016},
                {name :'Mazda', year : 2010},
            ],
            pageTitle: 'React components',
            showCars: false
        }
    }

    onChangeName (name,index) {
        const car = this.state.cars[index]
        car.name = name
        const newCars = [...this.state.cars]
        newCars[index] = car
        this.setState({
            cars : newCars
        })
    }
    deleteHandler (index) {
        const newCars = this.state.cars.concat()
        newCars.splice(index,1)
        this.setState({cars : newCars})
    }
    toggleTitleHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    componentWillMount() {
        //формируется при инициализации
        console.log('App componentWillMount')
    }
    componentDidMount() {
        //сообщает что  весь html готов и его можно показывать
        console.log('App componentDidMount')
    }


    render() {
        //формирует конечный jsx и html
        console.log('App render')
        const divStyle = {
            textAlign:'center'
            /*а можно записать и по старинке с кавычками,тоже будет работать text-align:'center'*/
        }
         let cars = null
        if(this.state.showCars){
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this,index)}
                        onChangeName={(event) => this.onChangeName(event.target.value,index)}
                    />
                )
            })
        }
        return (
            /*style={{color:'red',fontSize:'20px'а можно записать и по старинке с кавычками,тоже будет работать'font-size':20px}}*/
            <div style={divStyle}>
                { /*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <button className={'AppButton'}
                    onClick={this.toggleTitleHandler}
                >Toggle Title</button>
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    padding: '20px'


                }}>
                    { cars }
                </div>

                {/*Простой пример вывода списка!А выще тот который нужно использовать!!!<Index*/}
                {/*    name={cars[0].name}*/}
                {/*    year={cars[0].year}*/}
                {/*    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
                {/*>*/}
                {/*</Index>*/}
                {/*<Index*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}*/}
                {/*>*/}
                {/*</Index>*/}
                {/*<Index*/}
                {/*    name={cars[2].name}*/}
                {/*    year={cars[2].year}*/}
                {/*    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}*/}
                {/*>*/}
                {/*</Index>*/}
            </div>
        );
        // return React.createElement(
        //     'div',
        //     {
        //       className : 'App'
        //     },
        //     React.createElement(
        //         'h1',
        //         null,
        //         'Hello world!'
        //     )
        // )
    }
}
export default App;

