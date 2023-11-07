import styles from './Container.module.css'

function Container(props){

       
    return(

        //utiliza {props.children}   quando queremos colocar elementos dentro de um elemento pai q é essa div
            <div class={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div> 
              
    )     
        
    
}

export default Container