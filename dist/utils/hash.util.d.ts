export declare const HashUtils: {
    hash(plain: string): Promise<string>;
    compare(plain: string, hashed: string): Promise<boolean>;
};
