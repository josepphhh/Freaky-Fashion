import React from 'react';
import PageHeader from './components/PageHeader';
import PopularProducts from './components/PopularProducts';

class App extends React.Component {

  state = { products: [] }

  async componentDidMount() {
    const response = await fetch('/data');
    const json = await response.json();
    this.setState({
      products: json
    });
  }


  render() {
    return (
      <div>
        <PageHeader />
        <PopularProducts products={this.state.products} />
      </div>
    );
  }
}

export default App;
