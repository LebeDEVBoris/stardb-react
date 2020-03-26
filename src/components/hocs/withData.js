import React, {Component} from 'react';
import Spinner from './../Spinner/Spinner';

const withData = (View, getData, id = null) => {
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
            let data;
            if ((this.state.data === null) || (this.state.data === undefined)) data = null; else data = this.state.data;
            return(
                <View data={data} onItemSelected={this.props.onItemSelected}/>
            );
        }
    }
}

export default withData;