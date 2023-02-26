import {useCallback} from "react";
import {useMutation} from "react-query";
import MainHeader from "../../components/layouts/MainHeader";
import Root from "../../components/layouts/Root";
import TemplateOverview from "../../components/scenes/home/TemplateOverview";
import createNewForm from "../../api/mutations/createNewForm";
import {useNavigate} from "react-router";
import {url} from "../../routing"

export default function Home() {
  const navigate = useNavigate();

  const {mutate}  = useMutation(createNewForm, {
    onSuccess: (data) => {
      navigate(url("manageForm", {"formId": data.id}));
    },
    onError: (error) => {
      console.log("Error: ", error);
    }
  })

  const handleCreateBlankForm = useCallback(() => {
   mutate()
  }, [mutate])

  return (
    <Root>
      <MainHeader/>
      <TemplateOverview onCreateBlankForm={handleCreateBlankForm}/>
    </Root>
  )
}