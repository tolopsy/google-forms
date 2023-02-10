import FormHeader from "../../components/scenes/formManager/FormHeader";
import {ActivityHint, Form} from "../../schema";
import Root from "../../components/layouts/Root";
import {SyntheticEvent, useState, ChangeEvent, useCallback} from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import clsx from "clsx";
import QuestionsTab from "./QuestionsTab";

type tabValues = "questions" | "responses"
export default function FormManager() {
  const [formTitle, setFormTitle] = useState<Form["name"]>("Untitled Form");
  const [formDescription, setFormDescription] = useState<Form["description"]>("");


  // TODO: To be made dynamic
  const activityHint: ActivityHint = {state: "Saved minutes ago", summary: "All changes saved in Drive"}
  const [value, setValue] = useState<tabValues>("questions");

  const handleSwitchTab = useCallback((event: SyntheticEvent, newValue: tabValues) => {
    setValue(newValue)
  }, [setValue])

  const handleSetTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormTitle && setFormTitle(event.currentTarget.value)
  }, [setFormTitle]);

  const handleSetDescription = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormDescription && setFormDescription(event.currentTarget.value)
  }, [setFormDescription]);

  return (
    <Root className="tw-mt-1">
      <FormHeader
        formTitle={formTitle}
        onSetTitle={handleSetTitle}
        activityHint={activityHint}
      />
      <div>
        <TabContext value={value}>
          <div className="tw-border-b tw-border-b-[#dadce0]">
            <TabList onChange={handleSwitchTab} indicatorColor="secondary" centered className="tw-h-2.5">
              <Tab
                label="Questions"
                value="questions"
                className={clsx({
                  "!tw-color-menu": value !== "questions",
                  "!tw-text-[#4c2b87]": value === "questions",
                  }, "!tw-normal-case !tw-font-family-brand")
                }
              />
              <Tab
                label="Responses"
                value="responses"
                className={clsx({
                  "!tw-color-menu": value !== "responses",
                  "!tw-text-[#4c2b87]": value === "responses",
                  }, "!tw-normal-case !tw-font-family-brand")
                }
              />
            </TabList>
          </div>
          <TabPanel value="questions" className="tw-bg-[#f4f4f9] ">
            <QuestionsTab
              formTitle={formTitle}
              onSetTitle={handleSetTitle}
              formDescription={formDescription}
              onSetDescription={handleSetDescription}
            />
          </TabPanel>
          <TabPanel value="responses">Responses</TabPanel>
        </TabContext>
      </div>
    </Root>
  )
}