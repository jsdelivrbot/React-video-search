import React from 'react';

class SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    handleInputChange(term){
        this.setState({ term });
        this.props.onChangeSearchTerm(term);
    }

    render() {
        return (
            <div className="search-bar">
                 <input onChange={event => this.handleInputChange(event.target.value)} placeholder="Search video..."/>
            </div>
        );
    }
}

export default SearchBar;