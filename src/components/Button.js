import React, {PropTypes, Component} from 'react'

export default class Button extends Component {
    static propTypes = {
        handleClick: PropTypes.func
    }

    handleClick = () => {
        this.props.handleClick(1)
    }

    render () {
        return (
            <button className="bttn-fill bttn-md" onClick={this.handleClick}>
                {this.props.children}
            </button>
        )
    }
}
