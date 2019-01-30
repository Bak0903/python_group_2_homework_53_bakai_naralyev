import React, {Component} from 'react';
import './Lotto.css';


class Lotto extends Component {
    render() {
        return (
            <div className="lotto">

                <div className={"number"}>{this.props.combo.numbers[0]} </div>
                <div className={"number"}>{this.props.combo.numbers[1]} </div>
                <div className={"number"}>{this.props.combo.numbers[2]} </div>
                <div className={"number"}>{this.props.combo.numbers[3]} </div>
                <div className={"number"}>{this.props.combo.numbers[4]} </div>

            </div>
        );
    }
}


export default Lotto