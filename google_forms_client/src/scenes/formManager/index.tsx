import FormHeader from "../../components/scenes/formManager/FormHeader";
import {ActivityHint} from "../../schema";
import Root from "../../components/layouts/Root";

export default function FormManager() {
  const activityHint: ActivityHint = {state: "All changes saved in Drive", summary: "Saved minutes ago"}
  return (
    <Root className="tw-mt-1">
      <FormHeader activityHint={activityHint}/>
    </Root>
  )
}