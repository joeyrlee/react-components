class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  onGroceryListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    var style = {
      'font-weight': this.state.hovered ? 'bold' : 'normal'
    };



    return (
      // <li>{this.props.item}</li>
      <li style={style} onMouseEnter={this.onGroceryListItemHover.bind(this)} 
                        onMouseLeave={this.onGroceryListItemHover.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}


var GroceryList = (props) => (
  // {
  // var rows = [];
  // var groceryItems = props.groceryItems;
  // for (var i = 0; i < groceryItems.length; i++){
  //   rows.push(<GroceryListItem item = {groceryItems[i]}/>);
  // }
  
  // return (<ul>{rows}</ul>);
  <ul>
    {props.groceryItems.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

// var GroceryListItem = (props) => (
// );

ReactDOM.render(<GroceryList groceryItems = {['blah', 'bleh', 'vegetables']}/>, document.getElementById("app"));