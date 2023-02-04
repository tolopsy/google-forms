import {Form} from "../schema";
import workRequestImg from "../assets/img/work-request-form-bg.png";
import contactFormImg from "../assets/img/contact-form-bg.png";
import rsvpFormImg from "../assets/img/rsvp-form.png";
import partyInviteImg from "../assets/img/party-form-bg.png";
import eventRegImg from "../assets/img/event-registration-form.png";

export type TemplateType = Omit<Form, "id" | "responses">

const templates: TemplateType[] = [
  {
    name: "Work Request",
    img: workRequestImg,
  },
  {
    name: "Contact Information",
    img: contactFormImg,
  },
  {
    name: "RSVP",
    img: rsvpFormImg,
  },
  {
    name: "Party Invite",
    img: partyInviteImg,
  },
  {
    name: "Event Registration",
    img: eventRegImg,
  }
]

export default templates