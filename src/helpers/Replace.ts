// T = tipagem original
// R = tipagem de replace
export type Replace<T, R> = Omit<T, keyof R> & R;
