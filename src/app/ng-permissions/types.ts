export type AccessLevel = 'read' | 'write' | 'delete';

export type AccessMap = {
    [level in AccessLevel]: boolean;
};

export type PermissionMap = {
    [module: string]: AccessMap
}