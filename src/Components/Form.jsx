import React, { Component } from 'react';

const Form =props =>{
    return(
        <div className="container">
            <div>{props.error ? error():null}</div>
            <form onSubmit={props.loadWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" placeholder='city' autoComplete='off' />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" name="country" placeholder='country' autoComplete='off' />
                </div>
               
                <div className="col-md-3 md-0 py-2 text-md-left">
                    <button className="btn-warning">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default Form;