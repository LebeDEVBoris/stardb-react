import React, {Component} from 'react';
//import Spinner from './../Spinner/Spinner';

const withItemInfo = (View) => {
    return class extends Component {
        
        state = {
            selectedItem: null,
            loading: false,
            error: false,
            data: null,
            caution: <h1>Please select one of left list</h1>
        }

        componentDidUpdate(prevProps) {
            if (this.props.selectedItem !== prevProps.selectedItem) {
                this.setState({selectedItem: this.props.selectedItem, caution: null, loading: true, data: null});
                this.props.getData(this.props.selectedItem)
                .then((res) => {
                    this.setState({data: res, error: false, loading: false});
                })
                .catch((err) => {
                    this.setState({data: null, error: true, loading: false});
                });
            }
        }

        render() {
            const caution = (this.state.caution !== null) ? this.state.caution : null;
            const loading = (this.state.loading) ? <h1>Loading...</h1> : null;
            const error = (this.state.error) ? <h1>Error...</h1> : null;
            const content = (this.state.data !== null) 
                            ? <View
                                selectedItem={this.state.selectedItem}
                                data={this.state.data}
                                key={this.props.selectedItem}
                                />
                            : null;

            const res = [caution, loading, error, content];
            return(
                <div className="iteminfo">
                    {res}
                </div>
            );
        }
    }
}

export default withItemInfo;