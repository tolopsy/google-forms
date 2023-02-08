import FormHeader from "../../components/scenes/formManager/FormHeader";
import {ActivityHint} from "../../schema";

export default function FormManager() {
  const activityHint: ActivityHint = {state: "All changes saved in Drive", summary: "Saved minutes ago"}
  return (
    <>
      <FormHeader activityHint={activityHint}/>
    </>
  )
}