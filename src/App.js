import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Amine Smida',
      bio: 'Amine is a limited edition.',
      imgSrc: './amine.jpg',
      profession: 'Developer',
    },
    shows: false,
    mountedTime: new Date(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        mountedTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;
    return (
      <div className='App'>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Component mounted at: {mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
