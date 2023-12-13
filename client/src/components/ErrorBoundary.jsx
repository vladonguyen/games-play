import { Component } from "react";

export default class ErrorBoundary extends Component{
    static GerDerivedStateFromError(err){
        console.log('GerDerivedStateFromError');
    }
    componentDidCatch(error, errorInfo){
console.log('componentDidCatch');
    }

    render(){
        return this.props.children;
    }
}