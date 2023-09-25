import Form from "../../components/New";
import { productInputs } from "@/formSource";

const New = () =>{
    return(
       <Form userInputs={productInputs} title="Add product"/>
    )
}

export default New;