import type { DashboardSidebarData } from "../types";

export default async function getDashboardSidebarData(): Promise<DashboardSidebarData> {
  await new Promise((r) => setTimeout(r, 0));

  return {
    dashboardSidebarGroups: {
      pagesGroup: {
        label: "Pages",
        menu: {
          items: [
            {
              title: "Dashboard",
              icon: "layout-dashboard",
              items: [
                {
                  title: "Default",
                  url: "/pages/dashboard",
                  icon: "layout-dashboard",
                },
                {
                  title: "Analytics",
                  url: "/pages/dashboard/analytics",
                  icon: "chart-no-axes-combined",
                },
                {
                  title: "Users",
                  url: "/pages/dashboard/users",
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
                  url: "/pages/auth/login",
                },
                {
                  title: "Sign Up",
                  url: "/pages/auth/sign-up",
                },
                {
                  title: "Forgot Password",
                  url: "/pages/auth/forgot-password",
                },
                {
                  title: "Reset Password",
                  url: "/pages/auth/reset-password",
                },
                {
                  title: "Verify Email",
                  url: "/pages/auth/verify-email",
                },
                {
                  title: "OTP",
                  url: "/pages/auth/otp",
                },
              ],
            },
            {
              title: "Erros",
              icon: "bug",
              items: [
                {
                  title: "Unauthorized",
                  url: "/pages/errors/unauthorized",
                  icon: "lock",
                },
                {
                  title: "Forbidden",
                  url: "/pages/errors/forbidden",
                  icon: "user-x",
                },
                {
                  title: "Not Found",
                  url: "/pages/errors/not-found",
                  icon: "file-x",
                },
                {
                  title: "Internal Server Error",
                  url: "/pages/errors/internal-server-error",
                  icon: "server-off",
                },
                {
                  title: "Maintenance Error",
                  url: "/pages/errors/maintenance-error",
                  icon: "construction",
                },
              ],
            },
            {
              title: "Pricing",
              url: "/pages/pricing",
              icon: "circle-dollar-sign",
            },
            {
              title: "Contact Us",
              url: "/pages/contact-us",
              icon: "phone",
            },
            {
              title: "FAQs",
              url: "/pages/faqs",
              icon: "message-circle-question-mark",
            },
          ],
        },
      },
      componentsGroup: {
        label: "Components",
        menu: {
          items: [
            {
              title: "Charts",
              icon: "chart-pie",
            },
            {
              title: "Tables",
              icon: "table-2",
            },
            {
              title: "Forms",
              icon: "file-check-corner",
            },
          ],
        },
      },
    },
  };
}
