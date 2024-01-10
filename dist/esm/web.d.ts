import { WebPlugin } from '@capacitor/core';
import type { FreeraspPlugin, FreeraspConfig } from './definitions';
export declare class FreeraspWeb extends WebPlugin implements FreeraspPlugin {
    onInvalidCallback(): void;
    getThreatIdentifiers(): Promise<{
        ids: number[];
    }>;
    getThreatChannelData(): Promise<{
        ids: [string, string];
    }>;
    talsecStart(_options: {
        config: FreeraspConfig;
    }): Promise<{
        started: boolean;
    }>;
}
