import { distance } from 'fastest-levenshtein';

export const maxThreeDigitsAllowedValidator = (initialValue: string) => ({
    name: 'maxThreeDigitsAllowed',
    test(value: string, ctx: any) {
        if (distance(initialValue, value) > 3) {
            return ctx.createError({ message: 'max. three digit changes' });
        }
        return true;
    },
});
