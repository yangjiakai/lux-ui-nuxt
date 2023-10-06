export default [
  {
    icon: "mdi-file-lock-outline",
    text: "Auth Pages",
    regex: /^\/auth/,
    items: [
      {
        icon: "mdi-login",
        text: "Login",
        link: "/auth/signin",
      },
      {
        icon: "mdi-logout",
        text: "Register",
        link: "/auth/signup",
      },
      {
        icon: "mdi-email-check",
        text: "Mail Verify",
        link: "/auth/verify-email",
      },

    ],
  },

];
