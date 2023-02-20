import {Form} from "../schema";
import workRequestImg from "../assets/img/work-request-form-bg.png";
import contactFormImg from "../assets/img/contact-form-bg.png";
import rsvpFormImg from "../assets/img/rsvp-form.png";
import partyInviteImg from "../assets/img/party-form-bg.png";
import eventRegImg from "../assets/img/event-registration-form.png";

export type TemplateType = Omit<Form, "id" | "responses" | "createdAt" | "lastModifiedAt">

const templates: TemplateType[] = [
  {
    name: "Work Request",
    thumbnail: workRequestImg,
  },
  {
    name: "Contact Information",
    thumbnail: contactFormImg,
  },
  {
    name: "RSVP",
    thumbnail: rsvpFormImg,
  },
  {
    name: "Party Invite",
    thumbnail: partyInviteImg,
  },
  {
    name: "Event Registration",
    thumbnail: eventRegImg,
  }
]

export default templates