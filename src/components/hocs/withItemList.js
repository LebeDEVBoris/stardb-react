import React, {Component} from 'react';
import Spinner from './../Spinner/ItemList/Spinner';
import CommonError from './../Errors/CommonError/CommonError';

const withItemList = (View) => {
    return class extends Component {   

        state = {
            data: null,
            loading: true,
            error: false,
            pages: null
        }

        onPageSelected = (id) => {
            this.setState({
                data: null,
                loading: true,
                error: false
            });
            this.props.getData(`/?page=${id}`)
                .then((res) => {
                    this.setState({data: res, loading: false, error: false});
                })
                .catch((err) => {
                    this.setState({data: null, loading: false, error: true});
                })
        }

        // componentDidUpdate(prevProps, prevState) {
        //     if (prevState.)
        // }

        componentDidMount() {
            //console.log('props = ', this.props);
            this.props
            .getData()
            .then((res) => {
                const arrPages = [];
                const countPages = Math.ceil(res[1].count/ 10);
                for (let i = 1; i <= countPages; i++) {
                    arrPages.push(
                        <button onClick={() => this.onPageSelected(i)}>{i}</button>
                    );
                }
                this.setState({
                    // data: null,
                    // loading: true,
                    // error: false,
                    pages: arrPages,
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
       
            const {data} = this.state;

            const loading = (this.state.loading) ? <Spinner /> : null;
            const pages = this.state.pages;
            const error = this.state.error ? <CommonError /> : null;
            const content = (data !== null) ? <View 
                                                data={data} 
                                                onItemSelected={this.props.onItemSelected}/> 
                                                    : 
                                                null
            

            //console.log(data);
            return(
                <div className="data__list">
                    <div className="data__list-content">
                        <ul>
                            {loading}
                            {content}
                            {error}
                        </ul>
                    </div>
                    <div className="data__pages">
                        {pages}
                    </div>
                </div>
            );
        }
    }
}

export default withItemList;