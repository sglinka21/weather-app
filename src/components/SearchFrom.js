import React, {Component} from 'react'
import '../components/SearchForm.css'

class SearchFrom extends Component{
    state = {
        city: ''
    }

    handleChange = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCity(this.state.city);
        this.setState({
            city: ''
        });
    }

    render() {
        return (
            <div className="container search-box">
                <div className="row">
                    <div className="col s12 m8 l8 offset-l2 offset-m2">
                        <div className="card z-depth-3">
                            <div className="card-content">
                                <form className="container" onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="input-field" id="city" value={this.state.city} onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <button className="btn blue">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchFrom
