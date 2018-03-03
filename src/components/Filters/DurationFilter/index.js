import React from 'react'
import './DurationFilter.css'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'


class DurationFilter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value: {
                min: 5,
                max: 10,
            },
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedRangeDuration){
            this.setState({ value: nextProps.selectedRangeDuration.value})
        }
    }

    handleOnChange = (range) => {
        this.props.handleDurationsFilter(range)
    }
    render(){
        return (
            <div className="duration-filter">
                <div className="duration">Duration</div>
                <form className="form">
                    <InputRange
                        maxValue={20}
                        minValue={0}
                        formatLabel={value => `${value} days`}
                        value={this.state.value}
                        // onChange={value => this.setState({ value: value })}
                        onChange={value => this.handleOnChange({value })}
                        onChangeComplete={value => console.log(value)} />
                </form>


            </div>
        )
    }

}

export default DurationFilter