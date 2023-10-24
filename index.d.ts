// Export entire nunjucks API surface
export type * from "nunjucks";

// API additions from nunjucks-llm
export declare function setAbortSignalOnContext(obj: any, signal: AbortSignal);