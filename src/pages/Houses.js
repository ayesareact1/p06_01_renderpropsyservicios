import React, { Component } from 'react'
import Card from '../components/Card';
import { getHouses } from '../services/HousesService';

export default class Houses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.setState({houses: getHouses()})
    }

    render() {
        return (
            <div className="fila grid">
                {/* {this.state.houses.map(house => {
                    return <Card key={house.id} house={house}
                       render={ (pic, title, price) => {
                            return <>
                                <img src={pic} />
                                <div className="footer-card">
                                    <div>
                                        <p>{title}</p>
                                        <p>{price}</p>
                                    </div>
                                    <button>Más información</button>
                                </div>
                            </>
                       }}
                    
                    />
                })} */}
                {this.state.houses.map(house => {
                    return <Card key={house.id} house={house}
                       render={ (pic, title, price) => {
                            return <>
                                <p>Oferta {price}</p>
                                <img src={pic} />
                                <div className="footer-card">
                                    <div>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            </>
                       }}
                    
                    />
                })}
            </div>
        )
    }
}
