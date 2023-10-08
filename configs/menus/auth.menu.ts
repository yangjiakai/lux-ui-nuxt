export default [
  {
    icon: "solar:shield-minus-line-duotone",
    text: "Auth Pages",
    regex: /^\/auth/,
    items: [
      {
        icon: "solar:login-3-line-duotone",
        text: "Login",
        link: "/auth/login",
      },
      {
        icon: "solar:logout-3-line-duotone",
        text: "Register",
        link: "/auth/login",
      },
      {
        icon: "fxemoji:email",
        text: "Mail Verify",
        link: "/auth/mail-vertify",
      },

    ],
  },

];
