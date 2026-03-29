import { SiShadcnui } from "@icons-pack/react-simple-icons";
import {
  BugIcon,
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  CircleDollarSignIcon,
  ComponentIcon,
  ConstructionIcon,
  FileCheckCornerIcon,
  FileXIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  LockIcon,
  type LucideProps,
  MessageCircleQuestionMarkIcon,
  PaletteIcon,
  PhoneIcon,
  ServerOffIcon,
  Table2Icon,
  UsersIcon,
  UserXIcon,
} from "lucide-react";

const ICON_MAP = {
  // Lucide Icons
  "layout-dashboard": LayoutDashboardIcon,
  "chart-no-axes-combined": ChartNoAxesCombinedIcon,
  users: UsersIcon,
  "key-round": KeyRoundIcon,
  bug: BugIcon,
  lock: LockIcon,
  "user-x": UserXIcon,
  "file-x": FileXIcon,
  "server-off": ServerOffIcon,
  construction: ConstructionIcon,
  "circle-dollar-sign": CircleDollarSignIcon,
  phone: PhoneIcon,
  "message-circle-question-mark": MessageCircleQuestionMarkIcon,
  "chart-pie": ChartPieIcon,
  "table-2": Table2Icon,
  "file-check-corner": FileCheckCornerIcon,
  library: LibraryIcon,
  palette: PaletteIcon,
  component: ComponentIcon,
  // Brand Icons
  shadcnui: SiShadcnui,
} as const;

type IconName = keyof typeof ICON_MAP;

type Props = {
  name: string | undefined;
} & LucideProps;

export default function Icon(props: Props) {
  const { name } = props;

  if (!name) return null;

  if (!(name in ICON_MAP)) {
    return null;
  }
  const IconComponent = ICON_MAP[name as IconName];
  return <IconComponent {...props} />;
}
