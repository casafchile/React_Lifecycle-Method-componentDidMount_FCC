class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {               //entidad para dejar en tiempo de dato
      this.setState({
        activeUsers: 1273
      });
    }, 5000);                        //los 5000 son milisegundos para entregar la respuesta
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
