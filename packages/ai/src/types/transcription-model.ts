import { TranscriptionModelV2, TranscriptionModelV3 } from '@zenning/provider';

/**
Transcription model that is used by the AI SDK.
  */
export type TranscriptionModel =
  | string
  | TranscriptionModelV3
  | TranscriptionModelV2;
