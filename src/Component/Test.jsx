import React, {Component} from 'react';
 

// export const Test = ({Title,Try})  =>(
//     <h2>This is {Title} practice #{this.state.num} </h2>
// );

export class Test extends Component{
    state={
        num:1,
    }
    render(){
        const {Title,Try} = this.props;
        return(
        <div>
        <h2>This is {Title} practice #{this.state.num} </h2>
        <button onClick={()=> {
        this.setState({num: this.state.num +1});
            }}>+</button>
        </div>
        );
    }
}

// export const PersonalInfo = ({Fname,Lname,age,phone}) =>(
//     <p>My name is {Fname} {Lname}, age {age}, phone num {phone}</p>
// );

export class PersonalInfo extends Component{
    state={
        show: false,
    };
    render(){
        const {Fname,Lname,age,phone} = this.props;
        return(
            <div>
            <button onClick={()=> this.setState({show: ! this.state.show})}>
                {this.state.show ? 'Hide Info' : 'Show Info'}
            </button>
            { this.state.show && (
                <p>My name is {Fname} {Lname}, age {age}, phone num {phone}</p>
            )}
            </div>
        );
    }
}




