
import menuLanding from "./menus/landing.menu";
import menuUI from "./menus/ui.menu";
import menuAuth from "./menus/auth.menu";
import menuWidget from "./menus/widget.menu";
import menuForm from "./menus/form.menu";
import menuChart from "./menus/chart.menu";
import menuTable from "./menus/table.menu";
export default {
  menu: [
    {
      text: "",
      items: [
        {

          text: "Dashboard",
          link: "/",
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
      text: "UI ",
      items: menuUI,
    },
    {
      text: "Auth ",
      items: menuAuth,
    },
    {
      text: "Widgets",
      items: menuWidget,
    },
    {
      text: "Form",
      items: menuForm,
    },
    {
      text: "Chart",
      items: menuChart,
    },
    {
      text: "Table",
      items: menuTable,
    }
  ],
};
