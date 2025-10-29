import { Component } from 'react';
import './index.css';
import Button from './button';

class Clock extends Component {
  state = {date: new Date(), locale: 'bn-BD'};
  
  componentDidMount(){
    this.clockTimer=setInterval(()=>
      this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  // handleClick = () =>{
  //   this.setState({
  //     locale: 'en-US',
  //   })
  // }
  handleClick = (locale) =>{
    this.setState({
      locale: locale,
    })
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render() {
    const{ date, locale } =this.state;
    return (
      <div>
      <h2 className="heading">
        <span className='text'>{date.toLocaleTimeString(locale)}</span>
      </h2>
      {/* <button type='button' onClick={this.handleClick}>Click here </button> */}
      {/* jodi etar sathe kono parameter ke pathate hoy */}
      {/* <button type='button' onClick={this.handleClick.bind(this,'en-US')}>Click here </button> */}
      {/* for avoid bind */}
      {/* <Button change={this.handleClick.bind(this,'en-US')}>Click Here</Button> */}

           {locale==='bn-BD'? (<Button change={this.handleClick} locale="en-US" show={false} enable={false} />): 
           (
              <Button change={this.handleClick} locale="bn-BD"  show={true} />
           )}
      </div>
    );
  }
}

export default Clock;
