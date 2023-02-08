import {User} from "../schema"

// TODO: Update when user authentication is supported
export default function useCurrentUser(): User {
 return {
  id: "1",
  firstName: "Anonymous",
  lastName: "User",
  email: "anonymous.user@gmail.com"
 }
}
