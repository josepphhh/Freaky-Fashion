import React from 'react';


class SiteSearch extends React.Component {

    state = { term: '' };


    render() {
        return (
            <form>
                <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                <button type="button">Sök</button>
            </form>
        );
    }
}


export default SiteSearch;