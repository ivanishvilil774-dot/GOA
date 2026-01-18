import { Component } from "react";
import FallbackUI from "./fallbackUI.jsx";

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {error: null};
    }

    static getDerivedStateFormError(error) {
        return { error };
    }
    

    render() {
        if(this.state.error) {
            return <FallbackUI/>
        }

        return this.props.children
    }

}