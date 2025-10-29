import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
     const {change:currentChange, locale :currentLocale}=this.props;
     const {change:nextChange,locale :nexttLocale}=nextProps;
     if(currentChange === nextChange && currentLocale===nexttLocale){
        return false;

     }
     return true;

    }s
    render(){
        const {change, locale, show, enable} = this.props;
        if(!enable) return null;
        return(
            <>
         <button type='button' onClick={()=>change(locale)}>
            {locale=== 'bn-BD' ? 'Change Clock' : 'Poriborton korun'}

         </button>
         {show &&<p>Hello</p> }
         </>
    )
        }

}
export default Button