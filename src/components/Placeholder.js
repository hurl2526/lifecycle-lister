import React, { Component } from 'react';
const fetch = require('node-fetch');

class Placeholder extends Component {
  state = {
    list: [],
    toggle: true,
  };

  // handleClick = (e) => {
  //   e.preventDefault();
  //   console.log('handleClick clicked');
  //   const newList = [...this.state.list];
  //   newList.push({ name: 'handleClick name' });
  //   this.setState({
  //     list: newList,
  //   });
  // };

  handleToggle = (e) => {
    e.preventDefault();
    console.log('handleToggle clicked');
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      const newList =[];
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((data) => data.json())
  .then((data) => {
    for(let i=0;i<20;i++){
    newList.push({title:data[i].title,url:data[i].url, image:data[i].thumbnailUrl })

  }
  this.setState({
    list: newList,
  },
  () => {
    console.log(this.state.list);
  });
  })
    }, 3000);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate ran');
  //   if (prevState.toggle !== this.state.toggle) {
  //     console.log('make db call');
  //     const newList = [...this.state.list];
  //     newList.push({ name: 'updated name' });
  //     this.setState({
  //       list: newList,
  //     });
  //   }
  // }

  render() {
    console.log('render lifecycle ran');
    return (
      <div style={{ fontSize: '2rem' }}>
        {this.state.list.length !== 0 ? (
          <div>
            <h1>Classwork API Call</h1>
            <ul style={{ lineHeight: '2em' }}>
              {this.state.list.map((item, idx) => {
                return <li key={idx}>
                  <h3>Title:{item.title}</h3> 
                  <h2>url:{item.url}</h2>
                  <img src={item.image}alt='...'/>
                  </li>
              })}
            </ul>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Placeholder;
