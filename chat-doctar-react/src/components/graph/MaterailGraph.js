import React from 'react';
import './gr.css';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function compareNumbers(a, b) {
    return a - b;
  }
  
  class Mpp extends React.Component{

    constructor(props){
        super(props)
        this.state = this.getInitialState()
        this.populateArray=this.populateArray.bind(this)
          
    }
      getInitialState() {
          return {
              data: [],
              series: ['France'],
              labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
              colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
          }
      }
      componentDidMount () {
          this.setState({data:this.props.data})
         this.populateArray();
        //   setInterval(this.populateArray, 2000);
      }
      populateArray() {
          var data = [],
              series = 1,//getRandomInt(2, 10),
              serieLength = 3;//getRandomInt(2, 10);
      
         
              var tmp = [];
              
              this.props.data.map(x=>tmp.push(x.value))
              
              data.push(tmp);			
          
          
          this.setState({ data: data });
      }
      render() {
          return (
              <section>
                  <Charts
                      data={ this.state.data }
                      labels={ this.state.series }
                      colors={ this.state.colors }
                      height={ 250 }
                      horizontal={ true }                  />
          
                  
                  <Legend labels={ this.state.labels } colors={ this.state.colors } />
              </section>
          );
      }
  };
  
  
  
 class Legend extends React.Component{
      render () {
          var labels = this.props.labels,
              colors = this.props.colors;
          
          return (
          <div className="Legend">
              { labels.map(function(label, labelIndex) {
                  return (
                  <div>
                      <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
                      <span className="Legend--label">{ label }</span>
                  </div>
                  );
              }) }
          </div>
          );
      }
  };
  
   class Charts extends React.Component{
      render() {
          var self = this,
              data = this.props.data,
              layered = this.props.grouping === 'layered' ? true : false,
              stacked = this.props.grouping === 'stacked' ? true : false,
              opaque = this.props.opaque,
              max = 0;
          
          for (var i = data.length; i--; ) {
              for (var j = data[i].length; j--; ) {
                  if (data[i][j] > max) {
                      max = data[i][j];
                  }
              }
          }
          
                  
          return (
              <div className={ 'Charts' + (this.props.horizontal ? ' horizontal' : '' ) }>
                  { data.map(function (serie, serieIndex) {
                       var sortedSerie = serie.slice(0),
                           sum;
                       
                       sum = serie.reduce(function (carry, current) {
                           return carry + current;
                      }, 0);
                       sortedSerie.sort(compareNumbers);				 		
                                       
                      return (
                          <div className={ 'Charts--serie ' + (self.props.grouping) }
                               key={ serieIndex }
                              style={{ height: self.props.height ? self.props.height: 'auto' }}
                          >
                          <label>{ self.props.labels[serieIndex] }</label>
                          { serie.map(function (item, itemIndex) {
                              var color = self.props.colors[itemIndex], style,
                                  size = item / (stacked ? sum : max) * 100;
                              
                              style = {
                                  backgroundColor: color,
                                  opacity: opaque ? 1 : (item/max + .05),
                                  zIndex: item
                              };
                          
                              if (self.props.horizontal) {
                                  style['width'] = size + '%';
                              } else {								
                                  style['height'] = size + '%';						
                              }
      
                              if (layered && !self.props.horizontal) {
                                  //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                                  style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
                                  // style['left'] = (itemIndex * 10) + '%';
                              }
                          
                           return (
                               <div
                                   className={ 'Charts--item ' + (self.props.grouping) }
                                   style={ style }
                                  key={ itemIndex }
                              >
                                   <b style={{ color: color }}>{ item }</b>
                               </div>
                          );
                          }) }
                          </div>
                      );
                  }) }
              </div>
          );
      }
  };
  
  export default Mpp;