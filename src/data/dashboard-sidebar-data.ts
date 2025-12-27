import {
  BugIcon,
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  CircleDollarSignIcon,
  ConstructionIcon,
  FileCheck2Icon,
  FileXIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  LockIcon,
  MessageCircleQuestionMarkIcon,
  PhoneIcon,
  ServerOffIcon,
  Table2Icon,
  UsersIcon,
  UserXIcon,
} from "lucide-react";
import type { SidebarGroupData } from "@/types/sidebar-data";

type DashboardSidebarData = {
  sidebarGroups: {
    blocksGroup: SidebarGroupData;
    componentsGroup: SidebarGroupData;
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
    blocksGroup: {
      label: "Blocks",
      menu: {
        items: [
          {
            title: "Dashboard",
            Icon: LayoutDashboardIcon,
            items: [
              {
                title: "Default",
                url: "/dashboard",
                Icon: LayoutDashboardIcon,
              },
              {
                title: "Analytics",
                url: "/dashboard/analytics",
                Icon: ChartNoAxesCombinedIcon,
              },
              {
                title: "Users",
                url: "/dashboard/users",
                Icon: UsersIcon,
              },
            ],
          },
          {
            title: "Auth",
            Icon: KeyRoundIcon,
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
            Icon: BugIcon,
            items: [
              {
                title: "Unauthorized",
                url: "/pages/errors/unauthorized",
                Icon: LockIcon,
              },
              {
                title: "Forbidden",
                url: "/pages/errors/forbidden",
                Icon: UserXIcon,
              },
              {
                title: "Not Found",
                url: "/pages/errors/not-found",
                Icon: FileXIcon,
              },
              {
                title: "Internal Server Error",
                url: "/pages/errors/internal-server-error",
                Icon: ServerOffIcon,
              },
              {
                title: "Maintenance Error",
                url: "/pages/errors/maintenance-error",
                Icon: ConstructionIcon,
              },
            ],
          },
          {
            title: "Pricing",
            Icon: CircleDollarSignIcon,
            url: "/pages/pricing",
          },
          {
            title: "Contact Us",
            Icon: PhoneIcon,
            url: "/pages/contact-us",
          },
          {
            title: "FAQs",
            Icon: MessageCircleQuestionMarkIcon,
            url: "/pages/faqs",
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
            Icon: ChartPieIcon,
          },
          {
            title: "Tables",
            Icon: Table2Icon,
          },
          {
            title: "Forms",
            Icon: FileCheck2Icon,
          },
        ],
      },
    },
  },
};

export default dashboardSidebarData;
