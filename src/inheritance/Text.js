import { PureComponent } from "react";
import Emoji from "./Emoji";

export default class Text extends Emoji{
    constructor(props){

        super(props);

    }
    render(){
        const decoratedText = this.addEmoji('jahid', '*');
        return super.render(decoratedText);
    }
   
}