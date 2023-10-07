export default [
  {
    icon: "solar:shield-minus-line-duotone",
    text: "Auth Pages",
    regex: /^\/auth/,
    items: [
      {
        icon: "solar:login-3-line-duotone",
        text: "Login",
        link: "/auth/signin",
      },
      {
        icon: "solar:logout-3-line-duotone",
        text: "Register",
        link: "/auth/signup",
      },
      {
        icon: "fxemoji:email",
        text: "Mail Verify",
        link: "/auth/verify-email",
      },

    ],
  },

];
