import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/serviceForm'



 function Project() {

       
    const { id } = useParams()

    const [project, setProject] = useState([id])
     let [showProjectForm, setShowProjectForm] = useState(false)
     let [showServiceForm, setShowServiceForm] = useState(false)
     const [message, setMessage] = useState()
     const [type, setType] = useState()

    useEffect(() => { 
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        
        }).then((resp) => resp.json())
            .then((data) =>
            { setProject(data)  })
            .catch(err => console.log(err))
    }, [id])

     function editPost(project) {
         setMessage('')
         //budget validation
         if (project.budget < project.cost) {
             setMessage('O or�amento n�o pode ser menor que o custo do projeto!')
             setType('error')
             return false
         }

         fetch(`http://localhost:5000/projects/${project.id}`, {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(project),
         })
             .then(resp => resp.json())
             .then((data) => {
                 setProject(data)
                 setShowProjectForm(false)
                 setMessage('Projeto atualizado!')
                 setType('success')
             }).catch((err) => console.log("ocorreu um erro" + err))


     }

function toggleProejctForm(){
    setShowProjectForm(showProjectForm = !showProjectForm)
     }
     function toggleServiceForm() {
         setShowServiceForm(showServiceForm = !showServiceForm)
     }


     return (<>
         {project.name ?
        (
                 <div className={styles.project_delails}>
                     <Container customClass="column">
                         {message && <Message type={type} msg={message}/>}
                         <div className={styles.details_container}>
                             <h1>Projeto: {project.name}</h1>
                             <button className={styles.btn} onClick={toggleProejctForm}>{!showProjectForm ? 'editar projeto' : 'fechar'}</button> 
                             {!showProjectForm ? (
                                 <div className={styles.project_info} >
                                <p>
                                    <span>Categoria:</span> {project.category.name}</p>

                                <p>
                                    <span> Total do Or�amento:</span>R$ {project.budget}</p>
                                <p><span>Total utilizado:</span>R${project.cost}</p>
                                 </div>) : (<div className={styles.project_info}>
                                     <ProjectForm handleSubmit={editPost} btnText={"Concluir edi��o"} projectData={project} />
                            </div>
                        )}
       
   
                         </div>
                         <div className={styles.details_container}>
                             <h2>adicione um servi�o</h2>
                             <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar servi�o' : 'fechar'}</button>
                         </div>
                         <div className={styles.project_info}>
                             {showServiceForm && (
                              <ServiceForm/>
                          )}
                         </div>
                         <h2>servi�os</h2>
                         <Container customClass="start">
                             <p>itens de servi�o</p>
                         </Container>
                     </Container>
        </div>
        )
                    :<Loading /> }
                </>)
}

export default Project
