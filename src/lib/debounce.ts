export default function debounce(fn: any, ms: number = 300) {
    let timeoutId: any;
    return function (...args: any) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(args), ms);
    };
}