export default [
  {
    icon: "mdi-file-lock-outline",
    text: "权限页面",
    regex: /^\/auth/,
    items: [
      {
        icon: "mdi-login",
        text: "登录",
        link: "/auth/signin",
      },
      {
        icon: "mdi-logout",
        text: "注册",
        link: "/auth/signup",
      },
      {
        icon: "mdi-email-check",
        text: "邮箱验证",
        link: "/auth/verify-email",
      },

    ],
  },

];
