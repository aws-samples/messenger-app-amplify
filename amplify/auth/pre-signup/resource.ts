import { defineFunction } from "@aws-amplify/backend";

export const preSignUp = defineFunction({
  name: "pre-sign-up-username-auth-check",
  resourceGroupName: "auth",
});
