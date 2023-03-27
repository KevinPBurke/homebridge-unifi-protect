/* Copyright(C) 2020-2023, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * protect-types.ts: Interface and type definitions for UniFi Protect.
 */

import { ProtectCameraConfig, ProtectLightConfig, ProtectSensorConfig, ProtectViewerConfig } from "unifi-protect";
import { ProtectCamera } from "./protect-camera.js";
import { ProtectDoorbell } from "./protect-doorbell.js";
import { ProtectLight } from "./protect-light.js";
import { ProtectSensor } from "./protect-sensor.js";
import { ProtectViewer } from "./protect-viewer.js";

// Plugin configuration options.
export interface ProtectOptions {
  controllers: ProtectNvrOptions[],
  debugAll: boolean,
  ffmpegOptions: string[],
  motionDuration: number,
  options: string[],
  ringDuration: number,
  verboseFfmpeg: boolean,
  videoEncoder: string,
  videoProcessor: string
}

// NVR configuration options.
export interface ProtectNvrOptions {
  address: string,
  doorbellMessages: {
    duration: number,
    message: string
  }[],
  mqttTopic: string,
  mqttUrl: string,
  name: string,
  username: string,
  password: string
}

// Define Protect logging conventions.
export interface ProtectLogging {

  debug: (message: string, ...parameters: unknown[]) => void,
  error: (message: string, ...parameters: unknown[]) => void,
  info: (message: string, ...parameters: unknown[]) => void,
  warn: (message: string, ...parameters: unknown[]) => void
}

// Some type aliases to signify what we device types we support.
export type ProtectDeviceConfigTypes = ProtectCameraConfig | ProtectLightConfig | ProtectSensorConfig | ProtectViewerConfig;
export type ProtectDevices = ProtectCamera | ProtectDoorbell | ProtectLight | ProtectSensor | ProtectViewer;

// HBUP reserved names.
export enum ProtectReservedNames {

  // Manage our contact sensor types.
  CONTACT_MOTION_SMARTDETECT = "ContactMotionSmartDetect",
  CONTACT_SENSOR = "ContactSensor",
  CONTACT_SENSOR_ALARM_SOUND = "ContactAlarmSound",

  // Manage our switch types.
  SWITCH_DOORBELL_TRIGGER = "DoorbellTrigger",
  SWITCH_DYNAMIC_BITRATE = "DynamicBitrate",
  SWITCH_HKSV_RECORDING = "HKSVRecordingSwitch",
  SWITCH_MOTION_SENSOR = "MotionSensorSwitch",
  SWITCH_MOTION_TRIGGER = "MotionSensorTrigger",
  SWITCH_UFP_RECORDING_ALWAYS = "UFPRecordingSwitch.always",
  SWITCH_UFP_RECORDING_DETECTIONS = "UFPRecordingSwitch.detections",
  SWITCH_UFP_RECORDING_NEVER = "UFPRecordingSwitch.never"
}
