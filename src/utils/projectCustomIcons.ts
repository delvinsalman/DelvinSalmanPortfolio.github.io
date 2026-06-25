import type { ComponentType } from "react";
import { CattlemansCrossingIcon } from "../components/icons/CattlemansCrossingIcon";
import { AshIcon } from "../components/icons/AshIcon";
import { SpaceToastIcon } from "../components/icons/SpaceToastIcon";
import { GraveDiggerIcon } from "../components/icons/GraveDiggerIcon";
import { AiChatInterfaceIcon } from "../components/icons/AiChatInterfaceIcon";
import { AiImageEditorIcon } from "../components/icons/AiImageEditorIcon";
import { QrCodeGeneratorIcon } from "../components/icons/QrCodeGeneratorIcon";
import { CapturesIoIcon } from "../components/icons/CapturesIoIcon";
import { WeatherAppIcon } from "../components/icons/WeatherAppIcon";
import { SmellsFishyIcon } from "../components/icons/SmellsFishyIcon";
import { VisualTouchIcon } from "../components/icons/VisualTouchIcon";

export type ProjectCustomIconProps = { className?: string };

export const projectCustomIcons: Partial<
  Record<string, ComponentType<ProjectCustomIconProps>>
> = {
  "cattlemans-crossing": CattlemansCrossingIcon,
  ash: AshIcon,
  "space-toast": SpaceToastIcon,
  "grave-digger": GraveDiggerIcon,
  "ai-chat-interface": AiChatInterfaceIcon,
  "ai-image-editor": AiImageEditorIcon,
  "qr-code-generator": QrCodeGeneratorIcon,
  "captures-io": CapturesIoIcon,
  "weather-application": WeatherAppIcon,
  "smells-fishy": SmellsFishyIcon,
  "visual-touch": VisualTouchIcon,
};
