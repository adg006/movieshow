import { Inngest } from "inngest";
import User from "../models/User";

// CREATE A CLIENT TO SEND AND RECIEVE EVENTS
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// INNGEST FUNCTIONS TO CREATE USER DATA
const syncUserData = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url,
    };

    await User.create(userData);
  }
);

// INNGEST FUNCTIONS TO DELETE USER DATA
const deleteUserData = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await User.findByIdAndDelete(id);
  }
);

// INNGEST FUNCTIONS TO UPDATE USER DATA
const updateUserData = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url,
    };

    await User.findByIdAndUpdate(id, userData);
  }
);

export const functions = [syncUserData, deleteUserData, updateUserData];
