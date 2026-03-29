import type { DashboardSidebarData } from "../types";

export default async function getDashboardSidebarData(): Promise<DashboardSidebarData> {
  await new Promise((r) => setTimeout(r, 0));

  return {
    dashboardSidebarGroups: {
      postsGroup: {
        menu: {
          items: [
            {
              title: "Posts",
              icon: "library",
              items: [
                {
                  title: "Less is More",
                  url: "/posts/less-is-more",
                },
                {
                  title: "Markdown",
                  url: "/posts/markdown",
                },
              ],
            },
          ],
        },
      },
      designSystemGroup: {
        menu: {
          items: [
            {
              title: "Design System",
              icon: "palette",
              items: [
                {
                  title: "Typography",
                  url: "/design-system/style-typography",
                },
                {
                  title: "Color",
                  url: "/design-system/style-color",
                },
                {
                  title: "Shape",
                  url: "/design-system/style-shape",
                },
                {
                  title: "Elevation",
                  url: "/design-system/style-elevation",
                },
                {
                  title: "Motion",
                  url: "/design-system/style-motion",
                },
                {
                  title: "Ripple",
                  url: "/design-system/style-ripple",
                },

              ],
            },
          ],
        },
      },
      componentsGroup: {
        menu: {
          items: [
            {
              title: "Components",
              icon: "component",
              items: [
                {
                  title: "Alert",
                  url: "/components/alert",
                },
                {
                  title: "Avatar",
                  url: "/components/avatar",
                },
                {
                  title: "Badge",
                  url: "/components/badge",
                },
                {
                  title: "Button",
                  url: "/components/button",
                },
                {
                  title: "Card",
                  url: "/components/card",
                },
                {
                  title: "Chip",
                  url: "/components/chip",
                },
                {
                  title: "Input",
                  url: "/components/input",
                },
                {
                  title: "Kbd",
                  url: "/components/kbd",
                },
              ],
            },
          ],
        },
      },
      blocksGroup: {
        label: "Blocks",
        menu: {
          items: [
            {
              title: "Charts",
              icon: "chart-pie",
              items: [
                {
                  title: "Recharts",
                  items: [
                    {
                      title: "Line Charts",
                      url: "/blocks/charts/recharts/line-charts",
                    },
                    {
                      title: "Bar Charts",
                      url: "/blocks/charts/recharts/bar-charts",
                    },
                    {
                      title: "Pie Charts",
                      url: "/blocks/charts/recharts/pie-charts",
                    },
                  ],
                },
                {
                  title: "Echarts",
                  items: [
                    {
                      title: "Line Charts",
                      url: "/blocks/charts/echarts/line-charts",
                    },
                    {
                      title: "Bar Charts",
                      url: "/blocks/charts/echarts/bar-charts",
                    },
                    {
                      title: "Pie Charts",
                      url: "/blocks/charts/echarts/pie-charts",
                    },
                  ],
                },
              ],
            },
            {
              title: "Tables",
              icon: "table-2",
              url: "/blocks/tables",
            },
            {
              title: "Forms",
              icon: "file-check-corner",
              items: [
                {
                  title: "Login",
                  url: "/blocks/forms/login",
                },
                {
                  title: "Signup",
                  url: "/blocks/forms/signup",
                },
              ],
            },
          ],
        },
      },
      templatesGroup: {
        label: "Templates",
        menu: {
          items: [
            {
              title: "Dashboard",
              icon: "layout-dashboard",
              items: [
                {
                  title: "Default",
                  url: "/templates/dashboard",
                  icon: "layout-dashboard",
                },
                {
                  title: "Analytics",
                  url: "/templates/dashboard/analytics",
                  icon: "chart-no-axes-combined",
                },
                {
                  title: "Users",
                  url: "/templates/dashboard/users",
                  icon: "users",
                },
              ],
            },
            {
              title: "Auth",
              icon: "key-round",
              items: [
                {
                  title: "Login",
                  url: "/templates/auth/login",
                },
                {
                  title: "Sign Up",
                  url: "/templates/auth/sign-up",
                },
                {
                  title: "Forgot Password",
                  url: "/templates/auth/forgot-password",
                },
                {
                  title: "Reset Password",
                  url: "/templates/auth/reset-password",
                },
                {
                  title: "Verify Email",
                  url: "/templates/auth/verify-email",
                },
                {
                  title: "OTP",
                  url: "/templates/auth/otp",
                },
              ],
            },
            {
              title: "Erros",
              icon: "bug",
              items: [
                {
                  title: "Unauthorized",
                  url: "/templates/errors/unauthorized",
                  icon: "lock",
                },
                {
                  title: "Forbidden",
                  url: "/templates/errors/forbidden",
                  icon: "user-x",
                },
                {
                  title: "Not Found",
                  url: "/templates/errors/not-found",
                  icon: "file-x",
                },
                {
                  title: "Internal Server Error",
                  url: "/templates/errors/internal-server-error",
                  icon: "server-off",
                },
                {
                  title: "Maintenance Error",
                  url: "/templates/errors/maintenance-error",
                  icon: "construction",
                },
              ],
            },
            {
              title: "Pricing",
              url: "/templates/pricing",
              icon: "circle-dollar-sign",
            },
            {
              title: "Contact Us",
              url: "/templates/contact-us",
              icon: "phone",
            },
            {
              title: "FAQs",
              url: "/templates/faqs",
              icon: "message-circle-question-mark",
            },
          ],
        },
      },
    },
  };
}
