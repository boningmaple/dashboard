import {
  BugIcon,
  ChartNoAxesCombinedIcon,
  CircleDollarSignIcon,
  ConstructionIcon,
  FileXIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  LockIcon,
  MessageCircleQuestionMarkIcon,
  PhoneIcon,
  ServerOffIcon,
  UsersIcon,
  UserXIcon,
} from "lucide-react";
import type { SidebarGroupData } from "@/types/sidebar-data";

type DashboardSidebarData = {
  sidebarGroups: {
    dashboardGroup: SidebarGroupData;
    pagesGroup: SidebarGroupData;
  };
};

// This is sample data.
const dashboardSidebarData: DashboardSidebarData = {
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEndIcon,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveformIcon,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: CommandIcon,
  //     plan: "Free",
  //   },
  // ],
  sidebarGroups: {
    dashboardGroup: {
      label: "Dashboard",
      menu: {
        items: [
          {
            title: "Default",
            url: "/dashboard",
            icon: LayoutDashboardIcon,
          },
          {
            title: "Analytics",
            url: "/dashboard/analytics",
            icon: ChartNoAxesCombinedIcon,
          },
          {
            title: "Users",
            url: "/dashboard/users",
            icon: UsersIcon,
          },
        ],
      },
    },
    pagesGroup: {
      label: "Pages",
      menu: {
        items: [
          {
            title: "Auth",
            icon: KeyRoundIcon,
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
            icon: BugIcon,
            items: [
              {
                title: "Unauthorized",
                url: "/pages/errors/unauthorized",
                icon: LockIcon,
              },
              {
                title: "Forbidden",
                url: "/pages/errors/forbidden",
                icon: UserXIcon,
              },
              {
                title: "Not Found",
                url: "/pages/errors/not-found",
                icon: FileXIcon,
              },
              {
                title: "Internal Server Error",
                url: "/pages/errors/internal-server-error",
                icon: ServerOffIcon,
              },
              {
                title: "Maintenance Error",
                url: "/pages/errors/maintenance-error",
                icon: ConstructionIcon,
              },
            ],
          },
          {
            title: "Pricing",
            icon: CircleDollarSignIcon,
            url: "/pages/pricing",
          },
          {
            title: "Contact Us",
            icon: PhoneIcon,
            url: "/pages/contact-us",
          },
          {
            title: "FAQs",
            icon: MessageCircleQuestionMarkIcon,
            url: "/pages/faqs",
          },
        ],
      },
    },
  },
};

export default dashboardSidebarData;
