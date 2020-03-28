import React, {Component} from 'react';
import Spinner from '../Spinner/Spinner';

const withItemList = (View, props) => {
    return class extends Component {   

        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.props
            .getData()
            .then((res) => {
                this.setState({
                    data: res,
                    loading: false,
                    error: false,
                });
            })
            .catch((err) => {
                this.setState({
                    data: null,
                    loading: false,
                    error: true
                })
            });
        }

        render() {
            console.log('withItemListProps func = ', props);
            console.log('withItemListProps class = ', this.props);
            const {data, loading, error} = this.state;
            if(loading) return <h1>Loading...</h1>

            return(
                <View data={data}/>
            );
        }
    }
}

export default withItemList;