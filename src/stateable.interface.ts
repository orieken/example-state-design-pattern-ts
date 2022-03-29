import { Job } from "./job";

export interface Stateable {
  job: Job;
  completeJob(): void
  errorJob(): void
  acceptJob(): void
  processJob(): void
  pauseJob(): void
  uncertainJob(): void
}
