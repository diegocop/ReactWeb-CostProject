import styles from '../project/ProjectForm.module.css'

import {useState} from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm(){

    function submit(){

    }

    function handleOnChange(e){

    }
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="nome do serviço"
            name="name"
            placeholder="insira o nome do serviço"
            handleOnChange={handleOnChange}/>
            <Input
            type="number"
            text="custo do serviço"
            name="cost"
            placeholder="insira o valor total"
            handleOnChange={handleOnChange}/>
            <Input
            type="text"
            text="descrição do serviço"
            name="description"
            placeholder="descreva o serviço"
            handleOnChange={handleOnChange}/>
        </form>
    )

}

export default ServiceForm