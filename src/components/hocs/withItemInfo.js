import React, {Component} from 'react';
import Spinner from './../Spinner/ItemInfo/Spinner';

const withItemInfo = (View) => {
    return class extends Component {
        
        state = {
            selectedItem: null,
            loading: false,
            error: false,
            data: null,
            caution: <div className="iteminfo__caution">Please select one of left list</div>,
            content: null,
        }

        componentDidUpdate(prevProps) {
            
            if (this.props.selectedItem !== prevProps.selectedItem) {
                this.setState({selectedItem: this.props.selectedItem, caution: null, loading: true, data: null});
                this.props.getData(this.props.selectedItem)
                .then((res) => {
                    this.setState({data: res, error: false, loading: false});
                    const fields = this.props.fields;
                    const arr = [];
                    for (const property in fields) {
                        const elem = (<li>{fields[property]} <span>{res[property]}</span></li>);
                        arr.push(elem);
                    }
                    this.setState({content: arr});
                })
                .catch((err) => {
                    this.setState({data: null, error: true, loading: false});
                });
            }
        }

        render() {
            //console.log('content = ', this.state.content);
            //console.log('props = ', this.props);
            const caution = (this.state.caution !== null) ? this.state.caution : null;
            const loading = (this.state.loading) ? <Spinner /> : null;
            const error = (this.state.error) ? <h1>Error...</h1> : null;
            const content = (this.state.data !== null) 
                            ? <View
                                selectedItem={this.state.selectedItem}
                                data={this.state.data}
                                key={this.props.selectedItem}
                                content={this.state.content}
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