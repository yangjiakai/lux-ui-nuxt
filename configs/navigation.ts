
import menuLanding from "./menus/landing.menu";
import menuUI from "./menus/ui.menu";
import menuAuth from "./menus/auth.menu";

export default {
  menu: [
    {
      text: "",
      items: [
        {

          text: "Dashboard",
          link: "/dashboard",
          icon: "solar:widget-line-duotone",
        },
      ],
    },

    {
      text: "Landing",
      items: [
        ...menuLanding,

      ],
    },
    {
      text: "UI - Theme Preview",
      items: menuUI,
    },
    {
      text: "Auth ",
      items: menuAuth,
    },

  ],
};
