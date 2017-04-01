let ViewPortCell = React.createClass({
    shouldComponentUpdate: function(nextProps,nextState){
        return nextProps.pictureIndex != this.props.pictureIndex;
    },
  render: function(){
      return(
          <div className={"viewport-cell " + this.props.pictureIndex}></div>
      );
  }
});

let ViewPortRow = React.createClass({
  render: function(){
    let cellNodes = this.props.cells.map((cell,index)=>
      <ViewPortCell pictureIndex={"bg"+cell} key={index} />   
    );
    return(
        <div className="viewport-row">
            {cellNodes}
        </div>
    );                       
  }
});

let ViewPort = React.createClass({
  render: function(){
    let rowNodes = this.props.data.map((row,index)=>
      <ViewPortRow cells={row} key={index}/>
    );
    return(
        <div className="viewport">
         {rowNodes}                               
        </div>
    );
  }
});

function refreshView(viewport){
    ReactDOM.render(
        <ViewPort rows={viewport.rows} cols={viewport.cols} data={viewport.data}/>,
        document.getElementById('viewport')
    );
}




export { refreshView }