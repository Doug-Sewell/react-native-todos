class Validator {
    item: string;
    attempts: number;
    validatee: string;

    constructor(item: string, attempts: number, validatee: string) {
        this.item = item;
        this.attempts = attempts
        this.validatee = validatee;
    }

    setItem(item: string){
        this.item = item;
    }

    setValidatee(input: string){
        this.validatee = input;
    }

    setAttempts(attempt: number){
        this.attempts = attempt;
    }

    getItem() {
        return this.item;
    }

    getValidatee(){
        return this.validatee;
    }

    getAttempts() {
        return this.attempts;
    }

    isSafe() {
        /*
            Avoid Buffer attacks by maxSize <= 12
            Avoid Url redirection attacks
            Avoid script injection attacks // xss
        */
        if (!this.item.match(/<script>|<.{0,}>|http|script|&ls/gm) || this.item.length <= 12) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default Validator;