import React from 'react';

export class Test extends React.Component{
    render(){
    return (  
        <React.Fragment>
    <h4>
       <span>This is {this.props.Title}</span>
       <span> Test {this.props.Try}  </span>
    </h4>
    </React.Fragment>
    );
    }
}

export class PersonDetailes extends React.Component{
    render(){
    return (  
        <React.Fragment>
    <p>
    My name is {this.props.Name},
    My age is {this.props.age}
    </p>
    <p>
    Your name is {this.props.Name},
    Your age is {this.props.age}
    </p>
    </React.Fragment>
    );
    }
}

export class ContactInfo extends React.Component{
    render(){
    return (  
        <React.Fragment>
    <p>
    My email is {this.props.Email},
    My phone is {this.props.phone}
    </p>
    <p>
    Your email is {this.props.Email},
    Your phone is {this.props.phone}
    </p>
    </React.Fragment>
    );
    }
}
