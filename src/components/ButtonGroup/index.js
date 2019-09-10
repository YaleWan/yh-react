import React, { Component } from 'react'
import { findButtons } from '../../Api/system'

export default class ButtonGroup extends Component {
    async componentDidMount(){
        const {data} = findButtons(this.props.id)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
