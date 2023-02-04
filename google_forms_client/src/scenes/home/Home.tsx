import MainHeader from "../../components/layouts/MainHeader";
import Root from "../../components/layouts/Root";
import TemplateOverview from "../../components/scenes/home/TemplateOverview";

export default function Home() {
  return (
    <Root>
      <MainHeader/>
      <TemplateOverview/>
    </Root>
  )
}