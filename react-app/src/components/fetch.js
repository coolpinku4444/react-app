import React , {Component} from 'react'
import axios from 'axios'

class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        console.log("test");
        axios.get(this.props.url)
        .then((response) => {
            console.log(response.data)
            this.setState({
                data:response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
                this.props.children(this.state.data) 

        )
    }


}
export default Fetch;