import Form from "../../components/New";
import { userInputs } from "@/formSource";

const New = () =>{
    return(
       <Form userInputs={userInputs} title="Add user"/>
    )
}

export default New;