import React, {Component} from 'react';
//import Spinner from '../Spinner/Spinner';

const withItemList = (View) => {
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
                    // data: null,
                    // loading: true,
                    // error: false,

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
            const {data } = this.state;
            const content = (data !== null) ? <View 
                                                data={data} 
                                                onItemSelected={this.props.onItemSelected}/> 
                                                    : 
                                                <h1>Loading...</h1>
            

            return(
                <div className="data__list">
                    <ul>
                        {content}
                    </ul>
                </div>
            );
        }
    }
}

export default withItemList;