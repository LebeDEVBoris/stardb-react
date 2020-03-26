import React, {Component} from 'react';
import Spinner from './../Spinner/Spinner';

const withData = (View, getData, id = undefined) => {
    return class extends Component {
        
        state = {
            loading: true,
            error: false,
            data: null
        }

        componentDidMount() {
            getData(id)
                .then((res) => {
                    this.setState({loading: false, error: false, data: res})
                })
                .catch((err) => {console.log('withData error: ', err)});
        }

        render() {
            if (this.state.loading) {
                return <Spinner />
            }

            return(
                <View data={this.state.data} onItemSelected={this.props.onItemSelected}/>
            );
        }
    }
}

export default withData;